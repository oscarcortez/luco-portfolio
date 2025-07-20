// This file is for testing GraphQL setup
// You can remove this file after confirming everything works

import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function testGraphQLSetup() {
  try {
    const app = await NestFactory.create(AppModule);
    console.log('✅ GraphQL setup successful! App module loaded without errors.');
    
    // Test if GraphQL module is properly configured
    const graphqlModule = app.get('GraphQLSchemaHost');
    if (graphqlModule) {
      console.log('✅ GraphQL Schema Host found - GraphQL module is properly configured.');
    }
    
    await app.close();
  } catch (error) {
    console.error('❌ GraphQL setup failed:', error.message);
  }
}

// Uncomment the line below to run the test
// testGraphQLSetup();