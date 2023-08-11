/*
->Dado nu arreglo de objetos de tipo usuario, realizar un servidor de express que permitea obtener dichos usuarios
->La ruta raíz '/' debe devolver todos los usuarios
->La ruta '/:userID/ debe devolver solo al usuario con dicho ID
*/

import express from 'express'

const app = express()

const usuarios = [

    {id:1,nombre: 'Mauricio',apellido:'Espinoza',edad:25},
    {id:2,nombre: 'Natalia',apellido:'Cardozo',edad:23},
    {id:3,nombre: 'Roberto',apellido:'Gomez',edad:25}

]

app.get('/',(req,res)=>{

    res.send({usuarios})

})

app.get('/:userID',(req,res)=>{
    
    const userID = parseInt(req.params.userID)

    const usuario = usuarios.find(element=>element.id === userID)

    if(usuario) return res.send({usuario})
    
    res.send('Usuario no encontrado')

})

app.listen(8080)