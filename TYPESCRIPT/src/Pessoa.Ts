import Carro from "./Carro"

export default class Pessoa {
    private nome: String
    private carroPreferido: String
    private carro: Carro | undefined

    constructor (nome: String, carroPreferido: String) {
        this.nome = nome
        this.carroPreferido = carroPreferido
    }

    dizerNome(): String {
        return this.nome
    }
    dizerCarroPreferido(): String {
        return this.carroPreferido
    }
    comprarCarro(carro: Carro) {
        this.carro = carro
    }
    dizerCarroQueTem(): any {
        return this.carro
    }
}