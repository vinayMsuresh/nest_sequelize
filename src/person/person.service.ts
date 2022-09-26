import { Injectable, Inject } from '@nestjs/common';
import PersonCreateDto from './person.create.dto';
import Person from './person.model';
@Injectable()
export class PersonService {
  constructor(
    @Inject('PERSON_REPOSITORY')
    private readonly PersonModel: typeof Person,
  ) {}

  async create(person): Promise<Person> {
    return await this.PersonModel.create<Person>(person);
  }

  async findAll(): Promise<Person[]> {
    return this.PersonModel.findAll();
  }

  async findOne(id: number): Promise<Person> {
    return this.PersonModel.findOne({ where: { id } });
  }
}
