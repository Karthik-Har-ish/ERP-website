const mongoose = require("mongoose")
require("dotenv").config()

mongoose.connect(process.env.DATABASE_URL)
        .then(()=>{
            console.log("Database Connected")
        })
        .catch((e)=>{
            console.log(e)
        })