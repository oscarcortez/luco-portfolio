import { Resolver, Query, Mutation, Args } from '@nestjs/graphql';
import { AppService } from './app.service';

@Resolver()
export class AppResolver {
  constructor(private readonly appService: AppService) {}

  @Query(() => String)
  hello(): string {
    return this.appService.getHello();
  }

  @Query(() => String)
  sayHello(@Args('name') name: string): string {
    return `Hello ${name}!`;
  }

  @Mutation(() => String)
  createMessage(@Args('message') message: string): string {
    return `Message created: ${message}`;
  }
}