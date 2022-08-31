// inserção do uso de classes - paradigma orientado a objetos -
class Promissory {
    constructor(nome, valorTotal, nomeDaEmpresa, numeroDeParcelas) {
        this.nome = nome
        this.dataDeEmissao = ''
        this.valorTotal = valorTotal
        this.nomeDaEmpresa = nomeDaEmpresa
        this.numeroDeParcelas = numeroDeParcelas
        this.valorMensal = valorTotal / numeroDeParcelas
        this.avs = new Object()
    }
    

   definirDataDeEmissao() {
        const timeElapsed = Date.now()
         const today = new Date(timeElapsed)
         return this.dataDeEmissao = today.toLocaleDateString()
    }

}

function* lerPromissory (Promissory) {
console.log(Promissory.nome)
console.log(Promissory.dataDeEmissao)
yield console.log(Promissory.valorTotal)
console.log(Promissory.valorMensal)
console.log(Promissory.numeroDeParcelas)
console.log(Promissory.nomeDaEmpresa)
}

let user1 = new Promissory("Felipe Dos Santos", 500,"BRQ SOLUTIONS", 5)
user1.definirDataDeEmissao()


class Pessoa {
    constructor (nome, idade) {
        this.nome = nome
        this.idade = idade
        this.passos = 0
    }

    andar() {
        this.passos += 5
        console.log(`${this.nome} está caminhando!!!`)
        
    }

    correr() {
        this.passos += 10
        console.log(`${this.nome} está correndo!!!`)
    }

    parar() {
        this.passos = 0
        console.log(`${this.nome} está parada!!!`)
    }

}

class Atleta extends Pessoa {
    constructor() {
        super("Telly Araújo", 15)
        this.modalidade / undefined
    }

    definirCategoria() {
     return this.modalidade = this.idade < 18 ? "juvenil" : "olimpica"
    }
}

let atleta1 = new Atleta()

console.log(atleta1)
atleta1.definirCategoria()
console.log(atleta1)


