// Asynchronous é a habilidade de criar funções sincronas com interadores ( for )

let arr = [1,2,3,4,5]

let asynchronous = async () =>  {
    for (let num of arr) {
        await new Promise((x,y) => {
              setTimeout(() => {
                  console.log(`Repetição ${num}`)
                  x()
              }, 2000)
             
          })
          console.log(num)
      }
}
asynchronous()