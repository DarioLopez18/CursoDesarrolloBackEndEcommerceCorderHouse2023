const copiarArchivo = (nombreArchivo,callback) =>{

    buscarArchivo(nombreArchivo,(error,archivo)=>{
        if(error){
            callback(error)
        }else{
            leerArchivo(nombreArchivo,'utf-8',(error,texto)=>{
                if(error){
                    callback(error)
                }else{
                    const nombreCopia = nombreArchivo + '.copy'
                    escribirArchivo(nombreCopia,texto,(error)=>{
                        if(error){
                            callback(error)
                        }else{
                            callback(null)
                        }
                    })
                }
            })
        }
    })
}
