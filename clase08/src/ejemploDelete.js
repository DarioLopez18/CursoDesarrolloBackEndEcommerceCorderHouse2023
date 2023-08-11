import express from 'express'

const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))

let users = []

app.delete('/api/user/:name',(req,res)=>{
    
    let name = req.params.name

    let currentLenght = users.length

    users = user.filter(user=>user.first_name!=name)

    if(user.length===currentLenght){
        return res.status(404).send({status:'error',error:'User not found'})
    }
    res.send({status:'success',message:'User delete'})
})

app.listen(8080)
