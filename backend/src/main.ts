import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { DocumentBuilder, SwaggerModule } from '@nestjs/swagger';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);

  const config = new DocumentBuilder()
    .setTitle('Cheat-Sheet')
    .setDescription('Cheat Sheet Api')
    .setVersion('Beta')
    .build();

  const document = SwaggerModule.createDocument(app, config);
  SwaggerModule.setup('gui', app, document);
  await app.listen(3000);
}
bootstrap();
