import { IsDate, IsEnum, IsInt, IsOptional, IsString, IsBoolean } from 'class-validator';
import { CreateUserInput } from './create-user.input';
import { InputType, Field, Int, PartialType } from '@nestjs/graphql';
import { Status, Role } from '@prisma/client';

@InputType()
export class WhereUserSearchInput extends PartialType(CreateUserInput) {
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
    contact1?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    contact2?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    address?: string;

    @IsOptional()
    @IsInt()
    @Field(() => Int, { nullable: true })
    zone_id?: number;

    @IsOptional()
    @IsBoolean()
    @Field(() => Boolean, { nullable: true })
    is_dealer?: boolean;

    @IsOptional()
    @IsBoolean()
    @Field(() => Boolean, { nullable: true })
    is_manufacturer?: boolean;

    @IsOptional()
    @IsEnum(Role)
    @Field(() => Role, { nullable: true })
    role?: Role;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    email?: string;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    otp?: string;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    dob?: Date;

    @IsOptional()
    @IsString()
    @Field(() => String, { nullable: true })
    profile?: string;

    @IsOptional()
    @IsEnum(Status)
    @Field(() => Status, { nullable: true })
    status?: Status;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    createdAt?: Date;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    updatedAt?: Date;

    @IsOptional()
    @IsDate()
    @Field(() => Date, { nullable: true })
    deletedAt?: Date;
}