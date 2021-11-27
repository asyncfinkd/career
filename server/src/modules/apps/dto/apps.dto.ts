import { IsNotEmpty, IsString } from 'class-validator';

/**
 * Apps delete dto
 */
export class AppsDeleteDto {
  @IsNotEmpty()
  @IsString()
  _id: string;
}
