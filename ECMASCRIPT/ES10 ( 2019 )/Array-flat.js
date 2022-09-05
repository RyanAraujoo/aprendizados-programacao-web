// ARRAY FLAT

/* Como esta função Javascript, é capaz de manipular
o nível de profundidade que você pode acessar em um array  */

let arr = [1,2,3,[5,6,7,[8,9,10,[11,12,13,[14,15,16, [17,18,19,20]]]]]]
let arr2 = arr.flat(5)

console.log(arr2)