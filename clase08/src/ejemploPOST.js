import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let users = []

app.post('/api/user',(req,res)=>{
    
    let user = req.body

    if(!user.first_name || !user.last_name){
        return res.status(400).send({status:'error',error:'Incomplete values'})
    }
    users.push(user)
    res.send({status:'success',message:'User created'})
})

app.listen(8080)

