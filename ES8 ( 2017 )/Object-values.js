// O object values é responsável por transformar nosso objeto 
// num formato estilo json() - conversão de dados web para aplicação


const nota = {
    name: 'Ryan Pablo Silva Araujo',
    id: 3456,
    avs: {
            1: {
            id: 0,
            valor: 230,
            data: Date.now()
        },
            2: {
            id: 1,
            valor: 230,
            data: Date.now()
        }, 
            3: {
            id: 2,
            valor: 230,
            data: Date.now()
        },
            4: {
            id: 3,
            valor: 230,
            data: Date.now()
        },

    }

}

console.log(Object.values(nota))
