const mongoose = require("mongoose")
require("dotenv").config()

const student = mongoose.Schema({
    username:String,
    name:{
        fname:String,
        lname:String
    },
    profilePhoto:String,
    email:String,
    password:String,
    class:{type:String, enum:["A","B","C","D"]},
    subjects:{
        subject1:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Schema.Types.Decimal128,
            marks:mongoose.Schema.Types.Decimal128
        },
        subject2:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Schema.Types.Decimal128,
            marks:mongoose.Schema.Types.Decimal128
        },
        subject3:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Schema.Types.Decimal128,
            marks:mongoose.Schema.Types.Decimal128
        },
        subject4:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Schema.Types.Decimal128,
            marks:mongoose.Schema.Types.Decimal128
        },
        subject5:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Schema.Types.Decimal128,
            marks:mongoose.Schema.Types.Decimal128
        },
        subject6:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Schema.Types.Decimal128,
            marks:mongoose.Schema.Types.Decimal128
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