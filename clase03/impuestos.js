const objetos = {
    renta: 1000,
    iva: 21,
    automotor: 7000
}
const impuestos = Object.keys(objetos)
console.log('Los impuestos son: '+impuestos)
const valoresImpuestos = Object.entries(objetos)
console.log(`Los impuestos con sus valores son: `) 
console.log(valoresImpuestos)
const totalAPagar = Object.values(objetos).reduce((acumulador,element)=>acumulador += element)
console.log(`El total a pagar es: ${totalAPagar}`)


