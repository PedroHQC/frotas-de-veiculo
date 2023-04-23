import { Entity, Column, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Motorista {
    @PrimaryGeneratedColumn()
    id: number;

    @Column()
    nome: string;

    @Column()
    CPF: string;

    @Column()
    RG: string;

    @Column()
    CNH: string;

}
