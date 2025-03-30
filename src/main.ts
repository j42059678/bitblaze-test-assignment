import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import { lstatSync, readdirSync } from 'fs';
import * as path from 'path';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  const config = new DocumentBuilder()
    .setTitle('Тest assignment for BITBLAZE')
    .setDescription('Logical Volume Management.')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(
    new ValidationPipe({
      transform: true,
      whitelist: true,
      forbidNonWhitelisted: true,
    }),
  );
  process.env.SOURCE_DIR = `${process.cwd()}/src`;
  process.env.SCRIPTS_DIR = `${process.env.SOURCE_DIR}/scripts`;
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
