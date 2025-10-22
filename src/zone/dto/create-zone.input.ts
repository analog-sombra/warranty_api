import { InputType, Int, Field } from '@nestjs/graphql';
import { IsNumber, IsString } from 'class-validator';

@InputType()
export class CreateZoneInput {
  @IsNumber()
  @Field(() => Int)
  city_id: number;

  @IsString()
  @Field(() => String)
  name: string;
}
