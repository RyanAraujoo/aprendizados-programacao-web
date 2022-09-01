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
const DAO_Carro_1 = __importDefault(require("./DAO/DAO_Carro"));
const DAO_Pessoa_1 = __importDefault(require("./DAO/DAO_Pessoa,"));
const DAO_Moto_1 = __importDefault(require("./DAO/DAO_Moto"));
const DAO_Concessionaria_1 = __importDefault(require("./DAO/DAO_Concessionaria"));
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
// console.log(pessoa1.dizerCarroQueTem()) <-- compra realizada pelo cliente pela concessionaria
// construção de carros dentro de uma concessionária com a possibilidade de um cliente poder comprar 
let moto1 = new Moto_1.default("moto 0 bala ");
moto1.acelerar();
moto1.acelerar();
carro1.acelerar();
carro1.acelerar();
carro1.acelerar();
console.log(`Velocidade atual do carro: ${carro1.velocidadeAtual()}`);
console.log(`Velocidade atual do moto: ${moto1.velocidadeAtual()}`);
// testando o polimorfismo entre as mesmas funções reescritas
// -----------------------------------------------------------------
console.log("-----------------------------------------------------------------");
// A INSTANCIA É NECESSÁRIA PASSAR PARA O GENERICS DA INTERFACE O TIPO UTILIZADO + DECLARAR DAO ESPECIFICO
let daoCarro = new DAO_Carro_1.default("OperatorCarro");
console.log(`Inserindo no DAO de CARRO ${daoCarro.inserir(carro1)}`);
let daoPessoa = new DAO_Pessoa_1.default("OperatorPessoa");
console.log(`atualizando no DAO de Pessoa ${daoPessoa.atualizar(pessoa1)}`);
let daoMoto = new DAO_Moto_1.default("OperatorMoto");
console.log(`Buscando no DAO de Moto ${daoMoto.buscar(1234)}`);
let daoConcessionaria = new DAO_Concessionaria_1.default("OperatorConcessionaria");
console.log(`deletando no DAO de Concessionaria ${daoConcessionaria.deletar(1213)}`);
