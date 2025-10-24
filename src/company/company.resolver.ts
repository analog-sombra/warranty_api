import { Resolver, ObjectType } from '@nestjs/graphql';
import { CompanyService } from './company.service';
import { Company } from './entities/company.entity';
import { CreateCompanyInput } from './dto/create-company.input';
import { UpdateCompanyInput } from './dto/update-company.input';
import { WhereCompanySearchInput } from './dto/search-company.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { Prisma, company as CompanyModel } from '@prisma/client';
@ObjectType()
export class CompanyPagination extends BasePaginated(Company) {}

const BaseCompanyResolver = createBaseResolver<
  typeof Company,
  CompanyModel,
  typeof CreateCompanyInput,
  typeof UpdateCompanyInput,
  typeof WhereCompanySearchInput,
  typeof CompanyPagination,
  Prisma.companyDelegate<any>
>(
  () => Company,
  'Company',
  () => CreateCompanyInput,
  () => UpdateCompanyInput,
  () => WhereCompanySearchInput,
  () => CompanyPagination,
);

@Resolver(() => Company)
export class CompanyResolver extends BaseCompanyResolver {
  constructor(private readonly companyService: CompanyService) {
    super(companyService);
  }
}
