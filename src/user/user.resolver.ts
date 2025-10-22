import { Resolver, ObjectType } from '@nestjs/graphql';
import { UserService } from './user.service';
import { User } from './entities/user.entity';
import { CreateUserInput } from './dto/create-user.input';
import { UpdateUserInput } from './dto/update-user.input';
import { BasePaginated } from 'src/base/entities/base.pagination.entity';
import { createBaseResolver } from 'src/base/base.resolver';
import { Prisma, user as UserModel } from '@prisma/client';

@ObjectType()
export class UserPagination extends BasePaginated(User) {}

const BaseUserResolver = createBaseResolver<
  typeof User,
  UserModel,
  typeof CreateUserInput,
  typeof UpdateUserInput,
  typeof UserPagination,
  Prisma.userDelegate<any>
>(
  () => User,
  'User',
  () => CreateUserInput,
  () => UpdateUserInput,
  () => UserPagination,
);

@Resolver(() => User)
export class UserResolver extends BaseUserResolver {
  constructor(private readonly userService: UserService) {
    super(userService);
  }
}
