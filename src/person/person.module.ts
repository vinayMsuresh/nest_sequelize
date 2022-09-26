import { Module } from '@nestjs/common';
import { PersonController } from './person.controller';
import { PersonService } from './person.service';
import { DatabaseModule } from 'src/database/database.module';
import { PersonProvider } from './person.provider';
@Module({
  imports: [DatabaseModule],
  controllers: [PersonController],
  providers: [PersonService, ...PersonProvider],
})
export class PersonModule {}
