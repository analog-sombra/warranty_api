import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BaseService } from 'src/base/base.service';
import { city, Prisma } from '@prisma/client';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { WhereCitySearchInput } from './dto/search-city.input';
import { CityPagination } from './city.resolver';
import { DefaultArgs } from '@prisma/client/runtime/library';

@Injectable()
export class CityService extends BaseService<
  city,
  typeof CreateCityInput,
  typeof UpdateCityInput,
  typeof WhereCitySearchInput,
  typeof CityPagination,
  Prisma.cityDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('City', prisma.city);
  }
}
