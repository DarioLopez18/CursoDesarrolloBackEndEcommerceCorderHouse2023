/*
✓ Dado un arreglo de objetos de tipo usuario, realizar un servidor en express que permita obtener dichos usuarios.
✓ La ruta raíz ‘/’ debe devolver todos los usuarios
✓ la ruta /:userId debe devolver sólo al usuario con dicho Id.
*/

import express from 'express'

const app = express()

const users = [
    {id:1,name:'Dario'},
    {id:2,name:'Dario'},
    {id:3,name:'Dario'}
]

app.get('/',(req,res)=>{
    res.send(users)
})

app.get('/user/:id',(req,res)=>{
    let id = parseInt(req.params.id)
    const user = users.find(element=>element.id === id)
    res.send(user)
})

app.listen(8082,()=>console.log('Listening in the port 8082'))