/*
Dados los objetos indicados en la siguiente diapositiva:
->Realizar una lista nueva (array) que contenga todos los tipos de productos (no cantidades),
consejo: utilizar Object.keys y Array.includes mostrar el array por consola
->Posteriormente, obtener el total de productos vendidos por toods los objetos (Utilizar object.values)
*/
const objetos = [
    {
        manzanas:3,
        peras:2,
        carne:1,
        jugos:5
    },
    {
        manzanas:1,
        sandias:1,
        huevos:6,
        jugos:1,
        panes:4
    }
]

const typeProducts = objetos.reduce((accumulator,value)=>{
    Object.keys(value).forEach(element=>{
        if(!accumulator.includes(element)){
            accumulator.push(element)
        }
    })
    return accumulator
},[])

const productSale = typeProducts.reduce((accumulator,value)=>{
    accumulator[value] = 0
    Object.values(objetos).forEach(element=>{
        if(element[value]){
            accumulator[value] += element[value]
        }
    })
    return accumulator
},{})

console.log(typeProducts)
console.log(productSale)