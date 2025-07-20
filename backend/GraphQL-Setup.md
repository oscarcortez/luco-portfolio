# GraphQL Setup for NestJS Backend

## Overview
This NestJS backend has been configured with GraphQL using Apollo Server. The setup includes:

- **GraphQL Module**: Configured with Apollo Driver
- **Auto Schema Generation**: Schema is automatically generated from TypeScript decorators
- **GraphQL Playground**: Available for testing queries and mutations
- **Introspection**: Enabled for development

## Configuration

### App Module (`src/app/app.module.ts`)
The GraphQL module is configured with:
- **Driver**: Apollo Server
- **Auto Schema File**: `backend/src/schema.gql` (auto-generated)
- **Playground**: Enabled for development
- **Introspection**: Enabled for schema exploration

### GraphQL Endpoint
Once the server is running, GraphQL will be available at:
- **GraphQL Endpoint**: `http://localhost:3000/api/graphql`
- **GraphQL Playground**: `http://localhost:3000/api/graphql` (in browser)

## Example Resolvers

### Basic App Resolver (`src/app/app.resolver.ts`)
Simple queries and mutations:

```graphql
# Queries
query {
  hello
}

query {
  sayHello(name: "World")
}

# Mutations
mutation {
  createMessage(message: "Hello GraphQL!")
}
```

### User Resolver (`src/app/user.resolver.ts`)
Complete CRUD operations for User entity:

#### Queries
```graphql
# Get all users
query {
  users {
    id
    name
    email
    bio
  }
}

# Get user by ID
query {
  user(id: "1") {
    id
    name
    email
    bio
  }
}
```

#### Mutations
```graphql
# Create a new user
mutation {
  createUser(createUserInput: {
    name: "John Doe"
    email: "john@example.com"
    bio: "Software Developer"
  }) {
    id
    name
    email
    bio
  }
}

# Update existing user
mutation {
  updateUser(
    id: "1"
    updateUserInput: {
      name: "John Smith"
      bio: "Senior Developer"
    }
  ) {
    id
    name
    email
    bio
  }
}

# Delete user
mutation {
  deleteUser(id: "1")
}
```

## File Structure

```
backend/src/app/
├── app.module.ts          # Main module with GraphQL configuration
├── app.resolver.ts        # Basic GraphQL resolver
├── user.entity.ts         # User GraphQL object type
├── user.input.ts          # Input types for mutations
├── user.resolver.ts       # User CRUD resolver
└── schema.gql            # Auto-generated GraphQL schema
```

## Key Features

### 1. Type Safety
- TypeScript decorators ensure type safety
- Auto-completion in IDEs
- Compile-time error checking

### 2. Code-First Approach
- Schema generated from TypeScript classes
- No need to maintain separate schema files
- Decorators define GraphQL types

### 3. Validation
- Built-in input validation
- Type checking for arguments
- Nullable field support

### 4. Development Tools
- GraphQL Playground for testing
- Schema introspection
- Real-time schema updates

## Running the Server

To start the server with GraphQL:

```bash
# Using nx (recommended)
npx nx serve backend

# Or using npm (if available)
npm run start:dev
```

## Testing GraphQL

1. **Start the server**
2. **Open browser** to `http://localhost:3000/api/graphql`
3. **Use GraphQL Playground** to test queries and mutations
4. **Explore schema** using the built-in documentation

## Next Steps

1. **Add Database Integration**: Replace in-memory arrays with database entities
2. **Add Authentication**: Implement JWT or session-based auth
3. **Add Subscriptions**: Real-time updates using GraphQL subscriptions
4. **Add Validation**: Custom validation pipes for complex business logic
5. **Add Error Handling**: Custom exception filters for GraphQL errors

## Dependencies Installed

- `@nestjs/graphql`: NestJS GraphQL integration
- `@nestjs/apollo`: Apollo Server integration for NestJS
- `graphql`: GraphQL core library
- `apollo-server-express`: Apollo Server for Express (legacy, but functional)

## Notes

- The current setup uses in-memory data storage for demonstration
- Schema is auto-generated at `backend/src/schema.gql`
- All resolvers are registered in the main `AppModule`
- GraphQL Playground is enabled for development (disable in production)