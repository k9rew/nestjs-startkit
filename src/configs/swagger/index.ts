import {
  DocumentBuilder,
  SwaggerCustomOptions,
  SwaggerDocumentOptions,
} from '@nestjs/swagger';

export const swaggerConfig = new DocumentBuilder()
  .setTitle('Reww Space')
  .setDescription('API description')
  .setVersion('1.0')
  .addBearerAuth({
    description: `[just text field] Please enter token in following format: Bearer <JWT>`,
    name: 'Authorization',
    bearerFormat: 'Bearer',
    scheme: 'Bearer',
    type: 'http',
    in: 'Header',
  })
  .build();

export const swaggerDocumentOptions: SwaggerDocumentOptions = {
  deepScanRoutes: true,
};
export const swaggerSetupOptions: SwaggerCustomOptions = {
  explorer: true,
  swaggerOptions: {
    docExpansion: false,
    deepLinking: true,
  },
};
