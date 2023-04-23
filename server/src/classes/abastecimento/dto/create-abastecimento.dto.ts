import { Veiculo } from "src/classes/veiculo/entities/veiculo.entity";

export class CreateAbastecimentoDto {
    veiculo: Veiculo;
    dataAbastecimento: number;
    tipoCombustivel: string;
    quantidadeAbastecimento: number;
    valorAbastecimento: number;
}
