import { ObjectType, Field, Int } from '@nestjs/graphql';
import { Status } from '@prisma/client';
import { City } from 'src/city/entities/city.entity';

@ObjectType()
export class Zone {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Status)
  status: Status;

  @Field(() => City)
  city: City;

  @Field(() => Int)
  city_id: number;
}
