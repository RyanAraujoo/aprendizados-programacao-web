"use strict";
// em vez de criar as classes em um só código -->
// MODULARIZE CRIANDO UM ARQUIVO SEPARADO PARA CADA CLASSE E OS EXPORTE de forma:
// Default : Não é necessário {}
// export, somente: é necessária, pois vários itens podem ser exportados até com o mesmo nome
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
// export default
// export normal 
//export default ( classes padrões e objetivas )
const Carro_1 = __importDefault(require("./Carro"));
const Pessoa_1 = __importDefault(require("./Pessoa"));
const Concessionaria_1 = __importDefault(require("./Concessionaria"));
const Moto_1 = __importDefault(require("./Moto"));
// import { manuntencao } from './Concessionaria' --> export normal
// -------------------------------------------------
let carro1 = new Carro_1.default("Fiesta 2016", 4);
let carro2 = new Carro_1.default("JeepCompass 2020", 4);
let carro3 = new Carro_1.default("Corolla 2019", 4);
let carro4 = new Carro_1.default("FiatUno 2010", 4);
// ---------------------------------------------
let concessionaria1 = new Concessionaria_1.default("Rua Hostilho Carvalho, 142");
// ---------------------------------------------
concessionaria1.fornecerCarro(carro1);
concessionaria1.fornecerCarro(carro2);
concessionaria1.fornecerCarro(carro3);
concessionaria1.fornecerCarro(carro4);
// ---------------------------------------------
let pessoa1 = new Pessoa_1.default("Ryan Pablo", "FiatUno 2010");
// ---------------------------------------------
function pesquisarCarro(concessionaria, pessoa) {
    concessionaria.mostrarListaDeCarros().map((value) => {
        if (value['modelo'] == pessoa.dizerCarroPreferido()) {
            pessoa.comprarCarro(value);
        }
        return pessoa;
    });
}
pesquisarCarro(concessionaria1, pessoa1);
console.log(pessoa1.dizerCarroQueTem());
// construção de carros dentro de uma concessionária com a possibilidade de um cliente poder comprar 
let moto = new Moto_1.default("moto 0 bala ");
moto.acelerar();
moto.acelerar();
let carro = new Carro_1.default("modelo 1", 5);
carro.acelerar();
carro.acelerar();
// -----------------------------------------------------------------
