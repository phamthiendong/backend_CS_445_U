import { MiddlewareConsumer, Module, NestModule } from '@nestjs/common';
import { ScheduleModule } from '@nestjs/schedule';
import { ConfigModule } from '@nestjs/config';
import { AppController } from './app.controller';
import { CustomLogger } from './common/modules/logger/customerLogger.service';
import { LoggerMiddleware } from './common/middlewares/middleware';

import { UserModule } from './modules/users/user.module';
import { AuthModule } from './modules/auth/auth.module';

import { EventModule } from './common/modules/events/event.module';
import { ActivityLogModule } from './modules/activityLogs/activityLog.module';
import { DatabaseModule } from './common/databases/database.module';
import { MailModule } from './common/mail/mail.module';
import { SeederModule } from './common/databases/seeder.module';
import { SpecialtyModule } from './modules/specialty/specialty.module';

import { DoctorsModule } from './modules/doctors/doctors.module';
import { CloudinaryModule } from './modules/common/cloudinary/cloudinary.module';
import { ReviewModule } from './modules/reviews/review.module';
import { NotificationModule } from './modules/notification/notification.module';

@Module({
  imports: [
    // Config Module
    ConfigModule.forRoot({
      isGlobal: true
    }),

    // Schedule Modules
    ScheduleModule.forRoot(),

    // Database Module
    DatabaseModule,
    SeederModule,

    // Mail Module
    MailModule,

    // Event Module
    EventModule,

    // Feature Modules
    UserModule,
    AuthModule,
    DoctorsModule,

    ActivityLogModule,

    SpecialtyModule,
    CloudinaryModule,
    ReviewModule,
    NotificationModule
  ],
  controllers: [AppController],
  providers: [CustomLogger]
})
export class AppModule implements NestModule {
  configure(consumer: MiddlewareConsumer): void {
    consumer.apply(LoggerMiddleware).forRoutes(AppController);
  }
}
