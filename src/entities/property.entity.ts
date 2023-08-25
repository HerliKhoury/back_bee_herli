import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";
import { User } from "./user.entity";

@Entity("property")
export class Property{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: 'varchar', length: 60})
    name: string;

    @Column({type: 'varchar', length: 20})
    total_area: string;

    @Column({type: 'varchar', length: 20})
    built_area: string;

    @Column({type: 'varchar', length: 60})
    address: string;

    @Column({type: 'varchar', length: 8})
    zip_code: string;

    @Column({type: 'varchar', length: 20})
    price: string;

    @ManyToOne(() => User)
    @JoinColumn({ name: 'userId' })
    user: number;
}