import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateCityInput } from './create-city.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class WhereCitySearchInput extends PartialType(CreateCityInput) {
    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    id?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    name?: string;

    @IsOptional()
    @IsEnum(Status)
    @Field(() => Status, { nullable: true })
    status?: Status;
}