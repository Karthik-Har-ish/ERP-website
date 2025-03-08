const mongoose = require("mongoose")
require("dotenv").config()

const teacher = mongoose.Schema({
    username:String,
    name:{
        fname:String,
        lname:String
    },
    profilePhoto:String,
    email:String,
    password:String,
    classes:[],
    subject:String

})

module.exports = mongoose.model("Teacher",teacher)