/*
Realizar un programa que cree un archivo en el cual escriba la fecha y la hora actual. 
Posteriormente leer el archivo y mostrar el contenido por consola.
Utilizar el módulo fs y sus operaciones de tipo callbacks
*/

const fs = require('fs')

const fecha = new Date().toLocaleDateString()
const hora = new Date().getHours()

const fechaHora = `${fecha} ${hora}`

fs.writeFile('./FechaHora.txt',fechaHora,error=>{
     if(error) return console.log('Error al escribir en el archivo')
     fs.readFile('./FechaHora.txt','utf-8',(error,contenido)=>{
        if(error) return console.log('Error al leer el archivo')
        console.log(contenido)
     })
 })