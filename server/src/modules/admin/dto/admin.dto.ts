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

/**
 * Admin delete dto
 */
export class AdminDeleteDto {
  @IsNotEmpty()
  @IsString()
  _id: string;
}

export class AdminEditDto {
  @IsNotEmpty()
  @IsString()
  _id: string;

  @IsNotEmpty()
  @IsString()
  email: string;

  @IsNotEmpty()
  @IsString()
  fullName: string;

  @IsNotEmpty()
  @IsString()
  password: string;
}
