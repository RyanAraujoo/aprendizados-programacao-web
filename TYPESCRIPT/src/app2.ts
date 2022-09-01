// em vez de criar as classes em um só código -->
// MODULARIZE CRIANDO UM ARQUIVO SEPARADO PARA CADA CLASSE E OS EXPORTE de forma:
// Default : Não é necessário {}
// export, somente: é necessária, pois vários itens podem ser exportados até com o mesmo nome

// export default
// export normal 

//export default ( classes padrões e objetivas )
import Carro from './Carro'
import Pessoa from './Pessoa'
import Concessionaria from './Concessionaria';

import Moto from './Moto';


// import { manuntencao } from './Concessionaria' --> export normal
import DAO_Carro from './DAO/DAO_Carro';
import DAO_Pessoa from './DAO/DAO_Pessoa,';
import DAO_Moto from './DAO/DAO_Moto';
import DAO_Concessionaria from './DAO/DAO_Concessionaria';

// -------------------------------------------------
let carro1 = new Carro("Fiesta 2016",4)
let carro2 = new Carro("JeepCompass 2020",4)
let carro3 = new Carro ("Corolla 2019",4)
let carro4 = new Carro ("FiatUno 2010",4)
// ---------------------------------------------

let concessionaria1 = new Concessionaria("Rua Hostilho Carvalho, 142")
// ---------------------------------------------
concessionaria1.fornecerCarro(carro1)
concessionaria1.fornecerCarro(carro2)
concessionaria1.fornecerCarro(carro3)
concessionaria1.fornecerCarro(carro4)
// ---------------------------------------------

let pessoa1 = new Pessoa("Ryan Pablo", "FiatUno 2010")

// ---------------------------------------------


 function pesquisarCarro(concessionaria: Concessionaria, pessoa: Pessoa) {
  concessionaria.mostrarListaDeCarros().map((value: Carro) => {
        if(value['modelo'] == pessoa.dizerCarroPreferido()) {
            pessoa.comprarCarro(value)
        }
        return pessoa
 })
}

 pesquisarCarro(concessionaria1,pessoa1)
 // console.log(pessoa1.dizerCarroQueTem()) <-- compra realizada pelo cliente pela concessionaria

 // construção de carros dentro de uma concessionária com a possibilidade de um cliente poder comprar 


let moto1 = new Moto("moto 0 bala ")
 moto1.acelerar()
 moto1.acelerar()

 carro1.acelerar()
 carro1.acelerar()
 carro1.acelerar()

console.log(`Velocidade atual do carro: ${carro1.velocidadeAtual()}`) 
console.log(`Velocidade atual do moto: ${moto1.velocidadeAtual()}`) 

// testando o polimorfismo entre as mesmas funções reescritas

// -----------------------------------------------------------------

console.log("-----------------------------------------------------------------")

let daoCarro = new DAO_Carro("OperatorCarro")

console.log(`Inserindo no DAO de CARRO ${daoCarro.inserir(carro1)}`)

let daoPessoa = new DAO_Pessoa("OperatorPessoa")

console.log(`atualizando no DAO de Pessoa ${daoPessoa.atualizar(pessoa1)}`)

let daoMoto = new DAO_Moto("OperatorMoto")

console.log(`Buscando no DAO de Moto ${daoMoto.buscar(1234)}`)

let daoConcessionaria = new DAO_Concessionaria("OperatorConcessionaria")

console.log(`deletando no DAO de Concessionaria ${daoConcessionaria.deletar(1213)}`)










