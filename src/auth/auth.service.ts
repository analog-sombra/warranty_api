import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as argon2 from 'argon2';

@Injectable()
export class AuthService {
  constructor(private readonly prisma: PrismaService) {}

  async login(contact: string, password: string) {
    try {
      const is_user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!is_user) {
        throw new BadGatewayException('User not found');
      }

      if (!is_user.password) {
        throw new BadGatewayException('Password not found');
      }

      const isvalid: boolean = await argon2.verify(is_user.password, password);

      if (!isvalid) {
        throw new BadGatewayException('Password not valid');
      }

      return is_user;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async signup(mobile: string, name: string, password: string) {
    try {
      const hashedPassword = await argon2.hash(password);

      const user = await this.prisma.user.create({
        data: {
          contact1: mobile,
          name: name,
          password: hashedPassword,
          is_dealer: false,
          is_manufacturer: false,
          email: 'test@gmail.com',
          zone_id: 1,
        },
      });

      return user;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }
}
