import { IsEmail, IsNotEmpty, IsString } from 'class-validator';

/**
 * Admin dto
 */
export class AdminDto {
  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsEmail()
  email: string;

  @IsNotEmpty()
  @IsString()
  password: string;

  @IsNotEmpty()
  @IsString()
  role: string;

  @IsNotEmpty()
  @IsString()
  image: string;
}
