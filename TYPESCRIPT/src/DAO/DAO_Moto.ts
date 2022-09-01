import DAO_Interface from './DAO_Interface';

export default class DAO_Moto<T> implements DAO_Interface<T> {
    public nomeDaTabela: String

    constructor(nome: String) {
        this.nomeDaTabela = nome
    }

    inserir(moto: T): Boolean{
        console.log(`inserindo um objeto novo!!`)
        return true
    }

    deletar(id: Number): Boolean {
        console.log(`deletando através do id!!`)
        return true
    }

    editar(id: Number): T { 
        console.log(`recuperando para depois atualizar!!`)
        this.atualizar(Object())
        return Object()
    }

    buscar(id: Number): T { 
        console.log(`buscando através do id`)
        return Object()
    }

    atualizar(moto: T): Boolean {
        console.log(`atualizando o objeto!!`)
        return true
    }


}
