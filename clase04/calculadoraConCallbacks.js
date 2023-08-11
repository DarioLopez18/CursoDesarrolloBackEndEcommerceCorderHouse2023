/*
Se crearan cuatro funciones: sumar, restar, dividir, multiplicar

Ademas se proporcionará otra función operación, que recibira como callback cualquiera de estas tres funciones para ejecutarla
*/


const sumar = (num1,num2)=>num1+num2
const restar = (num1,num2)=>num1-num2
const multiplicar = (num1,num2)=>num1*num2
const dividir = (num1,num2)=>{
    if(num2 != 0){
        return num1/num2
    }else{
        return -1
    }
}

const operacion = (num1,num2,callbacks)=>callbacks(num1,num2)

console.log(operacion(1,2,sumar))
console.log(operacion(2,1,restar))
console.log(operacion(1,2,multiplicar))
console.log(operacion(10,2,dividir))