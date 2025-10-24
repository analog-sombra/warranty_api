import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateProductSubcategoryInput } from './create-product_subcategory.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class WhereProductSubcategorySearchInput extends PartialType(CreateProductSubcategoryInput) {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    id?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    name?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    pic?: string;

    @IsOptional()
    @IsEnum(Status)
    @Field(() => Status, { nullable: true })
    status?: Status;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    priority?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    product_category_id?: number;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    createdAt?: Date;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    createdById?: number;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    updatedAt?: Date;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    updatedById?: number;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    deletedAt?: Date;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    deletedById?: number;
}