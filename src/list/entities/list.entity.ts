import { Entity, Column, PrimaryGeneratedColumn, OneToOne, JoinColumn} from 'typeorm'
import {User} from '../../user/entities/user.entity'


@Entity()
export class List {
    @PrimaryGeneratedColumn()
    id:number


    @Column()
    num:number

    @Column()
    name:string

    @Column()
    is_delete: boolean

    @Column()
    create_time: Date

    @Column()
    update_time:Date
     
    // 一对一
    @OneToOne(() => User)
    // 列联合
    @JoinColumn({name:'user_id'})
    user:User
}
