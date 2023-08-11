/*

Antes de empezar en Handlebars tenemos que comenzar a planter nuestro proyecto de express. Debemos pensar en la estructura de nuestras carpetas
y en donde colocaremos las plantillas.

¿Será mi aplicacion completamente hecha de plantillas, o generare una plantilla para casos especiales? En este curso trabajaremos sobre un 
proyecto pensado completamente en plantillas.

Agregamos una carpeta view en esta carpeta agregaremos todas las plantillas que querramos utilizar, podedmos entender que aqui colocaremos 
las paginas a utilizar en el proyecto.

Sin embargo, necesitaremos un marco inicial para colocar plantillas, para ello utilizaremos un "layout". Crearemos una carpeta layouts dentro 
de views y dentro colocaremos un "main.handlebars" haciendo referencia a que ese es el marco principal

Luego fuera de layouts , pero dentro de views agregaremos un index (pagina principal)

Tenemos la estructura, las plantillas, todo muy lindo. Sin embargo, no hemos configurado nada en el servidor para que realmente podamos leer
y trabajar con las plantillas. 

Para ello, levantaremos nuestro servidor y configuraremos el motor de plantillas interno esto lo conseguimos instalando con npm

npm install express express-handlebars

*/

import express, { urlencoded } from 'express'

import handlebars from 'express-handlebars'

import __dirname from './utils.js'

import viewsRouter from './routes/view.router.js'

const app = express()

const PORT = 8080

app.use(express.json())

app.use(express.urlencoded({extended:true}))

//iniciamos el motor indicando con app,engine('que motor utilizaremos',el motor instanciado)

app.engine('handlebars',handlebars.engine())

/*

luego con app.set('views',ruta) indicamos en que parte del proyecto estaran las vistas recuerda utilizar rutas absolutas para evitar 
asuntos de ruteo alternativo

*/


app.set('views',__dirname+'/views')

/*
Finalmente, con app.set('view engine','handlebars') indicamos que, el motor que ya inicializamos arriba, es el que queremos utilizar. Es 
importante para saber que cuando digamos al servidor que renderice, sepa que tiene que hacerlo con el motor de handlebars

*/

app.set('view engine','handlebars')

//seteamos de manera estatica la carpeta public

app.use(express.static(__dirname+'/public'))

app.use('/',viewsRouter)

/*

Nota que el router se encuentra en la ruta raiz de manera que, cuando queramos hacer un llamado de un servicio mas lógico, que no requiera
una vista, inciaremos siempre con /api/ ya  que las rutas sin api corresponden a vistas a partir de ahora. 

*/

app.listen(PORT,console.log(`Listening on PORT: ${PORT}`))