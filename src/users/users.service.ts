import { Injectable } from '@nestjs/common';
import UserDto from './users.dto';

export type User = any;
@Injectable()
export class UsersService {
  private readonly users: UserDto[] = [
    {
      userId: 1,
      username: 'john',
      password: 'changeme',
    },
    {
      userId: 2,
      username: 'maria',
      password: 'guess',
    },
  ];

  async findOne(username: string): Promise<User | undefined> {
    return this.users.find((user) => user.username === username);
  }

  async create(body: UserDto): Promise<UserDto> {
    this.users.push(body);
    return body;
  }
  async find(): Promise<UserDto[]> {
    return this.users;
  }
}
