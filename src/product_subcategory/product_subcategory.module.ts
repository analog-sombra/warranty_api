import { Module } from '@nestjs/common';
import { ProductSubcategoryService } from './product_subcategory.service';
import { ProductSubcategoryResolver } from './product_subcategory.resolver';

@Module({
  providers: [ProductSubcategoryResolver, ProductSubcategoryService],
})
export class ProductSubcategoryModule {}
