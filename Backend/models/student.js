const mongoose = require("mongoose")
require("dotenv").config()

const student = mongoose.Schema({
    username:{type:String},
    name:{
        fname:{type:String},
        lname:{type:String}
    },
    userType:String,
    profilePhoto:{type:String},
    email:{type:String},
    password:{type:String},
    class:{type:String, enum:["A","B","C","D"]},
    subjects:{
        subject1:{
            subjectName:String,
            subjectCode:String,
            attendance:Number,
            marks:Number
        },
        subject2:{
            subjectName:String,
            subjectCode:String,
            attendance:Number,
            marks:Number
        },
        subject3:{
            subjectName:String,
            subjectCode:String,
            attendance:Number,
            marks:Number
        },
        subject4:{
            subjectName:String,
            subjectCode:String,
            attendance:Number,
            marks:Number
        },
        subject5:{
            subjectName:String,
            subjectCode:String,
            attendance:Number,
            marks:Number
        },
        subject6:{
            subjectName:String,
            subjectCode:String,
            attendance:Number,
            marks:Number
        }
    },
    teachers:{
        // holds the teacher ids for each subject
        subject1:String,
        subject2:String,
        subject3:String,
        subject4:String,
        subject5:String,
        subject6:String,
    }
})



module.exports = mongoose.model("Student",student)