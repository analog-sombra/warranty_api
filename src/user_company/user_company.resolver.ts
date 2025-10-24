import { Resolver, Query, Mutation, Args, Int, ObjectType } from '@nestjs/graphql';
import { UserCompanyService } from './user_company.service';
import { UserCompany } from './entities/user_company.entity';
import { CreateUserCompanyInput } from './dto/create-user_company.input';
import { UpdateUserCompanyInput } from './dto/update-user_company.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { WhereUserCompanySearchInput } from './dto/search-user_company.input';
import { Prisma, user_company as UserCompanyModel } from '@prisma/client';

@ObjectType()
export class UserCompanyPagination extends BasePaginated(UserCompany) { }

const BaseUserResolver = createBaseResolver<
  typeof UserCompany,
  UserCompanyModel,
  typeof CreateUserCompanyInput,
  typeof UpdateUserCompanyInput,
  typeof WhereUserCompanySearchInput,
  typeof UserCompanyPagination,
  Prisma.user_companyDelegate<any>
>(
  () => UserCompany,
  'UserCompany',
  () => CreateUserCompanyInput,
  () => UpdateUserCompanyInput,
  () => WhereUserCompanySearchInput,
  () => UserCompanyPagination,
);

@Resolver(() => UserCompany)
export class UserCompanyResolver extends BaseUserResolver {
  constructor(private readonly userCompanyService: UserCompanyService) {
    super(userCompanyService);
  }
}
