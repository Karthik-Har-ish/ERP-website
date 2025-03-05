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
    class:{type:String, enum:["A","B"]},
    subjects:{
        subject1:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Types.Decimal128,
            marks:mongoose.Types.Decimal128
        },
        subject2:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Types.Decimal128,
            marks:mongoose.Types.Decimal128
        },
        subject3:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Types.Decimal128,
            marks:mongoose.Types.Decimal128
        },
        subject4:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Types.Decimal128,
            marks:mongoose.Types.Decimal128
        },
        subject5:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Types.Decimal128,
            marks:mongoose.Types.Decimal128
        },
        subject6:{
            subjectName:String,
            subjectCode:String,
            attendance:mongoose.Types.Decimal128,
            marks:mongoose.Types.Decimal128
        }
    }

})

module.exports = mongoose.model("User",user)