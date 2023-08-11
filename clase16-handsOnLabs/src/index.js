import userModel from "./models/users.model.js";
import mongoose from "mongoose";

const URL =
  "mongodb+srv://darioangellopez38:daletomba1234D@primerapracticaintegrad.r7jscez.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, { dbName: "student" }).then(async () => {
  console.log("DB connected");
  const users = await userModel.paginate(
    { gender: "Female" },
    { limit: 20, page: 2 }
  );
  console.log(users);
});
