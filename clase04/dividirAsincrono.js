const dividir = (dividendo,divisor)=>{
    return new Promise((resolve,reject)=>{
        if(divisor==0){
            reject('No se pueden hacer divisiones entre 0')
        }else{
            resolve(dividendo/divisor)
        }
    })
}

const funcionAsync = async()=>{
    try{
        let resultado = await dividir(10,5)
        console.log(resultado)
    }
    catch(error){
        console.log(error)
    }
}

funcionAsync()