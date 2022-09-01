import DAO_Interface from './DAO_Interface';
import Moto from './../Moto';

export default class DAO_Moto implements DAO_Interface {
    public nomeDaTabela: String

    constructor(nome: String) {
        this.nomeDaTabela = nome
    }

    inserir(moto: Moto): Boolean{
        console.log(`inserindo um objeto novo!!`)
        return true
    }

    deletar(id: Number): Boolean {
        console.log(`deletando através do id!!`)
        return true
    }

    editar(id: Number): Boolean { 
        console.log(`recuperando para depois atualizar!!`)
        this.atualizar(new Moto(""))
        return true
    }

    buscar(id: Number): Moto { 
        console.log(`buscando através do id`)
        return new Moto("")
    }

    atualizar(moto: Moto): Boolean {
        console.log(`atualizando o objeto!!`)
        return true
    }


}
