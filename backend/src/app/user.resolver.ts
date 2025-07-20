import { Resolver, Query, Mutation, Args, ID } from '@nestjs/graphql';
import { User } from './user.entity';
import { CreateUserInput, UpdateUserInput } from './user.input';

@Resolver(() => User)
export class UserResolver {
  private users: User[] = [
    {
      id: '1',
      name: 'John Doe',
      email: 'john@example.com',
      bio: 'Software Developer'
    },
    {
      id: '2',
      name: 'Jane Smith',
      email: 'jane@example.com',
      bio: 'Product Manager'
    }
  ];

  @Query(() => [User])
  users(): User[] {
    return this.users;
  }

  @Query(() => User, { nullable: true })
  user(@Args('id', { type: () => ID }) id: string): User | undefined {
    return this.users.find(user => user.id === id);
  }

  @Mutation(() => User)
  createUser(@Args('createUserInput') createUserInput: CreateUserInput): User {
    const newUser: User = {
      id: String(this.users.length + 1),
      ...createUserInput
    };
    this.users.push(newUser);
    return newUser;
  }

  @Mutation(() => User, { nullable: true })
  updateUser(
    @Args('id', { type: () => ID }) id: string,
    @Args('updateUserInput') updateUserInput: UpdateUserInput
  ): User | undefined {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return undefined;
    }
    
    this.users[userIndex] = { ...this.users[userIndex], ...updateUserInput };
    return this.users[userIndex];
  }

  @Mutation(() => Boolean)
  deleteUser(@Args('id', { type: () => ID }) id: string): boolean {
    const userIndex = this.users.findIndex(user => user.id === id);
    if (userIndex === -1) {
      return false;
    }
    
    this.users.splice(userIndex, 1);
    return true;
  }
}