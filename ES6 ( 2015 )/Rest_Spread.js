//contexto spread -> utilizado para expandir

//string
let tituloArtigo = 'Como utilizar o operador rest/spread'
console.log(tituloArtigo)
console.log(...tituloArtigo)
console.log([...tituloArtigo])
console.log({ ...tituloArtigo })

//array
let listaCursos1 = ['NodeJS e MongoDB', 'Angular']
let listaCursos2 = ['Solid', 'Laravel']
let listaCompletaCursos = [
  ...listaCursos1,
  'Web Completo',
  ...listaCursos2,
  'Banco de Dados',
]

console.log(listaCompletaCursos)

//objetos
let pessoa = { nome: 'Pedro', idade: 32 }
let cadastroCompleto = { endereco: 'Rua Abc', ...pessoa }

console.log(cadastroCompleto)

//contexto rest -> (utilizado para condensar)

function soma(...p) {
  let resultado = 0

  p.forEach(v => resultado += v)

  return resultado
}

let x = soma(5, 7, 49, 12, 56, 55, 13, -8, -5)
//console.log('resultado: ', x)

function multiplicacao(m, ...n) {
  //console.log(m)
  //console.log(n)

  let resultado = 0
  n.forEach(v => resultado += m * v)

  return resultado
}

let y = multiplicacao(5, 7, 12, 13, 49, 2, -11)
console.log('resultado: ', y)




