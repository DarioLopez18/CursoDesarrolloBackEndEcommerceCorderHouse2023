import express from "express";
import session from "express-session";
import MongoStore from "connect-mongo";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import sessionRouter from "./routes/session.router.js";
import viewsRouter from "./routes/views.router.js";

const app = express();
const PORT = 8080;
const dbName = "bd_clase_login";
const URL =
  "mongodb+srv://darioangellopez38:daletomba1234D@primerapracticaintegrad.r7jscez.mongodb.net/?retryWrites=true&w=majority";

//configuracion handlebars
app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

//configuracion mongo session
app.use(
  session({
    store: MongoStore.create({
      mongoUrl: URL,
      dbName: dbName,
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
app.use("/", viewsRouter);
app.use("/api/session", sessionRouter);
mongoose
  .connect(URL)
  .then(() => app.listen(PORT, console.log(`Server listen on PORT: ${PORT}`)));
