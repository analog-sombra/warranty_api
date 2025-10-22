import { Module } from '@nestjs/common';
import { ProductCategoryService } from './product_category.service';
import { ProductCategoryResolver } from './product_category.resolver';

@Module({
  providers: [ProductCategoryResolver, ProductCategoryService],
})
export class ProductCategoryModule {}
