import { Motorista } from "./Motorista";
import { Veiculo } from "./Veiculo";

export interface Viagem {
    id?: number;
    origem: string;
    destino: string;
    distanciaKm: number;
    motoristaViagem: Motorista;
    veiculoViagem: Veiculo;
}