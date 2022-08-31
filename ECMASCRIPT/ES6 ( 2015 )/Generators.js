// Generators é, basicamente, uma forma de manipular a execução do método ou função.
// yield é o pause dentro do método específico
/* é importante lembrar que uma vez passado o valor, ele se mantem fixo durante todo next('')
            1 - se quiser modificar-lo, apenas insira a variavel antes e idente com o "="
*/
// ----------------------------------------------------------------------------

function* abrirAtendimento () {
        console.log("Olá, Bem vindo a, PROMI`´SHOP") 
        console.log("O que deseja?")
        let opcao =  yield  "1 - Consultar uma promissória específica? \n2- Opção 1 kkk"
        opcao = yield ("Temos a de Felipe Santos, te interessa ?")
}

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

// ----------------------------------------------------------------------------

let user1 = new Promissory("Felipe Dos Santos", 500,"BRQ SOLUTIONS", 5)
user1.definirDataDeEmissao() // definindo a data de emissão da promissória conforme data atual

// ----------------------------------------------------------------------------

function* lerPromissory (n) {
    function seguir () {
        console.log(n.valorMensal)
        console.log(n.numeroDeParcelas)
        console.log(n.nomeDaEmpresa)
    }
    console.log(n.nome)
    console.log(n.dataDeEmissao)
    console.log(n.valorTotal)
   let opcao = yield "Ver mais?"
   opcao == "sim" ? seguir(): ''
}

// ----------------------------------------------------------------------------

function mostrarNaTela (x) {
    document.getElementById('atendimento').innerHTML = `${x}`
}

// ---------------------------------------------------------------------------

let atendimento = abrirAtendimento()
let promissory = lerPromissory(user1)


// ----------------------------------------------------------------------------

console.log(atendimento.next())
console.log(atendimento.next(1))
console.log(atendimento.next("sim"))
console.log(promissory.next())
console.log(promissory.next('sim'))