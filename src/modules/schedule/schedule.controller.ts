import { Controller, Get, Post, Body, Param, Delete, Put, Query, Req, Res, HttpStatus, UseGuards } from '@nestjs/common';
import { ApiTags, ApiOperation, ApiResponse } from '@nestjs/swagger';
import { AppointmentScheduleService } from './schedule.service';
import { CreateScheduleDto } from './dto/createSchedule.dto';
import { UpdateScheduleDto } from './dto/updateSchedule.dto';
import { Request, Response } from 'express';
import { BaseController } from 'src/base/baseController';
import { JwtAuthGuard } from '../auth/guards/jwtAuth.guard';
import { PermissionGuard } from '../common/guards/permission.guard';
import { RequirePermission } from '../common/decorators/requirePermission.decorator';
import { PERMISSIONS } from '../common/constants/permission.constant';

@Controller('schedules')
@ApiTags('Schedules')
@UseGuards(JwtAuthGuard, PermissionGuard)
export class AppointmentScheduleController extends BaseController {
  constructor(private readonly service: AppointmentScheduleService) {
    super();
  }

  // ================= CREATE =================
  @Post()
  @RequirePermission(PERMISSIONS.SCHEDULE_CREATE)
  @ApiOperation({ summary: 'Tạo khung giờ khám' })
  async create(@Req() req: Request, @Res() res: Response, @Body() dto: CreateScheduleDto) {
    try {
      const response = await this.service.create(dto);
      return this.responseCreated(res, response);
    } catch (error) {
      return this.responseError(res, error, {
        message: error?.response?.message
      });
    }
  }

  // ================= GET BY DOCTOR =================
  @Get(':doctorId')
  @RequirePermission(PERMISSIONS.SCHEDULE_VIEW)
  @ApiOperation({ summary: 'Lấy lịch khám theo bác sĩ' })
  async getByDoctor(@Res() res: Response, @Param('doctorId') doctorId: number, @Query('date') date?: string, @Query('time') time?: string) {
    try {
      const response = await this.service.findByDoctor(doctorId, date, time);
      return this.responseSuccess(res, response);
    } catch (error) {
      return this.responseError(res, error, {
        message: error?.response?.message
      });
    }
  }

  // ================= UPDATE =================
  @Put(':id')
  @RequirePermission(PERMISSIONS.SCHEDULE_UPDATE)
  @ApiOperation({ summary: 'Cập nhật khung giờ khám' })
  async update(@Req() req: Request, @Res() res: Response, @Param('id') id: number, @Body() dto: UpdateScheduleDto) {
    try {
      const response = await this.service.update(id, dto);
      return this.responseSuccess(res, response);
    } catch (error) {
      return this.responseError(res, error, {
        message: error?.response?.message
      });
    }
  }

  // ================= DELETE =================
  @Delete(':id')
  @RequirePermission(PERMISSIONS.SCHEDULE_DELETE)
  @ApiOperation({ summary: 'Xóa khung giờ khám' })
  async delete(@Req() req: Request, @Res() res: Response, @Param('id') id: number) {
    try {
      const response = await this.service.delete(id);
      return this.responseSuccess(res, response);
    } catch (error) {
      return this.responseError(res, error, {
        message: error?.response?.message
      });
    }
  }
}
