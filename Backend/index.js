const express = require("express");
require("dotenv").config();
require("./connection");
const studentModel = require("./models/student.js");
const teacherModel = require("./models/teacher.js");
const adminModel = require("./models/admin.js");
const app = express();
const PORT = process.env.PORT;
const cors = require("cors");
const teacher = require("./models/teacher.js");

// middleware

app.use(cors());
app.use(express.json());


// api
app.post("/add-student",async (req,res)=>{
    try {
        await studentModel(req.body).save();
        res.send("Added student successfully!");
        console.log("Added student successfully!");
    } catch (error) {
        console.log(err);
    }
})


app.post("/add-teacher",async (req,res)=>{
    try {
        await teacherModel(req.body).save();
        res.send("Added teacher successfully!");
        console.log("Added teacher successfully!");
    } catch (error) {
        console.log(err);
    }
})
app.post("/add-admin",async (req,res)=>{
    try {
        await adminModel(req.body).save();
        res.send("Added admin successfully!");
        console.log("Added admin successfully!");
    } catch (error) {
        console.log(err);
    }
})


app.post("/login",async (req,res)=>{
    try {
        const userType = req.body.userType;
        let user;
        if(userType == "Student"){
            user = await studentModel.findOne({username:req.body.username}) 
        }
        else if(userType == "Teacher"){
            user = await teacherModel.findOne({username:req.body.username}) 
        } 
        else if(userType == "Admin"){
            user = await adminModel.findOne({username:req.body.username}) 
        }
        if(!user){
            return res.json({message:"User not found!"});
        }
        if(req.body.password!=user.password){
            console.log(user)
            return res.send({message:"You've given the wrong password to this account!"});
        }
        return res.send({message:`Hello ${user.name.fname}!`,user});
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

app.get("/all-students",async (req,res)=>{
   try{
    console.log("Here!")
    res.send({users:await studentModel.find()})
   }
   catch(err){
    res.json({error:err})
   }
})

app.get("/all-teachers",async (req,res)=>{
   try{
    console.log("Here!")
    res.send({users:await teacherModel.find()})
   }
   catch(err){
    res.json({error:err})
   }
})
app.get("/all-admins",async (req,res)=>{
   try{
    console.log("Here!")
    res.send({users:await adminModel.find()})
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