import DAO_Interface from "./DAO_Interface";
import Concessionaria from './../Concessionaria';

export default class DAO_Concessionaria implements DAO_Interface {
        public nomeDaTabela: String

        constructor(nome: String) {
            this.nomeDaTabela = nome
        }

        inserir(concessionaria: Concessionaria): Boolean{
            console.log(`inserindo um objeto novo!!`)
            return true
        }

        deletar(id: Number): Boolean {
            console.log(`deletando através do id!!`)
            return true
        }

        editar(id: Number): Boolean { 
            console.log(`recuperando para depois atualizar!!`)
            this.atualizar(new Concessionaria(""))
            return true
        }

        buscar(id: Number): Concessionaria { 
            console.log(`buscando através do id`)
            return new Concessionaria("")
        }

        atualizar(concessionaria: Concessionaria): Boolean {
            console.log(`atualizando o objeto!!`)
            return true
        }

}
