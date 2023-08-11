const miFuncionCallbakc = (arreglo,callbacks)=>{
    let nuevoArreglo = []
    for(let i = 0;i<arreglo.length;i++){
        nuevoArreglo[i] = callbacks(arreglo[i])
    }
    return nuevoArreglo
}

const result = miFuncionCallbakc([1,2,3],x=>x+2)

console.log(result)

Array.prototype.miPropiaFuncionMap = function(callbacks){
    let nuevoArreglo = []
    for(let i = 0;i<this.length;i++){
        nuevoArreglo[i] = callbacks(this[i])
    }
    return nuevoArreglo
}

let arreglo12 = [1,2,3,4]

let nuevoArreglo = arreglo12.miPropiaFuncionMap(x=>x+2)

console.log(nuevoArreglo)