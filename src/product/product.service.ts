import { Injectable } from '@nestjs/common';
import { CreateProductInput } from './dto/create-product.input';
import { UpdateProductInput } from './dto/update-product.input';
import { BaseService } from 'src/base/base.service';
import { Prisma, product } from '@prisma/client';
import { PrismaService } from 'prisma/prisma.service';
import { DefaultArgs } from 'generated/prisma/runtime/library';
import { ProductPagination } from './product.resolver';
import { WhereProductSearchInput } from './dto/search-product.input';

@Injectable()
export class ProductService extends BaseService<
  product,
  typeof CreateProductInput,
  typeof UpdateProductInput,
  typeof WhereProductSearchInput,
  typeof ProductPagination,
  Prisma.productDelegate<DefaultArgs, Prisma.PrismaClientOptions>
> {
  constructor(private readonly prisma: PrismaService) {
    super('Product', prisma.product);
  }
}
