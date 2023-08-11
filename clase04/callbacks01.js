let valores = [1,2,3,4]

let nuevosValores = valores.map(x=>x+1)

console.log(nuevosValores) // [2,3,4,5]

let nuevosValores02 = valores.map((x,y) => x**y) //[1,2,9,64]

console.log(nuevosValores02)

// const funcionConCAllback = (valor) =>{
//     if(valor%2 === 0){
//         return valor
//     }else{
//         return -1
//     }
// }

// const result = valores.map(funcionConCAllback)

// console.log(result)

const funcionPar = valores.map(element=>{
    if(element%2==0) return element
    return -1
})

console.log(funcionPar)