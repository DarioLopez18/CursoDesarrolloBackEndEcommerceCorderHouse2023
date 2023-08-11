import express from 'express'

const router = express.Router()

let food = [

    {name:'Hamburguesa',price:'100'},
    {name:'Banana',price:'20'},
    {name:'Soda',price:'40'},
    {name:'Ensalada',price:'120'},
    {name:'Pizza',price:'150'},

]

let users = [
    {name:'Dario',last_name:'Lopez',age:21,email:'darioangellopez38@gmail.com',cel:2616150281,role:'admin'},
    {name:'Ana',last_name:'Navarta',age:16,email:'anabanana@gmail.com',cel:2614858495,role:'admin'},
    {name:'Lio',last_name:'Navarta',age:1,email:'liobanana@gmail.com',cel:261,role:'admin'},
    {name:'gico',last_name:'Navarta',age:7,email:'gicobanana@gmail.com',cel:261,role:'user'},
    {name:'Rosi',last_name:'Navarta',age:51,email:'anabanana@gmail.com',cel:2616557364,role:'user'}
]

router.get('/',(req,res)=>{

    let number = Math.floor(Math.random()*5)

    res.render('index',
    {
        user: users[number],
        style: 'index.css',
        isAdmin: users[number].role ==="admin",
        food
    }
    )

})

router.post('/',(req,res)=>{
    
    const user = req.body

    console.log(user)

    users.push(user)

    res.render('register',
    {
        status:'Sucess',
        message:'user create'
    }
    )

})

export default router