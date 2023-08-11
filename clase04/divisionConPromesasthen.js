const dividir = (dividendo, divisor) =>{
    return new Promise((resolve,reject)=>{
        if(divisor===0){
            reject('No se puede dividir por cero')
        }else{
            resolve(dividendo/divisor)
        }
    })
}

dividir(6,2)
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(error)
    })

dividir(5,0)
    .then(resultado=>{
        console.log(resultado)
    })
    .catch(error=>{
        console.log(error)
    })    


