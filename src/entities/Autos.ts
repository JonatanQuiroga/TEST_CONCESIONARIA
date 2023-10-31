import { BaseEntity, Column, CreateDateColumn, Entity, PrimaryGeneratedColumn, UpdateDateColumn } from "typeorm";

@Entity()
export class Autos extends BaseEntity{

    @PrimaryGeneratedColumn()
    id: number

    @Column()
    modelo: string

    @Column()
    marca: string

    @Column()
    año: number

    @Column()
    precio: number

    @Column()
    cant_disponible: number

    @CreateDateColumn()
    CreateAt: Date

    @UpdateDateColumn()
    UpdateAt: Date
}