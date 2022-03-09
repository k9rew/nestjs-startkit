import { Logger, ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { SwaggerModule } from '@nestjs/swagger';

import { AppModule } from './app.module';
import {
  env,
  swaggerConfig,
  swaggerDocumentOptions,
  swaggerSetupOptions,
} from './configs';

async function bootstrap() {
  Logger.log(env);
  /**----------------- App config ----------------------------- */
  const app = await NestFactory.create(AppModule);
  app.useGlobalPipes(
    new ValidationPipe({
      whitelist: true,
      stopAtFirstError: true,
      transform: true,
    }),
  );

  /**----------------- Swagger -------------------------------- */
  const document = SwaggerModule.createDocument(
    app,
    swaggerConfig,
    swaggerDocumentOptions,
  );
  SwaggerModule.setup('docs', app, document, swaggerSetupOptions);

  /**----------------- Security -------------------------------- */
  app.enableCors({ origin: '*' });

  /**---------------- Init server ------------------------------ */
  Logger.log(`Server listening on port ${env.PORT}`, 'RewwSpace');
  await app.listen(env.PORT);
}
bootstrap();
