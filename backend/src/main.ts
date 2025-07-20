
import { Logger } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
    app.enableCors({
    origin: '*', // Permite todas las peticiones (⚠️ No usar en producción)
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE',
    allowedHeaders: 'Content-Type, Authorization',
  });
  const port = process.env.PORT || 3001;
  await app.listen(port);
  Logger.log(
    `🚀 Application1 is running on: http://localhost:${port}`
  );
}

bootstrap();
