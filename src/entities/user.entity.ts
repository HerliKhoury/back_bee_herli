import { BeforeInsert, BeforeUpdate, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { getRounds, hashSync } from "bcryptjs";

@Entity("user")
export class User{
    @PrimaryGeneratedColumn("increment")
    id: number;

    @Column({type: 'varchar', length: 60})
    name: string;

    @Column({type: 'varchar', length: 45, unique: true})
    email: string;

    @Column({type: 'varchar', unique: true})
    phone: string;

    @Column({type: 'varchar', length: 120})
    password: string;

    @BeforeInsert()
    @BeforeUpdate()
    hashPassword() {
        const isEncrypted: number = getRounds(this.password); 

        if (!isEncrypted) {
            this.password = hashSync(this.password, 10);
        }
    }
}