const express = require("express");
require("dotenv").config();
require("./connection");
const studentModel = require("./models/student.js");
const teacherModel = require("./models/teacher.js");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");

// middleware

app.use(cors());
app.use(express.json());


// api
app.post("/add-user",async (req,res)=>{
    try {
        await studentModel(req.body).save();
        res.send("Added user successfully!");
        console.log("Added user successfully!");
    } catch (error) {
        console.log(err);
    }
})


app.post("/login",async (req,res)=>{
    try {
        const user = await studentModel.findOne(
            {   
                username:req.body.username
            });
        if(!user){
            return res.json({message:"User not found!"});
        }
        if(req.body.password!=user.password){
            return res.send({message:"You've given the wrong password to this account!"});
        }
        return res.send({message:`Hello ${user.nickname}!`,user});
    } catch (error) {
        console.log(error);
    }
})

// TODO : REMOVE THIS !!!!


// PRODUCT DELETION
app.delete("/user-delete/:id", async (req,res)=>{
    try {
        await studentModel.findByIdAndDelete(req.params.id)
        res.send("user deleted!")
    } catch (error) {
        console.log(error)
    }
})

app.get("/all-users",async (req,res)=>{
   try{
    console.log("Here!")
    res.send({users:await studentModel.find()})
   }
   catch(err){
    res.json({error:err})
   }
})

app.get("/all-students",async (req,res)=>{
   try{
    console.log("Here!")
    try{
        console.log("Here!")
        res.send({users:await studentModel.find({})})
       }
       catch(err){
        res.json({error:err})
       }
   }
   catch(err){
    console.json({error:error})
   }
})

app.put("/user/:id", async (req,res)=>{
    try{
        await studentModel.findByIdAndUpdate(req.params.id,req.body)
        res.json({message:"User Updated!"})
        console.log({message:"User updated!"})
    }
    catch(err){
        console.log(err)
        res.json({message:"User updation failed!"})
    }
})

// attendance checking across subjects

app.get("/attendance/:id",async (req,res) => {
    try{
        const subjectsData = (await studentModel.findById(req.params.id)).subjects
            
        res.json({
            subject1:{
                subjectCode:subjectsData.subject1.subjectCode,
                attendance:subjectsData.subject1.attendance
            },
            subject2:{
                subjectCode:subjectsData.subject2.subjectCode,
                attendance:subjectsData.subject2.attendance
            },
            subject3:{
                subjectCode:subjectsData.subject3.subjectCode,
                attendance:subjectsData.subject3.attendance
            },
            subject4:{
                subjectCode:subjectsData.subject4.subjectCode,
                attendance:subjectsData.subject4.attendance
            },
            subject5:{
                subjectCode:subjectsData.subject5.subjectCode,
                attendance:subjectsData.subject5.attendance
            },
            subject6:{
                subjectCode:subjectsData.subject6.subjectCode,
                attendance:subjectsData.subject6.attendance
            }
        })
    }
    catch(err){
        res.json({
            message: "error while retrieving data!"
        });
        console.log(err)
    }
})

app.get("/marks/:id",async (req,res) => {
    try{
        const subjectsData = (await studentModel.findById(req.params.id)).subjects
            
        res.json({
            subject1:{
                subjectCode:subjectsData.subject1.subjectCode,
                marks:subjectsData.subject1.marks
            },
            subject2:{
                subjectCode:subjectsData.subject2.subjectCode,
                marks:subjectsData.subject2.marks
            },
            subject3:{
                subjectCode:subjectsData.subject3.subjectCode,
                marks:subjectsData.subject3.marks
            },
            subject4:{
                subjectCode:subjectsData.subject4.subjectCode,
                marks:subjectsData.subject4.marks
            },
            subject5:{
                subjectCode:subjectsData.subject5.subjectCode,
                marks:subjectsData.subject5.marks
            },
            subject6:{
                subjectCode:subjectsData.subject6.subjectCode,
                marks:subjectsData.subject6.marks
            }
        })
    }
    catch(err){
        res.json({
            message: "error while retrieving data!"
        });
        console.log(err)
    }
})


app.listen(PORT,()=>{
    console.log(`Server is up and running at ${PORT}`);
})