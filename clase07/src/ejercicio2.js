/*
Crear un proyecto basado en express js, el cual cuente con un servidor que escuche en el puerto 8080. Además de conﬁgurar
los siguientes endpoints:
✓ El endpoint del método GET a la ruta ‘/bienvenida’ deberá devolver un html con letras en color azul, en una string,
dando la bienvenida.
✓El endpoint del método GET a la ruta ‘/usuario’ deberá devolver un objeto con los datos de un usuario falso: {nombre, apellido,edad, correo}
*/

import express from 'express'

const app = express()

app.get('/bienvenida',(req,res)=>{
    const str = 'Hola, bienvenido'
    res.send(str.fontcolor('blue'))
})

app.get('/usuario',(req,res)=>{
    const obj = {name:'Dario',first_name:'Lopez',edad:21,correo:'darioangellopez38@gmail.com'}
    res.send(obj)
})

app.listen(10002,()=>console.log('Server listening PORT 10002'))