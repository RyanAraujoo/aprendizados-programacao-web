let objeto = {
    nome: 'Jorge Sant Ana',
    profissional: {
        site: 'jorgesantana.net.br',
        profissao: 'Programador'
    },
    hobbies: [
        { id: 1, hobby: 'Fazer trilhas' },
        { id: 2, hobby: 'Dormir' },
    ],
    pais: 'Brasil'
}

// descritores de propriedades
// console.log(Object.getOwnPropertyDescriptors(objeto))

//--

//Descritor Writable: quando definido com o false, ele indica que o valor da propriedade não poderá ser modificada
/*
Object.defineProperty(objeto, 'nome', {
    value: 'Jorge Sant Ana',
    writable: false
})

console.log(Object.getOwnPropertyDescriptors(objeto))
*/
//--

//--
//Descritor Enumerable: quando definido com o false, a propriedade em questão não é exibida em laços de repetição


// forma de ocultar um escopo do objeto
/*
for(let propriedade in objeto) {
   console.log(propriedade, objeto[propriedade])
}

Object.defineProperty(objeto, 'hobbies', {
    enumerable: false
})

Object.defineProperty(objeto, 'profissional', {
    enumerable: false
})

console.log(Object.getOwnPropertyDescriptors(objeto))

console.log('-------------------------------------')

for(let propriedade in objeto) {
   console.log(propriedade, objeto[propriedade])
}
*/
//--

//--
//Descritor Configurable: quando definido como false, indica que a propriedade não pode ser deletada e também não podemos mais modificar os descritores, exceto a mudança de writable para false
//console.log(Object.getOwnPropertyDescriptors(objeto))

Object.defineProperty(objeto, 'pais', {
    configurable: false
})

console.log(Object.getOwnPropertyDescriptors(objeto))

//--
