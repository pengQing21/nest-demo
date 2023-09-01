import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import { ValidationPipe} from '@nestjs/common'

// 全局中间件
function MiddleWareAll(req:any,res:any, next:any) {
  console.log('全局中间件')
  next()
}

async function bootstrap() {
  const app = await NestFactory.create(AppModule);
  app.use(MiddleWareAll)
  app.useGlobalPipes(new ValidationPipe())
  await app.listen(3000);
}
bootstrap();
