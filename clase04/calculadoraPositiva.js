 /*
Se crearán un conjunto de funciones gestionadas por promesas y un entorno ASINCRONO donde podremos ponerlas a prueba
->Definir la funcion suma:
    ->Debe devolver una promesa que resulva siempre que ninguno de los dos sumandos sea 0
    ->En caso de que algun sumando sea 0, rechazar la promesa indicando 'Operacion innecesaria'
->Definir la funcion resta:
    ->Debe devolver una promesa que se resuelva siempre que ninguno de los dos valores sea 0
    ->En caso de que el minuendo o sustraendo sea 0, rechazar la promesa indicando 'Operacion innecesaria'
    ->En caso de que el valor de la resta sea menor que 0, rechazar la promesa indicando 'La calculadora solo puede devolver resultados positivos'
->Definir una función multiplicación:
    ->Debe devolver una promesa que se resuelva siempre que ninguno de los dos factores sea negativo
    ->Si el producto es negativo, rechazar la oferta indicando 'La calculadora solo puede devolver valores positivos' 
->Definir la misma funcion division utilizada en esta clase
->Definir una funcion asíncrona 'Calculos' y realizar pruebas utilizando async/await try/catch
*/

const suma = (num1,num2)=>{
    return new Promise((resolve,rejected)=>{
        if(num1 > 0 && num2 >0) resolve(num1+num2)
        else if(num1<0 || num2<0) rejected('La calculadora solo trabaja con numeros positivos')
        else if(num1 ==0 || num2 == 0) rejected('Operacion innecesaria')
    })
}

const resta = (num1,num2)=>{
    return new Promise((resolve,rejected)=>{
        if(num1 >0 && num2 >0){
            let result = num1 - num2
            if(result>=0) resolve(result)
            else rejected('La calculadora no puede devolver numeros negativos')
        }
        else if(num1 < 0 || num2 < 0 )rejected('La calculadora solo trabaja con numeros positivos')
        else if(num1==0 || num2 == 0) rejected('Operacion innecesaria')
        
    })
}

const multiplicacion = (num1,num2)=>{
    return new Promise((resolve,rejected)=>{
        if(num1 > 0 && num2 >0){
            resolve(num1*num2)
        }else{
            rejected('La calculadora solo trabaja con numeros positivos')
        }
    })
}

const division = (num1,num2)=>{
    return new Promise((resolve,rejected)=>{
        if(num1 > 0 && num2 > 0){
            resolve(num1/num2)
        }else if(num1<0 || num2<0){
            rejected('La calculadora solo trabaja con numeros positivos')
        }else if(num2 == 0){
            rejected('No se puede dividir por 0')
        }

    })
}

const funcion = async()=>{
    try {
        await suma(12, -1)
            .then(result => console.log("Sumar: ", result))
            .catch(function(error) {
                console.log(error)
            })

        await resta(12, 34)
            .then(result => console.log("Restar: ", result))
            .catch(e => console.error(e))

        await multiplicacion(12, 34)
            .then(result => console.log("Multiplicar: ", result))
            .catch(e => console.error(e))

        await division(12, 34)
            .then(result => console.log("Dividir: ", result))
            .catch(e => console.error(e))
    } catch (error) {
        console.log("ERROR", error)
    }
}

funcion()
