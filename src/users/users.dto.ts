import { IsNotEmpty, IsAlphanumeric, IsAlpha } from 'class-validator';

export default class UserDto {
  @IsNotEmpty()
  @IsAlphanumeric()
  userId: number;

  @IsNotEmpty()
  @IsAlpha()
  username: string;

  @IsNotEmpty()
  @IsAlpha()
  password: string;
}
