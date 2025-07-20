import { Resolver, Query, Args, Int } from '@nestjs/graphql';
import { HelloWorldService } from './hello-world.service';

@Resolver(() => String)
export class HelloWorldResolver {
  constructor(private readonly helloWorldService: HelloWorldService) {}

  @Query(() => String, { name: 'helloWorld' })
  findOne(@Args('id', { type: () => Int }) id: number) {
    return this.helloWorldService.findOne(id);
  }
}
