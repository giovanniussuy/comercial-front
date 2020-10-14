import { Item } from '../item/item.module';
import { Model } from "../Model";

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
    item: Array<any>;
    componente: Array<any>;
    tipoFrete: Array<any>;
    finalidade: Array<any>;
}