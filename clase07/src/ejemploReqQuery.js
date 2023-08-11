/*
->Dado un arreglo de objetos de tipo usuario, vamos a hacer un filtro por genero
->La ruta raiz '/' debe devolver todos los usuarios pero ahora colocaremos un query param con ? indicando que queremos un genero especifico. En caso de
enviarlo sin query, debe devolver a todos los usuarios
*/

import express from 'express'

const app = express()

app.use(express.urlencoded({extended:true}))

const usuarios = [

    {id:1,name:'Dalia',first_name:'Gomez',gender:'F'},
    {id:2,name:'Myrna',first_name:'Flores',gender:'F'},
    {id:3,name:'Armando',first_name:'Mendoza',gender:'M'},
    {id:4,name:'Dalia',first_name:'Gomez',gender:'F'},
    {id:5,name:'Herminio',first_name:'Fuentes',gender:'M'},
    {id:6,name:'Juan',first_name:'Zepeda',gender:'M'}

]

app.get('/',(req,res)=>{

    let gender = req.query.gender

    if( !gender || ( gender !== 'M' && gender !== 'F' )) return res.send( usuarios )

    let usuarioFiltrados = usuarios.filter(usuario=>usuario.gender === gender)

    res.send(usuarioFiltrados)

})

app.listen(8080)