import { Item } from '../item/item.module';
import { Model } from "../Model";

export interface ComponentePreco extends Model {
    codigo: string;
    descricao: string;
    unidadeMedida: string;
    moeda: string;
    codigoExterno: string;
    tipo: string;
    tabela: string;
    aplicacao: string;
    ativo: boolean;
    hedge: boolean;
    item: Array<Item>;
}