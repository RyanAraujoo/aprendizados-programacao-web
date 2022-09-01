<<<<<<< HEAD

import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
    private numeroDePortas: Number
    velocidade: number = 0
   
    constructor (modelo: String, numeroDePortas: Number) {
        super()
       this.numeroDePortas = numeroDePortas
       this.modelo = modelo
    }
=======

import Veiculo from "./Veiculo";

export default class Carro extends Veiculo{
    private numeroDePortas: Number
    velocidade: number = 0
   
    constructor (modelo: String, numeroDePortas: Number) {
        super()
       this.numeroDePortas = numeroDePortas
       this.modelo = modelo
    }
>>>>>>> 0bf13ab776c8eb60614f1bfecf675c586a001502
}