import express from 'express'

const app = express()

app.get('/user/name/:nombre',(req,res)=>{
    const nombre = req.params.nombre
    console.log(nombre)
    res.send(`Bienvenido: ${nombre}`)
})

app.get('/user/name/:nombre/:apellido',(req,res)=>{
    const fullname = `${req.params.nombre} ${req.params.apellido}`

    console.log(fullname)
    res.send(`Bienvenido ${fullname}`)
})

app.listen(8099,()=>console.log('Listening in port 8099'))