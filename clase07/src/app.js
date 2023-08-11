/*
✓ Estructurar un servidor basado en express, el cual escuche peticiones en el puerto 8080
✓ Realizar una función para el método GET en la ruta ‘/saludo’, el cual responderá con “¡Hola a todos, pero ahora desde express!”
✓ Ejecutar con nodemon y probar en el navegador el endpoint generado
*/

import express from 'express'

const app = express()

app.get('/saludo',(req,res)=>{
    res.send('Hola a todos ahora desde express')
})

app.listen(10001,()=>'Servidor levantado en el puerto 10001')