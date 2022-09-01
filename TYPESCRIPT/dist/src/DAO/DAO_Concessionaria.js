"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Concessionaria_1 = __importDefault(require("./../Concessionaria"));
class DAO_Concessionaria {
    constructor(nome) {
        this.nomeDaTabela = nome;
    }
    inserir(concessionaria) {
        console.log(`inserindo um objeto novo!!`);
        return true;
    }
    deletar(id) {
        console.log(`deletando através do id!!`);
        return true;
    }
    editar(id) {
        console.log(`recuperando para depois atualizar!!`);
        this.atualizar(new Concessionaria_1.default(""));
        return true;
    }
    buscar(id) {
        console.log(`buscando através do id`);
        return new Concessionaria_1.default("");
    }
    atualizar(concessionaria) {
        console.log(`atualizando o objeto!!`);
        return true;
    }
}
exports.default = DAO_Concessionaria;
