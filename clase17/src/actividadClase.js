import express from 'express';
import session from 'express-session';

const PORT = 8080;
const app = express()

app.use(session({
    secret: "credentialSignedSessionId",
    resave: true,
    saveUninitialized: true
}))

app.get('/root',(req,res)=>{
    const name = req.query
    if(req.session?.counter){
        req.session.counter++
        return res.send(`${req.session.name.name} has visitado el sitio: ${req.session.counter} veces.`)
    }
    req.session.counter = 1
    const nameUser = req.session.name = name;
    res.send(`Bienvenido al sitio: ${nameUser.name}`)
})

app.listen(PORT, console.log(`Server listen on PORT ${PORT}`));
