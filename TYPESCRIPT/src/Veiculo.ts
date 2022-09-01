export default class Veiculo {
        protected modelo: String | undefined
        protected velocidade: Number = 0

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