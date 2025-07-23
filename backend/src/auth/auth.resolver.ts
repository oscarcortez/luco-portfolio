import { Resolver, Mutation, Args, ObjectType, Field } from '@nestjs/graphql';
import { AuthService } from './auth.service';

@ObjectType()
export class AuthResponse {
  @Field()
  access_token!: string;
}

@Resolver()
export class AuthResolver {
  constructor(private authService: AuthService) {}

  @Mutation(() => AuthResponse, { name: 'signIn' })
  async signIn(
    @Args('email') email: string,
    @Args('password') password: string,
  ): Promise<AuthResponse> {
    return await this.authService.signIn(email, password);
  }
}
