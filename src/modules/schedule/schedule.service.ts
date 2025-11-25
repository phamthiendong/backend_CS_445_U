import { Injectable, NotFoundException, BadRequestException } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

import { AppointmentSchedule } from './entities/schedule.entity';
import { CreateScheduleDto } from './dto/createSchedule.dto';
import { UpdateScheduleDto } from './dto/updateSchedule.dto';
import { ERROR_MESSAGES } from 'src/common/constants/errorMessage.constant';

@Injectable()
export class AppointmentScheduleService {
  constructor(
    @InjectRepository(AppointmentSchedule)
    private readonly repo: Repository<AppointmentSchedule>
  ) {}

  // ========================= CREATE =========================
  async create(dto: CreateScheduleDto) {
    const schedule = this.repo.create(dto);
    const saved = await this.repo.save(schedule);

    return {
      message: ERROR_MESSAGES.common.CREATED,
      data: saved
    };
  }

  // ========================= GET BY DOCTOR =========================
  async findByDoctor(doctorId: number, date?: string, time?: string) {
    const schedules = await this.repo.find({
      where: {
        doctorId,
        ...(date && { date }),
        ...(time && { startTime: time })
      },
      order: { startTime: 'ASC' }
    });

    if (!schedules || schedules.length === 0) {
      throw new NotFoundException({
        message: ERROR_MESSAGES.schedule?.NOT_FOUND || 'Không tìm thấy lịch khám phù hợp'
      });
    }

    return {
      message: ERROR_MESSAGES.common.SUCCESSFUL,
      data: schedules
    };
  }

  // ========================= UPDATE =========================
  async update(id: number, dto: UpdateScheduleDto) {
    const schedule = await this.repo.findOne({ where: { id } });

    if (!schedule) {
      throw new NotFoundException({
        message: ERROR_MESSAGES.schedule?.NOT_FOUND || 'Lịch khám không tồn tại'
      });
    }

    await this.repo.update(id, dto);
    const updated = await this.repo.findOne({ where: { id } });

    return {
      message: ERROR_MESSAGES.common.SUCCESSFUL,
      data: updated
    };
  }

  // ========================= DELETE =========================
  async delete(id: number) {
    const schedule = await this.repo.findOne({ where: { id } });
    if (!schedule) {
      throw new NotFoundException({
        message: ERROR_MESSAGES.specialty.SPECIALTY_NOT_FOUND
      });
    }

    await this.repo.delete(id);

    return {
      message: ERROR_MESSAGES.common.SUCCESSFUL,
      data: { id }
    };
  }
}
