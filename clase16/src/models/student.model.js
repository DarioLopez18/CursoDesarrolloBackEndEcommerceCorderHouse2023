import mongoose from "mongoose";

const studenSchema = mongoose.Schema({
  name: String,
  courses: {
    type: [
      {
        course: {
          type: mongoose.Schema.Types.ObjectId,
          ref: "courses",
        },
      },
    ],
    default: [],
  },
});

studenSchema.pre("findOne", function () {
  this.populate("courses.course");
});

const studentModel = mongoose.model("students", studenSchema);

export default studentModel;
