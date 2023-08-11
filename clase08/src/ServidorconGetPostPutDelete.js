/*

Dada la frase: “Frase inicial”, realizar una aplicación que contenga un servidor en express, el cual cuente con los siguientes métodos:

✓ GET '/api/frase': devuelve un objeto que como campo ‘frase’ contenga la frase completa
✓ GET '/api/palabras/:pos': devuelve un objeto que como campo ‘buscada’ contenga la palabra hallada en la frase en la posición dada 
(considerar que la primera palabra es la #1).
✓ POST '/api/palabras': recibe un objeto con una palabra bajo el campo ‘palabra’ y la agrega al ﬁnal de la frase. Devuelve un objeto que 
como campo ‘agregada’ contenga la palabra agregada, y en el campo ‘pos’ la posición en que se agregó dicha palabra.✓
✓ PUT '/api/palabras/:pos': recibe un objeto con una palabra bajo el campo ‘palabra’ y reemplaza en la frase aquella hallada en la posición dada. 
Devuelve un objeto que como campo ‘actualizada’ contenga la nueva palabra, y en el campo ‘anterior’ la anterior.
✓ DELETE '/api/palabras/:pos': elimina una palabra en la frase, según la posición dada(considerar que la primera palabra tiene posición #1).
✓Utilizar POSTMAN para probar funcionalidad


 */

import express from 'express'

const app = express()

app.use(express.json())

app.use(express.urlencoded({extended:true}))

let frase = 'Frase inicial'

app.get('/api/frase',(req,res)=>res.json({frase}))

app.get('/api/palabras/:pos',(req,res)=>{

    const pos = parseInt(req.params.pos) - 1

    const listaPalabras = frase.split(' ')

    res.json({buscada: listaPalabras[pos]})

})

app.post('/api/palabras',(req,res)=>{

    const {palabras} = req.body

    frase += ` ${palabras}`
    
    const position = frase.split(' ').length

    res.json({

        agregada: palabras,
        posicion: position

    })

})

app.listen(8080)