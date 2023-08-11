import studentModel from "./models/student.model.js";
import courseModel from "./models/course.model.js";
import mongoose from "mongoose";

const URL =
  "mongodb+srv://darioangellopez38:daletomba1234D@primerapracticaintegrad.r7jscez.mongodb.net/?retryWrites=true&w=majority";

mongoose.connect(URL, { dbName: "student" }).then(async () => {
  console.log("DB connected");
  //   await studentModel.create({
  //     name:'Dario',
  //   })
  //   await courseModel.create({
  //     title:'Defensa contra las artes oscuras',
  //     descripcion: 'Saber defenderse de ataques oscuros',
  //     dificulty:5,
  //     topics:['Spectro patronus','Expeliermus'],
  //     professor: 'Arturo Verbel'
  //   })

  // const student = await studentModel.findOne({_id:'64cd34efcac33d36fe2035ce'})

  // student.courses.push({course:"64cd34f0cac33d36fe2035d0"})

  // const result = await studentModel.updateOne({_id:'64cd34efcac33d36fe2035ce'},student)

  // console.log(result)

  const student = await studentModel
    .findOne({
      _id: "64cd34efcac33d36fe2035ce",
    })

  console.log(JSON.stringify(student, null, "\t"));
});
