let cadena = '      hola   '

let cadena1 = cadena.trim()

console.log(cadena1)

let mensajes = []

const validarMensaje = (mensaje)=>{
    if(mensaje.trim().length >0 ){
        mensajes.push(mensaje.trim())
    }else{
        console.log('Mensaje vacío, intente escribir algo')
    }
}



let intentoDeMensaje01 = '       '
let intentoDeMensaje02 = 'hola     '

validarMensaje(intentoDeMensaje01)
validarMensaje(intentoDeMensaje02)
console.log(mensajes)