import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm'
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UserModule } from './user/user.module';
import { UserlistController } from './userlist/userlist.controller';
import { UserlistModule } from './userlist/userlist.module';
import { ListModule } from './list/list.module';
import { OrderModule } from './order/order.module';

@Module({
  imports: [
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: 'root',
      database: 'testbase',
      retryDelay: 500,
      retryAttempts: 10,
      synchronize: true,
      autoLoadEntities: true
    }),
    UserModule,
    UserlistModule,
    ListModule,
    OrderModule],
  controllers: [AppController, UserlistController],
  providers: [AppService],
})
export class AppModule { }
