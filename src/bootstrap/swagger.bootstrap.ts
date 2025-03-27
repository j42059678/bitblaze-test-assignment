import { DocumentBuilder, SwaggerModule } from "@nestjs/swagger";

export class BootstrapSwagger {
  static async bootstrap(app) {
    const config = new DocumentBuilder()
        .setTitle('Тest assignment for BITBLAZE')
        .setDescription('Description of API in OpenAPI specification.')
        .setVersion('1.0')
        .build();
      const documentFactory = () => SwaggerModule.createDocument(app, config);
      SwaggerModule.setup('api', app, documentFactory);
  }
}
