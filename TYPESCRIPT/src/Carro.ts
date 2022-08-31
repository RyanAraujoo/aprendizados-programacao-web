
export default class Carro {
    private modelo: String
    private numeroDePortas: Number
    private velocidade: Number = 0
   
    constructor (modelo: String, numeroDePortas: Number) {
       this.modelo = modelo;
       this.numeroDePortas = numeroDePortas
    }

    public acelerar(): void {  // o void é para dizer apenas que a função não tem retorno
        console.log(`Acelerando..!`)
        this.velocidade = this.velocidade = 20
    }

    parar () { // quando não se coloca nada, já vem por padrão, assim como o próprio public <----
        console.log(`Reduzindo a velocidade!!`)
        this.velocidade = 0
    }

    velocidadeAtual():Number {
        return this.velocidade
    }
}