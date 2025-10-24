import { Module } from '@nestjs/common';
import { UserCompanyService } from './user_company.service';
import { UserCompanyResolver } from './user_company.resolver';

@Module({
  providers: [UserCompanyResolver, UserCompanyService],
})
export class UserCompanyModule {}
