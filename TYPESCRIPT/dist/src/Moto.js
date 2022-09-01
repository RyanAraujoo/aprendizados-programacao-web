<<<<<<< HEAD
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
class Moto extends Veiculo_1.default {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }
    acelerar() {
        console.log(`Acelerando..!`);
        this.velocidade = this.velocidade = 40;
    }
}
exports.default = Moto;
=======
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const Veiculo_1 = __importDefault(require("./Veiculo"));
class Moto extends Veiculo_1.default {
    constructor(modelo) {
        super();
        this.modelo = modelo;
    }
    acelerar() {
        console.log(`Acelerando..!`);
        this.velocidade = this.velocidade = 40;
    }
}
exports.default = Moto;
>>>>>>> 0bf13ab776c8eb60614f1bfecf675c586a001502
