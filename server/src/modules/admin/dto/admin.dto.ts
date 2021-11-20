import { IsEmail, IsNotEmpty, IsNumber, IsString } from 'class-validator';

export class AdminDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
