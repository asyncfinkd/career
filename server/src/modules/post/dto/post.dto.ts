import { IsNotEmpty, IsString } from 'class-validator';

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

export class PostDeleteDto {
  @IsNotEmpty()
  @IsString()
  _id: string;
}
