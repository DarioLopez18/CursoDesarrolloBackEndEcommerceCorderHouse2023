const sumar = (num1,num2)=>{
    return new Promise((resolve,rejected)=>{
        if(num1>0 && num2>0){
            resolve(num1+num2)
        }else{
            rejected('Solo recibimos numeros mayores que cero')
        }
    })
}

sumar(1,2)
    .then(resultado=>{console.log(resultado)})
    .catch(error=>console.log(error))
    
sumar(-1,2)
    .then(resultado=>{console.log(resultado)})
    .catch(error=>console.log(error))