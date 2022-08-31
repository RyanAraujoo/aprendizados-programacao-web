
/*
//destructuring assigment no contexto de arrays

            
            let frutas = ['Abacaxi', 'Uva', 'Pera', 'Mamão']
           //  let a = frutas[1]
            
          let [ a, b ] = frutas
            console.log(a,b)

    // o espaço se considera uma pula de valor

      let [ d, e, , f] = frutas

    // pode colocar valor padrão, caso, não há existencia na desestruturação do array 

            let [ g, h = 'Abacate', i, j, k = 'Banana'] = frutas

            console.log(g, h, i, j, k)
         
    // pulou o array até chegar em um ponto especifico
            let coisas = [['Abacaxi', 'Uva', 'Pera', 'Mamão'],['José', 'Maria']]
            let [,[,x]] = coisas
            console.log(x)  

*/
/*
//destructuring assignment no contexto de objetos

  let produto = {
    descricao: 'Notebook',
    preco: 2500,
    detalhes: {
        fabricante: 'Abc',
        modelo: undefined
    }
}

 // let { descricao, preco } = produto
 // console.log(descricao, preco)

    //nomear as variáveis com outros nomes
          //  let { descricao: d, preco: p } = produto
          //  console.log(d, p)

    //valores default para lidar com parametros default
            let { descricao: d = 10, preco: p } = produto
            console.log(d, p)
      //extrair atributos de objetos pertencentes a atributos do objeto
             // recuperar valores internos do objeto

      //let { descricao, detalhes: { fabricante, modelo } } = produto 

            // recuperar o fabricante como f

            //let { descricao, detalhes: { fabricante: f, modelo } } = produto 

            // parametros default no modelo

            let { descricao, detalhes: { fabricante: f, modelo = 'Não informado' } } = produto 
            console.log(descricao, f, modelo)

*/
//array 
let arr = [10, 20, 30, 40]

//function teste([ a, b ]) { //destructuring     //console.log(teste(arr[0], arr[1]))
//function teste([a, b, , c]) { //pular valores   // console.log(teste(arr))

/*
function teste([a, b,, c, d = 100]) { //parâmetros padrões
    return [a,b,c,d]
}
console.log(teste(arr))
*/
/*

 //objeto
 let obj = {
    a: 10,
    b: 20,
    c: 30,
    d: 40
}

//function teste2({ c, d }) {
//function teste2({ c, d: x }) { //aplidos
function teste2({ c, d: x, t = 100}) { //parâmetros padrões
    console.log(c, x, t)
}
teste2(obj)

*/
// uso de destructuring com o operador rest 

  //array
  let arr2 = [10,20,30,40]
  let [ a, f, ...x ] = arr2
  // console.log(a, f, x)

  //objtos
  let obj = {a:10, b:20, c:30, d:40}
  let { a: p, c: h, ...resto } = obj
  console.log(p, h, resto)
  