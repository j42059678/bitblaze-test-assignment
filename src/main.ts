import { NestFactory } from '@nestjs/core';
import { AppModule } from './modules/app/app.module';
import bootstrapCompression from './bootstrap/compression.bootstrap';
import bootstrapEnvironment from './bootstrap/environment.bootstrap';
import { BootstrapScripts } from './bootstrap/scripts.bootstrap';
import { BootstrapSwagger } from './bootstrap/swagger.bootstrap';
import { BootstrapValidation } from './bootstrap/validation.bootstrap';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await BootstrapSwagger.bootstrap(app);
  await bootstrapEnvironment(app);
  // await bootstrapCompression(app);
  await BootstrapScripts.bootstrap(app);
  await BootstrapValidation.bootstrap(app);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
