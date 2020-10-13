import { Model } from "../Model";

export interface Item extends Model {
    codigo: number;
    descricao: string;
}