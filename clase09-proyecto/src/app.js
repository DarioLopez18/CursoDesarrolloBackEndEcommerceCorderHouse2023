
import express from 'express'

import petsRouter from './routes/pet.router.js'

const app = express()

app.use(express.json()) 

app.use(express.urlencoded({extended:true}))

app.use(express.static( 'public'))

app.use('/api/pets',petsRouter)

app.listen(8080)
