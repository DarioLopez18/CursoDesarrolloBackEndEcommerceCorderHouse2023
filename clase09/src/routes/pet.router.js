import { Router } from "express"

const router = Router()

const pets = []

router.get('/',(req,res)=>res.status(201).json({pets}))

router.post('/',(req,res)=>{

    const pet = req.body

    pets.push(pet)
    
    res.status(201).send({status: 'succes'})

})

export default router