/*

¿Cómo lo hacemos? Se crearán dos routers: users y pets. 

    ->El router de users debe tener la ruta principal /api/users
    ->El router de pets debe tener la ruta principal /api/pets
    ->Ambos deben tener, de manera interna, un array para almacenarlos.
    ->Ambos deben contar con un método get en su ruta raíz para poder obtener el arreglo.
    ->Ambos deben contar con un método POST en su ruta raíz para poder agregar un usuario o mascota según sea el router.
    ->Conectar los routers al archivo app.js para tener listo el apuntador al router. 
    ->Probar funcionalidad con Postman.

    ->Se agregará una carpeta pública, la cual contendrá dentro una carpeta “img”, donde guardaremos una imagen, desde el navegador
    se deberá acceder a este archivo a partir del servicio de archivos estáticos.
    ->Crear una página index.html que contenga un mensaje de bienvenida y acceder desde la ruta raíz a éste.

*/

import express from 'express'

import usersRouter from './routes/user.router.js'

import petsRouter from './routes/pet.router.js'

import multer from 'multer'

// import __dirname from  './utils.js'

const app = express()

/*
Middleware a nivel de aplicacion, este ejemplo muestra una funcion sin ninguna via de acceso de montaje, la función se ejecuta cada vez
que la aplicacion recibe una solicitud
*/

const storage = multer.diskStorage({
    destination:function(req,file,cb){
        cb(null,'public')
    },
    filename: function(req,file,cb){
        cb(null,file.originalname)
    }
})

const uploader = multer({storage})

app.post('/',uploader.single('file'),(req,res)=>{

    if(!req.file) return res.status(404).send({status: error,error: 'not found'})

    console.log(req.file)

    res.send('File Uploaded!')

})

function middleware(req,res,next){

    console.log(('Time: '),Date.now())

    next()

}

/*
Middleware de errores, estas funciones se definen de la misma forma que otras funciones middleware, excepto que llevan cuatro argumentos 
en lugar de tres, especificamente con la firma (err,req,res,next)
*/


app.use(express.json()) 

app.use(express.urlencoded({extended:true}))

/*

La unica funcion de middleware incorporado en express es express.static. Esta funcion es responsable del servicio de archivos estaticos.

express.static(root,[options])
    ->El argumento root especifica el directorio raiz desde el que se realiza el servicio de activos estaticos 
    ->El objeto options opcional puede tener las siguientes propiedades: dotfiles, etag, extensions, index, lastModified,maxAge, redirect,
    setHeaders
*/

/*

Middleware de terceros: Podemos instalar y utilizar middlewares de terceros para añadir funcionalidad a nuestra aplicacion. El uso puede ser a 
nivel de aplicacion o a nivel de router. Por ejemplo, instalamos y usamos la funcion de middleware de analisis de cookies cookies-parser

npm install cookie-parser

var express = require('express')
var  app = express()
var cookieParser = require('cookie-parser')

app.use(cookieParser())

*/

app.use('/static',express.static( 'public'))

app.use('/api/users',usersRouter) //middleware a nivel de endpoint

app.use('/api/pets',petsRouter)

app.listen(8080)
