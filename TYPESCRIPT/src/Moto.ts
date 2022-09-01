
import Veiculo from "./Veiculo";

export default class Moto extends Veiculo {
    
    constructor (modelo: String) {
        super()
        this.modelo = modelo
    }

    public acelerar(): void {  // o void é para dizer apenas que a função não tem retorno
        console.log(`Acelerando..!`)
        this.velocidade = this.velocidade = 40
    } 
    // estou sobreescrevendo o método // polimorfismo // "varias formas" <----------------

}