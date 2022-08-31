/* promisses são funções assincronas que nos permite atuar sobre três estados:

        1- Pending ( Pendente )
        2 - FullFilled ( Realizado )
        3- Reject ( Rejeitado )

    esses valores são exposto em um futuro, agora ou nunca!
*/
/*
let avsDaPromissoria = new Promise((resolve, reject) => {
            try {
               throw new Error("Ola")
                console.log("alo")
                setTimeout(() => {
                        resolve("resolvido o problema!!!")
                }, 3000)
            } catch (e) {
                reject(e)
            } finally {

            }
})

console.log(avsDaPromissoria) 

setTimeout(() => {
    console.log(avsDaPromissoria) 
}, 3000)
*/

// ------------------------------------------------------------------------------

/* promisses possuem técnicas sincronas como o then() e o catch que são processos posteriores
e iniciativas ao inicio da promisses */

let data = function salvarData (x) {
    return x
}

let avsDaPromissoria = new Promise((resolve, reject) => {
    try {
        setTimeout(() => {
          fetch("https://pokeapi.co/api/v2/pokemon/ditto")
             .then(response => response.json())
             .catch(error => {throw new Error(`Falha na Autorização! ${error}`)})
             .then(response => {return salvarData(response)})
         },2000)
         
     } catch (e) {
        reject(`Requesição falha: ${e}`)
     }
})

// console.log(avsDaPromissoria)
            
// não vai pegar devido que o fetch não consegue acessar por não ter acesso via http do servidor oferecido pelo html em si.