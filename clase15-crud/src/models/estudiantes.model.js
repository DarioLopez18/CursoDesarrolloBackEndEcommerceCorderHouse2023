import mongoose from 'mongoose';

const studentColecction = 'students';

const studentSchema = new mongoose.Schema({
    first_name:{
        type: String,
        required:true
    },
    last_name:{
        type: String,
        required:true
    },
    age:{
        type: Number,
        required:true
    },
    DNI: {
        type:String,
        unique:true,
        required:true
    },
    course:{
        type: String,
        required:true
    },
    note:{
        type: Number,
        required:true
    }
}); 

mongoose.set('strictQuery',false);

const studentModel = mongoose.model(studentColecction,studentSchema);

export default studentModel;