import { Controller, Get, Post, Body, Patch, Param, Delete, ParseIntPipe } from '@nestjs/common';
import { UserService } from './user.service';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import { UserPipe } from './user.pipe'

@Controller('user')
export class UserController {
  constructor(private readonly userService: UserService) { }



  @Get('/all')
  getUserAll() {
    return this.userService.getUserAll()
  }

  @Post('/add')
  create(@Body() createUserDto: CreateUserDto) {
    return this.userService.addData()
  }


  @Get(':id')
  // 管道转换
  findOne(@Param('id', ParseIntPipe) id: number) {
    return this.userService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateUserDto: UpdateUserDto) {
    return this.userService.update(+id, updateUserDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {

    return this.userService.remove(+id);
  }

  @Post('/update/:id')
  updataUser(@Param('id') id: string) {
    return this.userService.updateUser(+id)
  }



  @Get('/find/:name')
  findByName(@Param('name') name: string) {
    return this.userService.getUserByName(name)
  }


}
