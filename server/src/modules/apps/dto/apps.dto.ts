import { IsNotEmpty, IsString } from 'class-validator';

export class AppsDeleteDto {
  @IsNotEmpty()
  @IsString()
  _id: string;
}
