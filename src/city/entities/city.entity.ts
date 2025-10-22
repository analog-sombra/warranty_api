import { ObjectType, Field, Int, registerEnumType } from '@nestjs/graphql';
import { Status } from '@prisma/client';

registerEnumType(Status, {
  name: 'Status',
});

@ObjectType()
export class City {
  @Field(() => Int)
  id: number;

  @Field(() => String)
  name: string;

  @Field(() => Status)
  status: Status;
}
