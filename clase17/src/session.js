import express from "express";
import session from "express-session";

const app = express();
const PORT = 8080;

app.use(
  session({
    secret: "paraFirmarElIdEnElBrowser",
    resave: true, //Para mantener la session activa
    saveUninitialized: true, //Para guardar cualquier cosa en la session
  })
);

app.get("/", (req, res) => res.send("ok"));
app.get("/session", (req, res) => {
  console.log(req.session);
  if (req.session.counter) {
    req.session.counter++;
    return res.send(`Se ha visitado el sitio ${req.session.counter} veces`);
  }
  req.session.counter = 1;
  res.send("Bienvenido");
});

app.get("/logout", (req, res) => {
  req.session.destroy((err) => {
    if (err) return res.send("Logout error");
    return res.send("Logout OK");
  });
});

const DB = [
  { name: "Dario Lopez", username: "Dario", password: "secret", rol: "admin" },
];

app.get("/login", (req, res) => {
  const { username, password } = req.query;
  const user = DB.find(
    (user) => user.username === username && user.password === password
  );
  if (!user) return res.send("Invalid Credentials");
  req.session.user = user;
  console.log((req.session.user = user));
  res.send("Login Succes");
});

function authentication(req,res,next) {
    if(req.session?.user) return next()
    return res.status(401).send('error de autenticacion')
}
app.get("/private",authentication, (req, res) => {
  res.send(
    "Esta pagina solo la puede ver el que está logueado " +
      JSON.stringify(req.session.user)
  );
});

//El contador se guarda en la ram, pero en el lado del cliente el id si se guarda en el disco duro.

app.listen(PORT, console.log(`Server listen on PORT ${PORT}`));
