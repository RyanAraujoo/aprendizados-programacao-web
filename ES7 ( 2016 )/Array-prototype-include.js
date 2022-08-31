// novo lanãmento do es7
// o include é responsavel por pesquisar no array um determinado valor e retorna:

//true se encontrado ---
//false para undefined ---

arr = [10,20,30,40,50]

//no metodo tradicional

let array = arr.find(value => {
    return value == 30
})

// console.log(array)

// no método novo 

console.log(arr.includes(100))
