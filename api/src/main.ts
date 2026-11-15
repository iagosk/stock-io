import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(new ValidationPipe({ transform: true }));
  app.enableCors({
    origin: true, // Permite qualquer origem em desenvolvimento
    methods: 'GET,HEAD,PUT,PATCH,POST,DELETE,OPTIONS', // <-- O 'OPTIONS' precisa estar aqui
    credentials: true,
  });
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
