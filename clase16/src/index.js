import userModel from "./models/user.model.js";
import mongoose from "mongoose";

const URL =
  "mongodb+srv://darioangellopez38:daletomba1234D@primerapracticaintegrad.r7jscez.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, { dbName: "student" }).then(async () => {
  console.log("DB connected");
  const response = await userModel
    .find({ first_name: "Joella" })
    .explain("executionState");
  console.log(response);
});
