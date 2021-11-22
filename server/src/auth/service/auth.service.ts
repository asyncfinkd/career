import { Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { InjectModel } from '@nestjs/mongoose';
import {
  AdminDocument,
  AdminSchema,
} from 'src/modules/admin/model/admin.model';
import { Model } from 'mongoose';
import { TAuth } from '../types';

@Injectable()
export class AuthService {
  constructor(
    @InjectModel(AdminSchema.name)
    private authModel: Model<AdminDocument>,
    private jwtService: JwtService,
  ) {}

  async signinLocal(user: TAuth) {
    return this.authModel
      .findOne({ email: user.email })
      .then(async (result) => {
        if (result) {
          if (user.password == result.password) {
            const access_token = this.signUser(
              result._id,
              result.email,
              'admin',
            );

            return {
              success: true,
              msg: 'Congratulation, You logged in system',
              access_token: access_token,
            };
          } else {
            throw new UnauthorizedException('Credentials incorrect');
          }
        } else {
          throw new UnauthorizedException('Credentials incorrect');
        }
      });
  }

  signUser(id: number, email: string, type: string) {
    return this.jwtService.sign({
      userId: id,
      email,
      role: type,
    });
  }
}
