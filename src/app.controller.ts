import { Controller, Get, Post, Body, Request, Query, Headers } from '@nestjs/common';
import { AppService } from './app.service';

@Controller('/hello')
export class AppController {
  constructor(private readonly appService: AppService) {}

  @Get()
  getHello(@Query() req:any, @Headers() headers:any): string {
    console.log('req',req)
    console.log(headers)
    return this.appService.getHello();
  }

  @Post()
  submitHello() {
    
  }
}
