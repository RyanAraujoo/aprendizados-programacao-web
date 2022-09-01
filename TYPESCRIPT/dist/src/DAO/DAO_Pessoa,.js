"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Pessoa_1 = __importDefault(require("../Pessoa"));
class DAO_Pessoa {
    constructor(nome) {
        this.nomeDaTabela = nome;
    }
    inserir(pessoa) {
        console.log(`inserindo um objeto novo!!`);
        return true;
    }
    deletar(id) {
        console.log(`deletando através do id!!`);
        return true;
    }
    editar(id) {
        console.log(`recuperando para depois atualizar!!`);
        this.atualizar(new Pessoa_1.default("", ""));
        return true;
    }
    buscar(id) {
        console.log(`buscando através do id`);
        return new Pessoa_1.default("", "");
    }
    atualizar(pessoa) {
        console.log(`atualizando o objeto!!`);
        return true;
    }
}
exports.default = DAO_Pessoa;
