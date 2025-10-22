import { BadGatewayException, Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import * as argon2 from 'argon2';
import axios from 'axios';
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

  async optLogin(contact: string) {
    try {
      let user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        user = await this.prisma.user.create({
          data: {
            contact1: contact,
            name: 'Guest User',
            is_dealer: false,
            is_manufacturer: false,
            zone_id: 1,
          },
        });

        if (!user) {
          throw new BadGatewayException('User creation failed');
        }
      }

      // Generate and send OTP
      const otp = this.generateOTP(4);

      // const otp_response = await axios.post(
      //   `https://webpostservice.com/sendsms_v2.0/sendsms.php?apikey=c21hcnRUY2g6NUFiMU9GR2U=&type=TEXT&sender=SMRTHQ&mobile=${contact}&message=Your%20OTP%20for%20App%20Login%20is%20${otp}.The%20OTP%20is%20valid%20for%203%20Mins.%20Smart%20Technologies.&peId=1001424959147859474&tempId=1007633507481839611`,
      // );
      const otp_response = await axios.post(
        `https://webpostservice.com/sendsms_v2.0/sendsms.php?apikey=c21hcnRUY2g6NUFiMU9GR2U=&type=TEXT&sender=DBAWLA&mobile=${contact}&message=Your%20OTP%20for%20Dabbawala%20App%20Login%20is%20${otp}.The%20OTP%20is%20valid%20for%203%20Mins.&peId=1001424959147859474&tempId=1007815568981115610`,
      );
      // eslint-disable-next-line @typescript-eslint/no-unsafe-member-access
      if (otp_response.data.startsWith('SUBMIT_SUCCESS')) {
        await this.prisma.user.update({
          where: { id: user.id },
          data: { otp: otp },
        });
      } else {
        throw new BadGatewayException('Failed to send OTP');
      }

      return user;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  async verifyOtp(contact: string, otp: string) {
    try {
      const user = await this.prisma.user.findFirst({
        where: {
          contact1: contact,
          deletedAt: null,
          status: 'ACTIVE',
        },
      });

      if (!user) {
        throw new BadGatewayException('User not found');
      }

      if (user.otp !== otp) {
        throw new BadGatewayException('Invalid OTP');
      }

      // OTP is valid, proceed with login
      return user;
    } catch (error) {
      throw new BadGatewayException(error);
    }
  }

  generateOTP(len: number): string {
    const digits = '0123456789';
    let OTP = '';
    for (let i = 0; i < len; i++) {
      OTP += digits[Math.floor(Math.random() * 10)];
    }
    return OTP;
  }
}
