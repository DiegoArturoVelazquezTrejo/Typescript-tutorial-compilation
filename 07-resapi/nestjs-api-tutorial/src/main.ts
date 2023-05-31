import { ValidationPipe } from '@nestjs/common';
import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  // Use the ValidationPipe to validate incoming requests 
  app.useGlobalPipes(
    new ValidationPipe({
      // whitelist: true will strip any properties that don't have any decorators (exclude evertything that is not explicitly allowed in the DTO)
      whitelist: true,
    }),
  );
  await app.listen(3333);
}
// Call the bootstrap function that we just created
bootstrap();