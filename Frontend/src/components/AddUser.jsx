import { useState } from "react"
import Navbar from "./Navbar"
import {TextField, Typography, Button, Grid2} from "@mui/material"
import axios from "axios"

export default function AddUser(){

  const studentTextfields = ["Roll Number","username","fname","lname","class","password","profilePhoto"] 
  const studentTextfieldLabels = ["roll number","username","First Name","Last Name","class","password","profilePhoto"] 

  const teacherTextfields = ["username","fname","lname","class","password","profilePhoto"] 
  const teacherTextfieldLabels = ["roll number","username","First Name","Last Name","class","password","profilePhoto"] 

  const adminTextfields = ["Roll Number","username","fname","lname","class","password","profilePhoto"] 
  const adminTextfieldLabels = ["roll number","username","First Name","Last Name","class","password","profilePhoto"] 

  const [usertype,setUserType]=useState("Student")
  const [user,setUser] = useState({usertype:usertype})

  function handleChange(e){
    setUserType(()=>{
      console.log(document.getElementById.value)
      return (document.getElementById("select").value)
    })
    const key = e.currentTarget.name
    const value = e.currentTarget.value
    

    setUser((user)=>{
      return(
        {
          ...user,
          [key]:value
        }
      )
    })
  }

  function updateUser(){
    // updateUser
  }

  function addUser(){
    if(user.usertype==="Student"){
      console.log(import.meta.env.VITE_REACT_APP_API_LINK+'/add-student')
      axios.post(import.meta.env.VITE_REACT_APP_API_LINK+'/add-student',{...user,name:{fname:user.fname,lname:user.lname}})
      .then((res)=>{
        console.log(res.data)
        alert(res.data.message)
      })
      .catch((err)=>{
        alert(err)
      })
    }
    else if(user.usertype==="Teacher"){
      console.log(user)
      axios.post(import.meta.env.VITE_REACT_APP_API_LINK+'/add-teacher',user)
      .then((res)=>{
        console.log(res.data)
        alert(res.data.message)
      })
      .catch((err)=>{
        alert(err)
      })
    }
    else if(user.usertype==="Admin"){
      console.log(user)
      axios.post(import.meta.env.VITE_REACT_APP_API_LINK+'/add-admin',user)
      .then((res)=>{
        console.log(res.data)
        alert(res.data.message)
      })
      .catch((err)=>{
        alert(err)
      })
    }
  }

  console.log(user)
    return(
        <>
          <Navbar></Navbar>
          <form className="form">
            <Typography variant="h3" sx={{marginLeft:"6vw",marginTop:"40px"}}>Add User:</Typography>

              <div className='inputs'>
              {[0,1,2,3,4,5,6].map((name)=>{
                if(usertype==="Student"){
                  const textfields=studentTextfields;
                  const textfieldLabels=studentTextfieldLabels
                return(
                  <Grid2 key={textfields[name]} sx={{marginLeft:"5vw"}}>
                  <TextField 
                  key={textfields[name]}
                  sx={{marginTop:"20px",backgroundColor:"#D9CAB3",color:"#90323D",width:"80vw",borderRadius:"20px"}} 
                  label={textfieldLabels[name]} 
                  name={textfields[name]}
                  onChange={handleChange}></TextField>
                  </Grid2>
                )
              }
              if(usertype==="Teacher"){
                const textfields=teacherTextfields;
                const textfieldLabels=teacherTextfieldLabels
              return(
                <Grid2 key={textfields[name]} sx={{marginLeft:"5vw"}}>
                <TextField 
                key={textfields[name]}
                sx={{marginTop:"20px",backgroundColor:"#D9CAB3",color:"#90323D",width:"80vw",borderRadius:"20px"}} 
                label={textfieldLabels[name]} 
                name={textfields[name]}
                onChange={handleChange}></TextField>
                </Grid2>
              )
            }
            if(usertype==="Student"){
              const textfields=adminTextfields;
              const textfieldLabels=adminTextfieldLabels
            return(
              <Grid2 key={textfields[name]} sx={{marginLeft:"5vw"}}>
              <TextField 
              key={textfields[name]}
              sx={{marginTop:"20px",backgroundColor:"#D9CAB3",color:"#90323D",width:"80vw",borderRadius:"20px"}} 
              label={textfieldLabels[name]} 
              name={textfields[name]}
              onChange={handleChange}></TextField>
              </Grid2>
            )
          }
              
              })}
              <select name="usertype"  onChange={handleChange} className='secondary-background select user-select' id="select">
                <option value="Student">Student</option>
                <option value="Teacher">Teacher</option>
                <option value="Admin">Admin</option>
              </select>
              <Button className="button-using-mui"
              variant='contained' 
              sx={{
                  marginTop:"20px",
                  marginLeft:'1vw',
                  backgroundColor:"#D9CAB3",
                  color:"#90323D",
                  height:"60px",
                  marginBottom:"20vh",
                }}
              onClick={addUser}
              >Add user</Button>
      
            </div>
        </form>
        </>
    )
}