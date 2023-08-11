import mongoose from 'mongoose';

const userCollection = 'users'; //nombre de la collecion

/*Esquema de la base de datos*/

const userSchema = new mongoose.Schema({
    first_name: String,
    last_name:String,
    email:{
        type: String,
        unique: true
    }
});

mongoose.set('strictQuery',false); 

const userModel = mongoose.model(userCollection,userSchema);

export default userModel;
