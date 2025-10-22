import { Injectable } from '@nestjs/common';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { BaseService } from 'src/base/base.service';
import { CompanyPagination } from './company.resolver';
import { DefaultArgs } from 'generated/prisma/runtime/library';
import { company, Prisma } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class CompanyService extends BaseService<
  company,
  typeof CreateCompanyInput,
  typeof UpdateCompanyInput,
  typeof CompanyPagination,
  Prisma.companyDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('Company', prisma.company);
  }
}
