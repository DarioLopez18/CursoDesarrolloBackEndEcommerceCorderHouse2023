import { Router } from "express"

import {uploader} from "../util.js"

const router = Router()

const pets = []

router.get('/',(req,res)=>res.status(201).json({pets}))

router.post('/',uploader.single('file'),(req,res)=>{

    if(!req.file) return res.status(404).send({status: "error",error: 'not found'})

    console.log(req.file)

    const pet = req.body

    pets.push(pet)
    
    res.status(201).send({status: 'succes',file:'uploaded'})

})

export default router