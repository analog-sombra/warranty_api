import { InputType, Field } from '@nestjs/graphql';

@InputType()
export class CreateCityInput {
  @Field(() => String)
  name: string;
}
