// independete da situação, o finally veio como uma alternativa de ser executada 
// a qualquer custo no bloco de promisses


let avsDaPromissoria = new Promise((resolve, reject) => {
            try {
                setTimeout(() => {
                        resolve("resolvido o problema!!!")
                }, 3000)
            } catch (e) {
                reject(e)
            } finally {
                console.log("finalizada a promisses ")
            }
})

console.log(avsDaPromissoria) 

setTimeout(() => {
    console.log(avsDaPromissoria) 
}, 3000)
