let variableDePrueba01 = 0

let variableAsignable = variableDePrueba01 || 'Sin valor' //Acá no podemos obtener el 0

console.log(variableAsignable)

let variableConNullish = variableDePrueba01 ?? 'Sin valor' //Ignora falseys

console.log(variableConNullish)