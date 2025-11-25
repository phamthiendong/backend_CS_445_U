import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { AppointmentScheduleController } from './schedule.controller';
import { AppointmentScheduleService } from './schedule.service';
import { AppointmentSchedule } from './entities/schedule.entity';

@Module({
  imports: [TypeOrmModule.forFeature([AppointmentSchedule])],
  controllers: [AppointmentScheduleController],
  providers: [AppointmentScheduleService],
  exports: [AppointmentScheduleService]
})
export class AppointmentScheduleModule {}
