import { Entity, Column, PrimaryGeneratedColumn, ManyToOne, JoinColumn } from 'typeorm'
import { User } from 'src/user/entities/user.entity'

@Entity()
export class Order {
    @PrimaryGeneratedColumn()
    id: number

    @Column()
    order_id: number

    @Column()
    order_date: Date

    @Column({comment:'订单金额'})
    order_money: number

    @Column({comment:'订单号'})
    order_no: string

    // 多对一
    @ManyToOne(() => User, (user) =>user.order)
     // 列联合
    @JoinColumn({name:'order_user_id'})
    user:User
}
