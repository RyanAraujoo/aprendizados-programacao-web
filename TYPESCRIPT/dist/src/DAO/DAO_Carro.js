"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Carro_1 = __importDefault(require("./../Carro"));
class DAO_Carro {
    constructor(nome) {
        this.nomeDaTabela = nome;
    }
    inserir(carro) {
        console.log(`inserindo um objeto novo!!`);
        return true;
    }
    deletar(id) {
        console.log(`deletando através do id!!`);
        return true;
    }
    editar(id) {
        console.log(`recuperando para depois atualizar!!`);
        this.atualizar(new Carro_1.default("", 0));
        return true;
    }
    buscar(id) {
        console.log(`buscando através do id`);
        return new Carro_1.default("", 0);
    }
    atualizar(carro) {
        console.log(`atualizando o objeto!!`);
        return true;
    }
}
exports.default = DAO_Carro;
