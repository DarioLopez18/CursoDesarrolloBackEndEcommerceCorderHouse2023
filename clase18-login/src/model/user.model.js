import mongoose, { Mongoose } from "mongoose";

const userModel = mongoose.model(
  "users",
  new mongoose.Schema({
    first_name: {
      type: String,
      required: true,
    },
    last_name: {
      type: String,
      required: true,
    },
    email: {
      type: String,
      required: true,
    },
    age: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  })
);

export default userModel;
