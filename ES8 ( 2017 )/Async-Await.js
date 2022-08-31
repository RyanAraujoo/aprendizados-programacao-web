// async é utilizado para determinar uma sicronidade numa função que renderiza em tempos distintos

// await é utilizado para determinar o ponto de espera de um método 

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


// --------------------

async function recuperarDate () {
    console.log("Iniciando o ASync")

  await  fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .catch(error => {throw new Error(`Falha na Autorização! ${error}`)})
    .then(response => {return response})

    console.log("Renderizando o próximo pokemon")

   await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .catch(error => {throw new Error(`Falha na Autorização! ${error}`)})
    .then(response => {return response})

    console.log("Renderizando o próximo 2 pokemon")

   await fetch("https://pokeapi.co/api/v2/pokemon/ditto")
    .then(response => response.json())
    .catch(error => {throw new Error(`Falha na Autorização! ${error}`)})
    .then(response => {return response})

    return 'fim'
}

 console.log(recuperarDate().then(p => console.log(p)))
