import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BaseService } from 'src/base/base.service';
import { city, Prisma } from '@prisma/client';
import { DefaultArgs } from 'generated/prisma/runtime/library';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { CityPagination } from './city.resolver';

@Injectable()
export class CityService extends BaseService<
  city,
  typeof CreateCityInput,
  typeof UpdateCityInput,
  typeof CityPagination,
  Prisma.cityDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('City', prisma.city);
  }
}
