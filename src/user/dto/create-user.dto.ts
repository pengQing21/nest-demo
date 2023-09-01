import { IsNotEmpty,IsString } from 'class-validator'
export class CreateUserDto {

    @IsNotEmpty()
    @IsString({message:'只能是字符创'})
    name:string
}
