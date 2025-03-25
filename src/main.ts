import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { Logger } from '@nestjs/common';

async function bootstrap() {
  const logger = new Logger('Bootstrap');

  const app = await NestFactory.create(AppModule);

  app.enableCors();

  await app.listen(process.env.PORT ?? 3000);

  logger.log(`Application is running on: ${await app.getUrl()}`);
}

bootstrap();
