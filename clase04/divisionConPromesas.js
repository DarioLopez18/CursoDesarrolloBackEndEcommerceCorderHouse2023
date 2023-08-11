const dividir = (dividendo, divisor) =>{
    return new Promise((resolve,reject)=>{
        if(divisor===0){
            reject('No se puede dividir por cero')
        }else{
            resolve(dividendo/divisor)
        }
    })
}

const result = dividir(10,2)
console.log(result)

const result2 = dividir(10,0)
console.log(result2)