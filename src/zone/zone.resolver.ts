import { ObjectType, Resolver } from '@nestjs/graphql';
import { ZoneService } from './zone.service';
import { Zone } from './entities/zone.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { Prisma, zone as ZoneModel } from '@prisma/client';
import { CreateZoneInput } from './dto/create-zone.input';
import { UpdateZoneInput } from './dto/update-zone.input';
import { WhereZoneSearchInput } from './dto/search-zone.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';

@ObjectType()
export class ZonePagination extends BasePaginated(Zone) {}

const BaseZoneResolver = createBaseResolver<
  typeof Zone,
  ZoneModel,
  typeof CreateZoneInput,
  typeof UpdateZoneInput,
  typeof WhereZoneSearchInput,
  typeof ZonePagination,
  Prisma.zoneDelegate<any>
>(
  () => Zone,
  'Zone',
  () => CreateZoneInput,
  () => UpdateZoneInput,
  () => WhereZoneSearchInput,
  () => ZonePagination,
);

@Resolver(() => Zone)
export class ZoneResolver extends BaseZoneResolver {
  constructor(private readonly zoneService: ZoneService) {
    super(zoneService);
  }
}
