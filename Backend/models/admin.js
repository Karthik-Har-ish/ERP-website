const mongoose = require("mongoose")
require("dotenv").config()

const admin = mongoose.Schema({
    username:String,
    name:{
        fname:String,
        lname:String
    },
    profilePhoto:String,
    email:String,
    password:String,
    userType:String,
})

module.exports = mongoose.model("Admin",admin)