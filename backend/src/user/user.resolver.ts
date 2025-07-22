import { Resolver, Query, Mutation, Args, Int } from '@nestjs/graphql';
import { UserService } from './user.service';
import { UserOrderByWithRelationInput } from '../generated/prisma-graphql/user/user-order-by-with-relation.input';
import { UserWhereUniqueInput } from '../generated/prisma-graphql/user/user-where-unique.input';
import { UserWhereInput } from '../generated/prisma-graphql/user/user-where.input';
import { User } from '../generated/prisma-graphql/user/user.model';
import { UserCreateInput } from '../generated/prisma-graphql/user/user-create.input';

@Resolver(() => User)
export class UserResolver {
  constructor(private readonly userService: UserService) {}

  // @Query(() => User, { name: 'user' })
  // async getUser(@Args('id', { type: () => Int }) id: number): Promise<User | null> {
  //   return this.userService.user({ id });
  // }

  @Query(() => [User], { name: 'users' })
  async getUsers(
    @Args('skip', { type: () => Int, nullable: true }) skip?: number,
    @Args('take', { type: () => Int, nullable: true }) take?: number,
    @Args('cursor', { type: () => UserWhereUniqueInput, nullable: true })
    cursor?: UserWhereUniqueInput,
    @Args('where', { type: () => UserWhereInput, nullable: true }) where?: UserWhereInput,
    @Args('orderBy', { type: () => UserOrderByWithRelationInput, nullable: true })
    orderBy?: UserOrderByWithRelationInput,
  ): Promise<User[]> {
    return this.userService.users({ skip, take, cursor, where, orderBy });
  }

  @Mutation(() => User)
  async createUser(@Args('data') data: UserCreateInput): Promise<User> {
    return this.userService.createUser(data);
  }
}
