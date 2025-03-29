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
    .setDescription('Description of API in OpenAPI specification.')
    .setVersion('1.0')
    .build();
  const documentFactory = () => SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, documentFactory);
  app.useGlobalPipes(new ValidationPipe({
    transform: true,
    whitelist: true,
    forbidNonWhitelisted: true
  }));
  const start = `${process.cwd()}/src/scripts`;
  process.env.PATH = `${start}:${process.env.PATH}`
  const traverse = (d) => {
    readdirSync(d).forEach((f) => {
      const fp = path.join(d, f);
      if (lstatSync(fp).isDirectory()) {
        process.env.PATH = `${fp}:${process.env.PATH}`;
        traverse(fp);
      }
    });
  };
  traverse(start);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
