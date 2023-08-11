let objeto1 = {
    propiedad1:2,
    propiedad2:'b',
    propiedad3:true
}

let objeto2 = {
    propiedad1: 'c',
    propiedad2: [1,2,3,4]
}

let {propiedad1,propiedad2} = objeto1 //Tomamos el objeto 1 y lo rompemos para quedarnos con 2 de las 3 propiedades

console.log(propiedad1)
console.log(propiedad2)


let objeto3 = {...objeto1,...objeto2} //Si dos propiedades tienen el mismo nombre se superponen 
let objeto4 = {...objeto2,...objeto1}
console.log(objeto3)
console.log(objeto4)
let objeto5 = {
    a:1,
    b:2,
    c:3
}

let {a,...rest} = objeto5

console.log(a)
console.log(rest)