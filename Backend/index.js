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
const jwt = require('jsonwebtoken')

// middleware

app.use(cors());
app.use(express.json());


// api
app.post("/add-student",async (req,res)=>{
    try {
        await studentModel(req.body).save();
        res.json({message:"Added student successfully!"});
        console.log("Added student successfully!");
    } catch (error) {
        console.log(err);
    }
})


app.post("/add-teacher",async (req,res)=>{
    try {
        await teacherModel(req.body).save();
        res.json({message:"Added teacher successfully!"});
        console.log("Added teacher successfully!");
    } catch (error) {
        console.log(err);
    }
})
app.post("/add-admin",async (req,res)=>{
    try {
        await adminModel(req.body).save();
        res.json({message:"Added admin successfully!"});
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
        const token = jwt.sign({ userId: user.id }, "secret-key", { expiresIn: "1h" });
        return res.json({ message: "Login successful", token, user });
    } catch (error) {
        console.log(error);
    }
})

// TODO : REMOVE THIS !!!!



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

app.get("/user/:id",async (req,res)=>{
   try{
    console.log("Here!")
    let user = await studentModel.findById(req.params.id)
    console.log(user)
    if(user===null){
        user = await teacherModel.findById(req.params.id)
        console.log(user)

    }
    if(user===null){
        user = await adminModel.findById(req.params.id)
        console.log(user)
    }
    res.json({user,message:'user found!'})
}
   catch(err){
    res.json({error:err})
   }
})

app.get("/all-users",async (req,res)=>{
   try{
    try{
        const students = await studentModel.find({})
        const teachers= await teacherModel.find({})
        const admins= await adminModel.find({})
        res.send({students,teachers,admins})
       }
       catch(err){
        res.json({error:err})
        console.log(err)
       }
   }
   catch(err){
    console.json({error:error})
   }
})

app.post("/update-student", async (req, res) => {
    try {
        const { _id, ...updateData } = req.body;
        await studentModel.findByIdAndUpdate(_id, updateData);
        res.json({message:"Updated student successfully!"});
        console.log("Updated student successfully!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating student");
    }
});

// Update Teacher
app.post("/update-teacher", async (req, res) => {
    try {
        const { _id, ...updateData } = req.body;
        await teacherModel.findByIdAndUpdate(_id, updateData);
        res.json({message:"Updated teacher successfully!"});
        console.log("Updated teacher successfully!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating teacher");
    }
});

// Update Admin
app.post("/update-admin", async (req, res) => {
    try {
        const { _id, ...updateData } = req.body;
        await adminModel.findByIdAndUpdate(_id, updateData);
        res.json({message:"Updated admin successfully!"});
        console.log("Updated admin successfully!");
    } catch (error) {
        console.log(error);
        res.status(500).send("Error updating admin");
    }
});

app.delete("/user/:id", async (req,res)=>{
    try{
        
        const usertype = req.body.type;
        console.log("delete following user:"+req.params.id+" ");
        console.log(req.body);
        console.log(usertype);
        const id = req.params.id
        if(usertype==="Student"){
            console.log("delete following student:"+id)
            await studentModel.findByIdAndDelete(id)
            res.json({message:"User deleted!"})
            console.log({message:"User deleted!"})
        }
        else if(usertype==="Teacher"){
            await teacherModel.findByIdAndDelete(req.params.id)
            res.json({message:"User deleted!"})
            console.log({message:"User deleted!"})
        }
        else if(usertype==="Admin"){
            await adminModel.findByIdAndDelete(req.params.id)
            res.json({message:"User deleted!"})
            console.log({message:"User deleted!"})
        }
        
        
    }
    catch(err){
        console.log(err)
        res.json({message:"User deletion failed!"})
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