import { Veiculo } from "src/classes/veiculo/entities/veiculo.entity";

export class CreateManutencaoDto {
    veiculo: Veiculo;
    tipoManutencao: string;
    dataManutencao: number;
    custoManutencao: number;

}
