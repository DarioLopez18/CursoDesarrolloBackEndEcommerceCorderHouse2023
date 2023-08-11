import express from 'express';
import userModel from './models/user.model.js';
import mongoose from 'mongoose'

const app = express();

app.use(express.json());

const PORT = 8080;

//show all users

app.get('/',async(req,res)=>{
    try{
        const users = await userModel.find();
        res.status(201).send({result:'succes',payload:users});
    }catch(e){
        console.log(e);
        res.send({result:'error',e});
    }
})

//insertar users

app.post('/',async(req,res)=>{
    try{
        const result = await userModel.create(req.body);
        res.send({status:"sucess",payload: result});
    }catch(e){
        console.log(e);
        res.send({result:'error',e});
    }
})

//Modificar usuarios

app.put('/:uid',async(req,res)=>{
    try{
        let {uid} = req.params;
        let userToReplace = req.body;
        if(!userToReplace.first_name || !userToReplace.last_name || !userToReplace.email)
            return res.status(200).send({status:"succes",payload:'Incomplete Values'})
        let result = await userModel.updateOne({_id:uid},userToReplace)
        res.send({status:"sucess",payload:result})
    }catch(e){
        console.log(e)
    }
})

//eliminar usuarios

app.delete('/uid:',async(req,res)=>{
    let {uid} = req.params
    let result = await userModel.deleteOne({_id:uid})
    res.send({status:'sucess',payload:result})
})

const URL = "mongodb+srv://darioangellopez38:daletomba1234D@clusterproyectocoderhou.kg9ksmw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL,{dbName : 'db_prueba'})
    .then(()=>{
        console.log('DBConnected');
        app.listen(PORT,console.log(`Server listen in PORT: ${PORT}`));
    })
    .catch(e=>{
        console.log("Can't connect to DB");
    })
