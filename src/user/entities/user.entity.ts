import {
    Entity,
    Column,
    PrimaryGeneratedColumn,
    OneToMany,
    JoinColumn,
    CreateDateColumn,
    UpdateDateColumn
} from 'typeorm'
import { Order } from '../../order/entities/order.entity'

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    name: string

    @Column("text")
    description: string;

    @Column()
    filename: string;

    @Column("double")
    views: number;

    @Column()
    isPublished: boolean;

    @CreateDateColumn()
    create_time: Date

    @UpdateDateColumn()
    update_time: Date


    @OneToMany(() => Order, (order) => order.user)
    @JoinColumn()
    order: Order[]

}
