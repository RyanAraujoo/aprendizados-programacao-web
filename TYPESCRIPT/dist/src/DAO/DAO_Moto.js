"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class DAO_Moto {
    constructor(nome) {
        this.nomeDaTabela = nome;
    }
    inserir(moto) {
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
    atualizar(moto) {
        console.log(`atualizando o objeto!!`);
        return true;
    }
}
exports.default = DAO_Moto;
