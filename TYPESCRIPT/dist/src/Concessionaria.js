"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.manuntencao = void 0;
class Concessionaria {
    constructor(endereco) {
        this.endereco = endereco;
        this.listaDeCarros = [];
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerCarro(automovel) {
        this.listaDeCarros.push(automovel);
    }
}
exports.default = Concessionaria;
exports.manuntencao = 12300;
