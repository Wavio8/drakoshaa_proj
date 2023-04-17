import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as process from 'process';
import { NestExpressApplication } from '@nestjs/platform-express';
import { join } from 'path';
import * as hbs from 'hbs';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';
import { ValidationPipe } from '@nestjs/common';
import supertokens from 'supertokens-node';
import { SupertokensExceptionFilter } from './auth/auth.filter';
// import { AutorizedFilter } from './auth/autorized.filter';
// import { AuthAutorizedFilter } from './auth/authAutorized.filter';
// import { AuthAutorizedFilter } from "./auth/authAutorized.filter";

async function bootstrap() {
  // const app = await NestFactory.create(AppModule);
  const app = await NestFactory.create<NestExpressApplication>(AppModule);
  app.useStaticAssets(join(__dirname, '..', 'public'));
  app.setBaseViewsDir(join(__dirname, '..', 'views'));
  hbs.registerPartials(join(__dirname, '..', 'views/partials'));
  app.setViewEngine('hbs');
  app.useGlobalPipes(new ValidationPipe());
  // app.useGlobalFilters(new AuthAutorizedFilter());
  app.useGlobalFilters(new SupertokensExceptionFilter());
  // app.useGlobalFilters(new AutorizedFilter());

  app.enableCors({
    origin: ['http://localhost:3001'],
    allowedHeaders: ['content-type', ...supertokens.getAllCORSHeaders()],
    credentials: true,
  });


  const config = new DocumentBuilder()
    .setTitle('Drakosha world')
    .setDescription('The drakosha API description')
    .setVersion('1.0')
    .addTag('This is Drakosha world!')
    .build();
  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3001);
}
bootstrap();
