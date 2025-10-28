import { Injectable } from '@nestjs/common';
import { CreateUserCompanyInput } from './dto/create-user_company.input';
import { UpdateUserCompanyInput } from './dto/update-user_company.input';
import { WhereUserCompanySearchInput } from './dto/search-user_company.input';
import { UserCompanyPagination } from './user_company.resolver';
import { Prisma, user_company } from '@prisma/client';
import { BaseService } from 'src/base/base.service';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { PrismaService } from 'prisma/prisma.service';

@Injectable()
export class UserCompanyService extends BaseService<
  user_company,
  typeof CreateUserCompanyInput,
  typeof UpdateUserCompanyInput,
  typeof WhereUserCompanySearchInput,
  typeof UserCompanyPagination,
  Prisma.user_companyDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('UserCompany', prisma.user_company);
  }
}
