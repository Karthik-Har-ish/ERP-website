import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import "./login.css"
import axios from 'axios';
import { Link } from "react-router-dom"
import Logo from './Logo';

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const passwordVisibletoggle = () => setShowPassword((show) => !show);
    
    console.log(import.meta.env.VITE_REACT_APP_MESSAGE)
    const loginUser = (formData) => {
      const userType = formData.get("usertype");
      const username = formData.get("username");
      const password = formData.get("password");
      
      axios.post(import.meta.env.VITE_REACT_APP_API_LINK+"/login" ,
        {
          userType:userType,
          username:username,
          password:password
        })
        .then((res)=>{
          alert(res.data.message)
        })
        .catch((err)=>{
          console.log(err)
        })
    }

    const loginSubmit = (formData) => {

      const username = formData.get("username");
      const userType = formData.get("usertype");
      const password = formData.get("password");
      axios.post(import.meta.env.VITE_REACT_APP_API_LINK+'/login', {username:username, password:password,userType:userType})
      .then((res) => {
          console.log("Response: ", res);
          if(res.data.message === 'Login successful') {
              const token=res.data.token;
              const userId=res.data.user._id;
              console.log(res.data)
              console.log("Login successful, token saved: ", token)
              sessionStorage.setItem("token",token)
              localStorage.setItem("userId",userId)
              localStorage.setItem("access",userType)
              
              window.location.href = '/dashboard';
          } else {
              console.log(res.data.message)
              alert(res.data.message)
          }
      })
      .catch((err) => {
          console.log(err);
      });
  }
  return (
    

        <form action={loginSubmit}>
          <div className='center login-root'>

            <h1>COLLEGE ERP:</h1>

            <input 
            type="text"
            className='input secondary-background'
            id='username'
            name='username'
            aria-label='username'
            placeholder='Username'
            />

            <input
            id="outlined-adornment-password"
            className='input secondary-background'
            type={showPassword ? 'text' : 'password'}
            label="Password"
            aria-label="Password"
            placeholder='Password'
            name='password'
            />
            
            <select name="usertype" className='secondary-background select' id="cars">
              <option value="Student">Student</option>
              <option value="Teacher">Teacher</option>
              <option value="Admin">Admin</option>
            </select>

            <button
                variant='outlined'
                className='secondary-background'
                >
                Login
            </button>
            <br /> <br />

            <Link>Forgot password?</Link>
          </div>
        </form>
        
  )
}

export default Login