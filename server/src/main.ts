import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import * as compression from "compression";
import * as express from "express";
import * as helmet from "helmet";

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT, () => {
    console.log(`server is already started ${process.env.PORT}`);
  });
}
bootstrap();
