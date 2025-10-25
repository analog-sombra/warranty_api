import { Injectable } from '@nestjs/common';
import { CreateProductSubcategoryInput } from './dto/create-product_subcategory.input';
import { UpdateProductSubcategoryInput } from './dto/update-product_subcategory.input';
import { WhereProductSubcategorySearchInput } from './dto/search-product_subcategory.input';
import { DefaultArgs } from '@prisma/client/runtime/library';
import { Prisma, product_subcategory } from '@prisma/client';
import { BaseService } from 'src/base/base.service';
import { PrismaService } from 'prisma/prisma.service';
import { ProductSubcategoryPagination } from './product_subcategory.resolver';

@Injectable()
export class ProductSubcategoryService extends BaseService<
  product_subcategory,
  typeof CreateProductSubcategoryInput,
  typeof UpdateProductSubcategoryInput,
  typeof WhereProductSubcategorySearchInput,
  typeof ProductSubcategoryPagination,
  Prisma.product_subcategoryDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('ProductSubcategory', prisma.product_subcategory);
  }
}
