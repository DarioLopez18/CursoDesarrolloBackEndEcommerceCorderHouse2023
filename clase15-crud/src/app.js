import express from 'express'
import studentsModel from './models/estudiantes.model.js'
import mongoose from 'mongoose'

const app = express();

app.use(express.json());

const PORT = 8080;

app.get('/',async(req,res)=>{
    try{
        const student = await studentsModel.find()
        res.send({result:"succes",payload:student})
    }catch(e){
        console.log(e);
        res.send({status:"error",e})
    }
})

app.post('/',async(req,res)=>{
    try{
        const result = await studentsModel.create(req.body);
        res.send({status:"sucess",payload: result});
    }catch(e){
        console.log(e)
        res.send({result:'error',e});
    }
})

app.put('/:uid',async(req,res)=>{
    try{
        let {uid} = req.params;
        let userToReplace = req.body;
        if(!userToReplace.first_name || !userToReplace.last_name || !userToReplace.age || !userToReplace.DNI || !userToReplace.course || !userToReplace.note)
            return res.status(200).send({status:"succes",payload:'Incomplete Values'})
        let result = await studentsModel.updateOne({_id:uid},userToReplace)
        res.send({status:"sucess",payload:result})
    }catch(e){
        console.log(e)
    }
})

app.delete('/uid:',async(req,res)=>{
    let {uid} = req.params
    let result = await studentsModel.deleteOne({_id:uid})
    res.send({status:'sucess',payload:result})
})


const URL = "mongodb+srv://darioangellopez38:daletomba1234D@clusterproyectocoderhou.kg9ksmw.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL,{dbName : 'db_student'})
    .then(()=>{
        console.log('DBConnected');
        app.listen(PORT,console.log(`Server listen in PORT: ${PORT}`));
    })
    .catch(e=>{
        console.log("Can't connect to DB");
    })
