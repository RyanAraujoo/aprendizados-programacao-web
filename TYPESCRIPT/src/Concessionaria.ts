import Carro from "./Carro"

export default class Concessionaria {
    private endereco: String
    private listaDeCarros: Array<Carro>

    constructor(endereco: String) {
        this.endereco = endereco
        this.listaDeCarros = []
    }

    fornecerEndereco(): String {
        return this.endereco
    }

    mostrarListaDeCarros(): Array<Carro> {
        return this.listaDeCarros
    }

    fornecerCarro(automovel: Carro): void {
        this.listaDeCarros.push(automovel)
    }

}

export let manuntencao: Number = 12300