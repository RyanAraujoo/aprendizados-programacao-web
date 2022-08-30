let vidaDoPikachu = 100

const ResultadoDaBatalha = (poke, atack = 50) => poke > atack ? "Chupa essa manga!" : "perdedor!"

console.log(`A VIDA DO POKEMON É: ${vidaDoPikachu}`) 
 console.log(`PASSANDO O PARAMETRO: ${ResultadoDaBatalha(vidaDoPikachu, 100)}`)
 console.log(`SEM PASSAR O PARAMETRO: ${ResultadoDaBatalha(vidaDoPikachu)}`)