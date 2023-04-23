import { Veiculo } from '../interfaces/Veiculo';

export interface Manutencao {
    id?: number;
    veiculo: Veiculo;
    tipoManutencao: string;
    dataManutencao: number;
    custoManutencao: number;
}