import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Post dto
 */
export class PostDto {
  _id: string;

  @IsNotEmpty()
  @IsString()
  title: string;

  @IsNotEmpty()
  @IsString()
  description: string;

  @IsNotEmpty()
  @IsString()
  time: string;

  @IsNotEmpty()
  @IsString()
  location: string;
}

/**
 * Post delete dto
 */
export class PostDeleteDto {
  @IsNotEmpty()
  @IsString()
  _id: string;
}
