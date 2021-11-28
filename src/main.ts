import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import { MODE } from './config';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: MODE === 'development',
  });

  app.useGlobalPipes(new ValidationPipe());
  app.setGlobalPrefix('api/v1');

  await app.listen(3000);
}
bootstrap();
