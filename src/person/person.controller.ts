import { Controller, Get, Post, Body, Param } from '@nestjs/common';
import PersonCreateDto from './person.create.dto';
import Person from './person.model';
import { PersonService } from './person.service';

@Controller('person')
export class PersonController {
  constructor(private personService: PersonService) {}

  @Get()
  getAll() {
    return this.personService.findAll();
  }

  @Get(':id')
  getById(@Param() params) {
    return this.personService.findOne(params.id);
  }

  @Post()
  create(@Body() body: PersonCreateDto) {
    return this.personService.create(body);
  }
}
