import { Motorista } from "src/classes/motorista/entities/motorista.entity";
import { Veiculo } from "src/classes/veiculo/entities/veiculo.entity";

export class CreateViagemDto {
    origem: string;
    destino: string;
    distanciaKm: number;
    motoristaViagem: Motorista;
    veiculoViagem: Veiculo;

}
