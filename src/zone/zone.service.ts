import { Injectable } from '@nestjs/common';
import { PrismaService } from 'prisma/prisma.service';
import { BaseService } from 'src/base/base.service';
import { Prisma, zone } from '@prisma/client';
import { DefaultArgs } from 'generated/prisma/runtime/library';
import { CreateZoneInput } from './dto/create-zone.input';
import { UpdateZoneInput } from './dto/update-zone.input';
import { ZonePagination } from './zone.resolver';

@Injectable()
export class ZoneService extends BaseService<
  zone,
  typeof CreateZoneInput,
  typeof UpdateZoneInput,
  typeof ZonePagination,
  Prisma.zoneDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('Zone', prisma.zone);
  }
}
