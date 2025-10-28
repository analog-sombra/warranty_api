import { ObjectType, Resolver } from '@nestjs/graphql';
import { CityService } from './city.service';
import { City } from './entities/city.entity';
import { createBaseResolver } from 'src/base/base.resolver';

import { Prisma, city as CityModel } from '@prisma/client';
import { CreateCityInput } from './dto/create-city.input';
import { UpdateCityInput } from './dto/update-city.input';
import { WhereCitySearchInput } from './dto/search-city.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';

@ObjectType()
export class CityPagination extends BasePaginated(City) {}

const BaseCityResolver = createBaseResolver<
  typeof City,
  CityModel,
  typeof CreateCityInput,
  typeof UpdateCityInput,
  typeof WhereCitySearchInput,
  typeof CityPagination,
  Prisma.cityDelegate<any>
>(
  () => City,
  'City',
  () => CreateCityInput,
  () => UpdateCityInput,
  () => WhereCitySearchInput,
  () => CityPagination,
);

@Resolver(() => City)
export class CityResolver extends BaseCityResolver {
  constructor(private readonly cityService: CityService) {
    super(cityService);
  }
}
