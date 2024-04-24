import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { readFileSync } from 'fs';
import { parse } from 'dotenv';
import * as path from 'path';

const envConfig = parse(readFileSync(path.join(__dirname, '..', '.env')));

for (const k in envConfig) {
  process.env[k] = envConfig[k];
}
async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  await app.listen(3000);
}
bootstrap();
