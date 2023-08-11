const fs = require('fs')

fs.writeFile('./ejemploCallback.txt','Hola desde archivo con callback',(error)=>{
    if(error) return console.log('Error al escribir archivo')
    fs.readFile('./ejemploCallback.txt','utf-8',(error,resultado)=>{
        if(error) return console.log('Error al leer el archivo')
        console.log(resultado)
        fs.appendFile('./ejemploCallback.txt',' Mas contenido',(error)=>{
            if(error) return console.log('Error al actualizar un archivo')
            fs.readFile('./ejemploCallback.txt','utf-8',(error,resultado)=>{
                if(error) return console.log('Error al leer archivo')
                console.log(resultado)
                // fs.unlink('./ejemploCallback.txt',(error)=>{
                //     if(error) return console.log('No se pudo eliminar el archivo')
                // })
            })
        })
    })
})