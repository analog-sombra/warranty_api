import { IsDate, IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateDealerStockInput } from './create-dealer_stock.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class WhereDealerStockSearchInput extends PartialType(CreateDealerStockInput) {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    id?: string;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    dealer_id?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    product_id?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    company_id?: number;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    quantity?: number;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    batch_number?: string;

    @IsOptional()
    @IsEnum(Status)
    @Field(() => Status, { nullable: true })
    status?: Status;

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
}