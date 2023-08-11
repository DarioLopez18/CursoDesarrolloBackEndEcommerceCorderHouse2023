const temporizador = (num1,num2,callback) =>{
    setTimeout(()=>{
        callback(num1,num2)
    },5000)
}

console.log('Iniciando Suma')
const operacion = (num1,num2)=> console.log(num1+num2)
temporizador(1,2,operacion)
console.log('Finalizando Suma')

