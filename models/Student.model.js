const { Schema, model } = require("mongoose");

// TODO: Please make sure you edit the User model to whatever makes sense in this case
const studentSchema = new Schema(
  {
    name:{
      type:String,
      required: true,
      trim:true,
    },
    email:{
      type:String,
      required: true,
      trim:true,
      unique:true
    },
    priorXp:{
      type:[String],
    }
    
  },
  {
    // this second object adds extra properties: `createdAt` and `updatedAt`    
    timestamps: true
  }
);

const Student = model("Student", studentSchema);

module.exports = Student;
