import express from 'express'

const app = express()

app.use(express.urlencoded({extended:true}))

app.get('/ejemploQuerys',(req,res)=>{
    
    let consultas = req.query

    res.send(consultas)

})

app.listen(8080)