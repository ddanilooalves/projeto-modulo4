import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe } from '@nestjs/common';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule, {
    cors: true,
  });

  app.useGlobalPipes(new ValidationPipe());

  const config = new DocumentBuilder()
    .setTitle('X Box')
    .setDescription('Aplicação para gestão da plataforma de jogos')
    .setVersion('1.0.0')
    .addTag('status')
    .addTag('auth')
    .addTag('homepage')
    .addTag('users')
    .addTag('profiles')
    .addTag('games')
    .addTag('genders')
    .addBearerAuth()
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('api', app, document);

  await app.listen(process.env.PORT || 3333);
}
bootstrap();
