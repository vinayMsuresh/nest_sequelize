import {
  Controller,
  Post,
  Body,
  Get,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import UserDto from './users.dto';
import { UsersService } from './users.service';

@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Post()
  @UsePipes(new ValidationPipe({ transform: true }))
  create(@Body() body: UserDto) {
    return this.usersService.create(body);
  }

  @Get()
  findAll() {
    return this.usersService.find();
  }
}
