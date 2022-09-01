import Pessoa from "../Pessoa";
import DAO_Interface from "./DAO_Interface";

export default class DAO_Pessoa implements DAO_Interface {
    public nomeDaTabela: String

    constructor(nome: String) {
        this.nomeDaTabela = nome
    }

    inserir(pessoa: Pessoa): Boolean{
        console.log(`inserindo um objeto novo!!`)
        return true
    }

    deletar(id: Number): Boolean {
        console.log(`deletando através do id!!`)
        return true
    }

    editar(id: Number): Boolean { 
        console.log(`recuperando para depois atualizar!!`)
        this.atualizar(new Pessoa("",""))
        return true
    }

    buscar(id: Number): Pessoa { 
        console.log(`buscando através do id`)
        return new Pessoa("","")
    }

    atualizar(pessoa: Pessoa): Boolean {
        console.log(`atualizando o objeto!!`)
        return true
    }

}

