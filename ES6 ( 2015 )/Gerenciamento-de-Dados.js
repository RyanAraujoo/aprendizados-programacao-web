/* CONST = SEMPRE EM MAIUSCULO */

/* hoisting  é  “içamento”, ou “elevação”  */ 

/* CONST E LET OBEDECE O ESCOPO ATUAL */

/* VAR CONSEGUE SUBIR POSIÇÃO E SOFRER COM HOISTING E SUBSTITUIR OUTRA VARIAVEL IGUAL */

const NOME = "Luta"
let vidaDoLeao = 100
let vidaDoJacaré = 200

function lutaDosBrabos() {
    if (vidaDoLeao > 50) {
        var atack = 25
    } else {
        var atack = 20
    }
    return atack
}
console.log(vidaDoJacaré - lutaDosBrabos())
console.log(NOME)
 