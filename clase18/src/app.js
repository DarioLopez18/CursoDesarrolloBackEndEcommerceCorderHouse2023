import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";

const app = express();
const PORT = 8080;
const URL =
  "mongodb+srv://darioangellopez38:daletomba1234D@primerapracticaintegrad.r7jscez.mongodb.net/?retryWrites=true&w=majority";

app.use(
  session({
    store: MongoStore.create({
      mongoUrl: URL,
      dbName: "session",
      mongoOptions: {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      },
      ttl: 100,
    }),
    secret: "secret",
    resave: true,
    saveUninitialized: true,
  })
);
app.get("/", (req, res) => res.send("Ok"));
app.get("/login", (req, res) => {
  if (req.session.user) return res.send("Login ok");
  const { username } = req.query;
  if (!username) return res.send("Need an username");
  req.session.user = username;
  res.send("Loggin succes");
});
function authentication(req, res, next) {
  return req.session?.user ? next() : res.status(401).send("Auth error");
}
app.get("/private", authentication, (req, res) =>
  res.send(`Private page ${req.session.user}`)
);
app.listen(PORT, console.log(`Server listen on PORT: ${PORT}`));
