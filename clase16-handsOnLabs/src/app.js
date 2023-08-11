import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import __dirname from "./utils.js";
import viewsRouter from "./routes/views.routes.js";

const app = express();
const PORT = 8080;

app.engine("handlebars", handlebars.engine());
app.set("views", __dirname + "/views");
app.set("view engine", "handlebars");

app.use("/", viewsRouter);

const URL =
  "mongodb+srv://darioangellopez38:daletomba1234D@primerapracticaintegrad.r7jscez.mongodb.net/?retryWrites=true&w=majority";

mongoose
  .connect(URL, { dbName: "student" })
  .then(() => console.log("DB Connected Succes"))
  .then(() =>
    app.listen(PORT, () => console.log(`Server listen on PORT: ${PORT}`))
  );
