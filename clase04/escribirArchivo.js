const escribirArchivo = require('./escrArch.js')

console.log('Inicio')

escribirArchivo('Hora mundo',()=>{
    console.log('Termine de escribir el archivo')
})

console.log('Fin')