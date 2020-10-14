import { Model } from "../Model";

export interface Item extends Model {
    codigo: string;
    descricao: string;
}