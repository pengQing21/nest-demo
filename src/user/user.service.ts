import { Injectable } from '@nestjs/common';
import { CreateUserDto } from './dto/create-user.dto';
import { UpdateUserDto } from './dto/update-user.dto';
import {Like, Repository } from 'typeorm'
import {InjectRepository } from '@nestjs/typeorm'
import {User} from './entities/user.entity'

@Injectable()
export class UserService {

  constructor(@InjectRepository(User) private readonly user:Repository<User>) {}
  create(createUserDto: CreateUserDto) {
    return 'This action adds a new user';
  }

  findAll() {
    // return `This action returns all user`;
    return this.user.find({
      skip:2,
      take:6
    })
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UpdateUserDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }

  addData() {
    const data =  new User()
    data.name = 'zhangsan'
    data.description = '第一条数据'
    data.views = 2
    data.isPublished = false
    data.filename = '文件名'
    return this.user.save(data)
  }

  updateUser(id:number) {
    let data = new User()
    data.name = 'lisi'
    return this.user.update(id,data)
  }

  getUserAll() {
    return this.user.find()
  }

  getUserByName(name:string) {
    // Like 模糊查询
    return this.user.find({
      where:{
        name:Like(`%${name}%`)
      }
    })
  }
}
