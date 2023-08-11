let contador = ()=>{
    let counter = 0
    console.log('Realizando operacion: ')
    let timer = setInterval(()=>{
        console.log(counter++)
        if(counter>5){
            clearInterval(timer)
        }
    })
}

console.log('Iniciando tarea')
contador()
console.log('Tarea finalizada')