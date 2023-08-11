import {Router} from 'express'

const router =  Router()

const users = []

//Middleware a nivel de router

router.use(function(req,res,next){  
     console.log('Time: ',Date.now())
     next()
})

router.get('/',(req,res)=>res.status(201).json({users}))

router.post('/',(req,res)=>{

     const user = req.body
     
     users.push(user)

     res.status(201).send({status: 'Sucess'})

})

export default router