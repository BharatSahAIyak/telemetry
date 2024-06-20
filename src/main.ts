import { NestFactory } from '@nestjs/core';
import { ValidationPipe } from '@nestjs/common';
import { AppModule } from './app.module';
import {
  FastifyAdapter,
  NestFastifyApplication,
} from '@nestjs/platform-fastify';
import * as multipart from 'fastify-multipart';
import { DocumentBuilder, SwaggerDocumentOptions, SwaggerModule } from '@nestjs/swagger';


async function bootstrap() {
  const app = await NestFactory.create<NestFastifyApplication>(
    AppModule,
    new FastifyAdapter({ bodyLimit: 104857600 }),
  );

  // bind pipes and interceptors
  await app.register(multipart);
  new ValidationPipe({
    transform: true,
  });
  app.enableCors();
  
  const config = new DocumentBuilder()
    .setTitle('Telemetry')
    .setDescription('APIs for telemetry')
    .setVersion('1.0')
    .addTag('telemetry')
    .addBearerAuth()
    .build();

  const options: SwaggerDocumentOptions = {
    operationIdFactory: (controllerKey: string, methodKey: string) => methodKey,
  };

  const document = SwaggerModule.createDocument(app, config, options);
  SwaggerModule.setup('api', app, document);
  
  await app.listen(3000, '0.0.0.0');
}
bootstrap();
