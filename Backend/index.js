const express = require("express")
require("dotenv").config()
require("./connection")
const userModel = require("./models/user.js") 
const app = express();
const PORT = 5000;
const cors = require("cors")

// middleware

app.use(cors())
app.use(express.json())


// api
app.post("/add-user",async (req,res)=>{
    try {
        await userModel(req.body).save();
        res.send("Added user successfully!")
        console.log("Added user successfully!")
    } catch (error) {
        console.log(err)
    }
})


app.post("/login",async (req,res)=>{
    try {
        const user = await userModel.findOne(
            {   
                username:req.body.username
            })
        if(!user){
            return res.json({message:"User not found!"})
        }
        if(req.body.password!=user.password){
            return res.send({message:"You've given the wrong password to this account!"})
        }
        return res.send({message:`Hello ${user.nickname}!`,user})
    } catch (error) {
        console.log(error)
    }
})

// TODO : REMOVE THIS !!!!


// PRODUCT DELETION
app.delete("/user-delete/:id", async (req,res)=>{
    try {
        await userModel.findByIdAndDelete(req.params.id)
        res.send("user deleted!")
    } catch (error) {
        console.log(error)
    }
})

app.get("/all-users",async (req,res)=>{
   try{
    console.log("Here!")
    res.send({products:await productModel.find()})
   }
   catch(err){
    console.json({error:error})
   }
})
app.get("/all-students",async (req,res)=>{
   try{
    console.log("Here!")
    // res.send({products:await productModel.find()})
    // TODO : MODIFY THIS TO ONLY PRINT OUT STUDENTS
   }
   catch(err){
    console.json({error:error})
   }
})

app.put("/user/:id", async (req,res)=>{
    try{
        await productModel.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"User Updated!"})
        console.log({message:"User updated!"})
    }
    catch(err){
        console.log(err)
        res.json({message:"User updation failed!"})
    }
})

app.listen(PORT,()=>{
    console.log(`Server is up and running at ${PORT}`);
})