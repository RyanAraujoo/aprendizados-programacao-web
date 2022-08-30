/* Refactory faz parte do que o "manifesto" de boas práticas requere no desenvolvimento em javascript,
significando, no entanto, que a busca pela forma mais enxuta é a necessária e "economiza", realmente, 
aquele uso brusco de memoria */
let vidaDoPikachu = 100
function atacarVilao (poke,atack) {
    if (poke > atack) {
     var RESULTADO = "Chupa essa manga!"
    } else {
       var RESULTADO = "perdedor!"
    }
    
    return RESULTADO
    
}

//console.log("a quantidade de vida do pokemon é " + vidaDoPikachu)
console.log(`a quantidade de vida do pokemon é " + ${vidaDoPikachu}`) // template strings
 console.log(atacarVilao(vidaDoPikachu, 50))