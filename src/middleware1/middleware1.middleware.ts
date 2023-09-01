import { Injectable, NestMiddleware } from '@nestjs/common';

const whiteList = ['login', 'register']
const authList = ['']

@Injectable()
export class Middleware1Middleware implements NestMiddleware {
  use(req: any, res: any, next: () => void) {
    console.log('进入中间件!....')
    // res.send('请求拦截 访问被拦截了')
    next();
  }
}
