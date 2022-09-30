import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { PersonModule } from './person/person.module';
import { SequelizeModule } from '@nestjs/sequelize';
import { DatabaseModule } from './database/database.module';
import Person from './person/person.model';
import { MulterModule } from '@nestjs/platform-express/multer';
import { AuthModule } from './auth/auth.module';
import { UsersModule } from './users/users.module';
import { EventEmitterModule } from '@nestjs/event-emitter';
import { MailerModule } from '@nestjs-modules/mailer';
import { EmailController } from './email.controller';
@Module({
  imports: [
    PersonModule,
    DatabaseModule,
    MulterModule.register({
      dest: './upload',
    }),
    AuthModule,
    UsersModule,
    EventEmitterModule.forRoot(),
    MailerModule.forRoot({
      transport: {
        host: 'smtp.sendgrid.net',
        auth: {
          user: 'apikey',
          pass: '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',
        },
      },
    }),
  ],
  controllers: [AppController, EmailController],
  providers: [AppService],
})
export class AppModule {}
