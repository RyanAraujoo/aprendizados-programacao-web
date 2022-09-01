import DAO_Interface from './DAO_Interface';
import Carro from './../Carro';

export default class DAO_Carro implements DAO_Interface {
    public nomeDaTabela: String

    constructor(nome: String) {
        this.nomeDaTabela = nome
    }
    
    inserir(carro: Carro): Boolean{
        console.log(`inserindo um objeto novo!!`)
        return true
    }
    
    deletar(id: Number): Boolean {
        console.log(`deletando através do id!!`)
        return true
    }
    
    editar(id: Number): Boolean { 
        console.log(`recuperando para depois atualizar!!`)
        this.atualizar(new Carro("",0))
        return true
    }
    
    buscar(id: Number): Carro { 
        console.log(`buscando através do id`)
        return new Carro("",0)
    }
    
    atualizar(carro: Carro): Boolean {
        console.log(`atualizando o objeto!!`)
        return true
    }
}



