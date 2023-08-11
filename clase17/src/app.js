import express from "express";
import cookieParser, { signedCookie } from "cookie-parser";

const app = express();
const PORT = 8080;
//Conectamos las cookies con nuestro servidor
app.use(cookieParser('hacemosLasCookiesCifradas'));

/*
Al conectar cookieParser con express, podremos gestionar dentro de nuestras peticiones, elementos correspondientes
a cookies.
 */

app.get("/", (req, res) => res.send("My cookies"));
//Seteamos una cookie, la cookie es accesible desde el servidor pero se persiste en el navegador.
app.get("/set", (req, res) =>
  res
    .cookie("cookieDario", "Thanos siempre tuvo razon")
    .cookie("cookieForever", "cookies-forever")
    .cookie("cookieSigned", "elvalordelacookie",{signed: true})
    .send({ message: "cookie seteada" })
);
//obtener cookies
app.get("/get", (req, res) => {
  const cookie = req.cookies;
  const cookieSigned = req.signedCookies;
  console.log(cookieSigned)
  console.log(cookie);
  res.send(`Se ha leido la cookie.`);
});
//Eliminar cookie
app.get("/delete", (req, res) => {
    res.clearCookie('cookieForever').send('cookieBorrada')
});
//La informacion de la cookie se puede cifrar


//Desde el servidor es imposible setear un local storage

app.listen(PORT, console.log(`Server listen on PORT: ${PORT}`));
