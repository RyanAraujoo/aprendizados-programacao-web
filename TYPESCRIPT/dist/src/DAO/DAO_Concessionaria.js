"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        this.atualizar(Object());
        return Object();
    }
    buscar(id) {
        console.log(`buscando através do id`);
        return Object();
    }
    atualizar(concessionaria) {
        console.log(`atualizando o objeto!!`);
        return true;
    }
}
exports.default = DAO_Concessionaria;
