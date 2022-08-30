/* Refactory faz parte do que o "manifesto" de boas práticas requere no desenvolvimento em javascript,
significando, no entanto, que a busca pela forma mais enxuta é a necessária e "economiza", realmente, 
aquele uso brusco de memoria */

/* Function visa um método específico de um programa */

// Functions Normais
// Arrow Functions // ES6 2015 - !!! FORMA MAIS ENXUTA DE BUSCAR ESCABILIDADE MINIMA NA APLICAÇÃO!!!!

let vidaDoPikachu = 100

function atacarVilao (poke,atack) {
    if (poke > atack) {
     var RESULTADO = "Chupa essa manga!"
    } else {
       var RESULTADO = "perdedor!"
    }
    
    return RESULTADO
    
}
// atacarVilao(vidaDoPikachu, 50)

//console.log("a quantidade de vida do pokemon é " + vidaDoPikachu)
// console.log(atacarVilao(vidaDoPikachu, 50))

// como ficaria de forma enxuta ? 

/* 

const ResultadoDaBatalha = (poke, atack) => {
    poke > atack ? "Chupa essa manga!" : "perdedor!"
}  

*/

// vimos que a ação se resolve em única linha.. então, a arrow functions permite enxutar mais..

const ResultadoDaBatalha = (poke, atack) => poke > atack ? "Chupa essa manga!" : "perdedor!"


// 

console.log(ResultadoDaBatalha(vidaDoPikachu, 150))
