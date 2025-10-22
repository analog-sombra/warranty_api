import { Query, Args, Int, Info, Mutation } from '@nestjs/graphql';
import { BaseService } from './base.service';
import type { GraphQLResolveInfo } from 'graphql';
import { getSelectedFields, SelectedFields } from 'src/utils/methods';
import { SearchPaginationInput } from './dto/search-pagination.input';

export function createBaseResolver<
  Type,
  Entity,
  InputType,
  UpdateType,
  PaginationType,
  Delegate extends {
    findUnique: (args: any) => Promise<any>;
    findMany: (args: any) => Promise<any[]>;
    create: (args: any) => Promise<any>;
    update: (args: any) => Promise<any>;
    delete: (args: any) => Promise<any>;
  },
>(
  returnType: () => Type,
  name: string,
  inputTypeClass: () => InputType,
  updateTypeClass: () => UpdateType,
  paginationTypeClass: () => PaginationType,
) {
  abstract class BaseResolver {
    constructor(
      public service: BaseService<
        Entity,
        InputType,
        UpdateType,
        PaginationType,
        Delegate
      >,
    ) { }

    @Query(() => returnType(), { name: `get${name}ById` })
    async getById(
      @Args('id', { type: () => Int }) id: number,
      @Info() info: GraphQLResolveInfo,
    ): Promise<Entity> {
      const fields: SelectedFields = getSelectedFields(info);
      return await this.service.getById(id, fields);
    }

    @Query(() => [returnType()], { name: `getAll${name}` })
    async getAll(@Info() info: GraphQLResolveInfo): Promise<Entity[]> {
      const fields: SelectedFields = getSelectedFields(info);
      return await this.service.getAll(fields);
    }

    @Mutation(() => returnType(), { name: `create${name}` })
    async create(
      @Args('inputType', { type: inputTypeClass }) inputType: InputType,
      @Info() info: GraphQLResolveInfo,
    ): Promise<Entity> {
      const fields = getSelectedFields(info);
      return await this.service.create(inputType, fields);
    }

    @Mutation(() => returnType(), { name: `update${name}` })
    async update(
      @Args('id', { type: () => Int }) id: number,
      @Args('updateType', { type: updateTypeClass }) updateType: UpdateType,
      @Info() info: GraphQLResolveInfo,
    ): Promise<Entity> {
      const fields = getSelectedFields(info);
      return await this.service.update(id, updateType, fields);
    }

    @Mutation(() => returnType(), { name: `delete${name}` })
    async delete(
      @Args('id', { type: () => Int }) id: number,
      @Args('userid', { type: () => Int }) userid: number,
      @Info() info: GraphQLResolveInfo,
    ): Promise<Entity> {
      const fields = getSelectedFields(info);
      return await this.service.delete(id, userid, fields);
    }

    @Query(() => paginationTypeClass(), { name: `getPaginated${name}` })
    async getPaginated(
      @Args('searchPaginationInput')
      searchPaginationInput: SearchPaginationInput,
      @Args('whereSearchInput')
      whereSearchInput: WhereSearchInput,
      @Info() info: GraphQLResolveInfo,
    ): Promise<PaginationType> {
      const fields = getSelectedFields(info);

      return await this.service.getPaginated(searchPaginationInput, whereSearchInput, fields);
    }
  }
  return BaseResolver;
}
