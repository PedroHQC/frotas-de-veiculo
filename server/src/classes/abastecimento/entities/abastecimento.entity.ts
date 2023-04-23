import { Veiculo } from "src/classes/veiculo/entities/veiculo.entity";
import { Entity, Column, PrimaryGeneratedColumn, ManyToMany, JoinColumn } from "typeorm";

@Entity()
export class Abastecimento {
    @PrimaryGeneratedColumn()
    id: number;

    @ManyToMany(() => Veiculo)
    @JoinColumn()
    veiculo: Veiculo[];
    
    @Column()
    dataAbastecimento: number;
    
    @Column()
    tipoCombustivel: string;
    
    @Column()
    quantidadeAbastecimento: number;
    
    @Column()
    valorAbastecimento: number;
}
