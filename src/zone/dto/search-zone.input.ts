import { IsEnum, IsInt, IsOptional, IsString } from 'class-validator';
import { CreateZoneInput } from './create-zone.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

@InputType()
export class WhereZoneSearchInput extends PartialType(CreateZoneInput) {
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

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    city_id?: number;
}