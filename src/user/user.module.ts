import { Module, NestModule, MiddlewareConsumer } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { UserService } from './user.service';
import { UserController } from './user.controller';
import { User } from './entities/user.entity'
import { Middleware1Middleware } from '../middleware1/middleware1.middleware'

@Module({
  imports: [
    TypeOrmModule.forFeature([User])
  ],
  controllers: [UserController],
  providers: [UserService]
})
export class UserModule implements NestModule {
  configure(consumer: MiddlewareConsumer) {
    // 局部中间件
    //1.第一种 
    consumer.apply(Middleware1Middleware).forRoutes('user')
    // 2.第二种
    // consumer.apply(Middleware1Middleware).forRoutes({
    //   path:'user',
    //   method:
    // })
  }
}
