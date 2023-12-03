import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.setGlobalPrefix('api');
  app.useGlobalPipes(new ValidationPipe());
  const { PORT } = process.env;
  try {
    await app.listen(PORT);
  } catch (err) {
    console.log(err);
  }
}
bootstrap();
