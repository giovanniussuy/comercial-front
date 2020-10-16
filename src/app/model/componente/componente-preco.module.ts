import { Item } from '../item/item.module';
import { Model } from "../Model";

export class Default {
    id?: string;
    descricao? : string;
}

export interface ComponentePreco extends Model {
    codigo: string;
    descricao: string;
    unidadeMedida: string;
    moeda: string;
    codigoExterno: string;
    tipo: string;
    tabelaPreco: string;
    aplicacao: string;
    ativo: boolean;
    hedge: boolean;
    itens: Array<any>;
    idsComponentes: Array<any>;
    tiposFrete: Array<any>;
    finalidades: Array<any>;
}