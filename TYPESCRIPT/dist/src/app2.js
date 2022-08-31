"use strict";
class Carro {
    constructor(modelo, numeroDePortas) {
        this.velocidade = 0;
        this.modelo = modelo;
        this.numeroDePortas = numeroDePortas;
    }
    acelerar() {
        console.log(`Acelerando..!`);
        this.velocidade = this.velocidade = 20;
    }
    parar() {
        console.log(`Reduzindo a velocidade!!`);
        this.velocidade = 0;
    }
    velocidadeAtual() {
        return this.velocidade;
    }
}
class Concessionaria {
    constructor(endereco) {
        this.endereco = endereco;
        this.listaDeCarros = [];
    }
    fornecerEndereco() {
        return this.endereco;
    }
    mostrarListaDeCarros() {
        return this.listaDeCarros;
    }
    fornecerCarro(automovel) {
        this.listaDeCarros.push(automovel);
    }
}
class Pessoa {
    constructor(nome, carroPreferido) {
        this.nome = nome;
        this.carroPreferido = carroPreferido;
    }
    dizerNome() {
        return this.nome;
    }
    dizerCarroPreferido() {
        return this.carroPreferido;
    }
    comprarCarro(carro) {
        this.carro = carro;
    }
    dizerCarroQueTem() {
        return this.carro;
    }
}
// -------------------------------------------------
let carro1 = new Carro("Fiesta 2016", 4);
let carro2 = new Carro("JeepCompass 2020", 4);
let carro3 = new Carro("Corolla 2019", 4);
let carro4 = new Carro("FiatUno 2010", 4);
// ---------------------------------------------
let concessionaria1 = new Concessionaria("Rua Hostilho Carvalho, 142");
// ---------------------------------------------
concessionaria1.fornecerCarro(carro1);
concessionaria1.fornecerCarro(carro2);
concessionaria1.fornecerCarro(carro3);
concessionaria1.fornecerCarro(carro4);
// ---------------------------------------------
let pessoa1 = new Pessoa("Ryan Pablo", "FiatUno 2010");
// ---------------------------------------------
function pesquisarCarro(concessionaria, pessoa) {
    concessionaria.mostrarListaDeCarros().map((value) => {
        if (value['modelo'] == pessoa.dizerCarroPreferido()) {
            pessoa.comprarCarro(value);
        }
        return pessoa;
    });
}
pesquisarCarro(concessionaria1, pessoa1);
console.log(pessoa1.dizerCarroQueTem());
