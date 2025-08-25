import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AuthService } from './auth.service';
import { Auth } from './entities/auth.entity';
import { LoginUserInput } from './dto/login.input';
import { SignUpUserInput } from './dto/register.input';

@Resolver(() => Auth)
export class AuthResolver {
  constructor(private readonly authService: AuthService) {}
  @Query(() => User)
  login(@Args('loginUserInput') loginUserInput: LoginUserInput) {
    return this.authService.login(
      loginUserInput.contact,
      loginUserInput.password,
    );
  }

  @Mutation(() => User)
  signup(@Args('signUpUserInput') signUpUserInput: SignUpUserInput) {
    return this.authService.signup(
      signUpUserInput.mobile,
      signUpUserInput.name,
      signUpUserInput.password,
    );
  }
}
