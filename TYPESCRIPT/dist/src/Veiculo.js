"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class Veiculo {
    constructor() {
        this.velocidade = 0;
    }
    acelerar() {
        console.log(`Acelerando..!`);
        this.velocidade = this.velocidade = 20;
    }
    parar() {
        console.log(`Reduzindo a velocidade!!`);
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
exports.default = Veiculo;
