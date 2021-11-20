import { MongooseModule } from '@nestjs/mongoose';
import { T } from 'src/constants/app';

export const useMongooseConnect = (x: T, y: T) => {
  return MongooseModule.forFeature([{ name: x.name, schema: y }]);
};
