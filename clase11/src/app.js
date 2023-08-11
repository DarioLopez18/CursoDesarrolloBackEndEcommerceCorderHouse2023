import express from 'express'
import __dirname from './utils.js'
import handlebars from 'express-handlebars'
import viewsRouter from './routes/views.router.js'
import {Server} from 'socket.io' //Este Server se creara a partir del server HTTP

const app = express()

const PORT = 8080

const httpServer = app.listen(PORT,console.log(`Listening on PORT ${PORT}`)) //Solo el server de http

const socketServer = new Server(httpServer) //Creamos un servidor para sockets viviedno dentro de nuestro servidor

//configuramos las plantillas

app.engine('handlebars',handlebars.engine()) 

app.set('views',__dirname+'/views')

app.set('view engine','handlebars')

app.use(express.static(__dirname+'/public'))

app.use('/',viewsRouter)

socketServer.on('connection',socket=>{
    
    console.log('Nuevo cliente conectado.')

    socket.on('message',data=>{

        console.log(data)
        
        socket.emit('evento_para_socket_individual','recibido desde el back')
    
        socket.broadcast.emit('evento_para_todos_menos_el_socket_actual',`Este evento lo veran todos los sockets,
        menos el socket actual desde el que se envio el mensaje.`)
    
        socketServer.emit('evento_para_todos',data)
    
    })



})