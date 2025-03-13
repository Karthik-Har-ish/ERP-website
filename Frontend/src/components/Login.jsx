import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import "./login.css"
import { Link } from "react-router-dom"
import Logo from './Logo'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const passwordVisibletoggle = () => setShowPassword((show) => !show);


    const loginUser = (formData) => {
      const userType = formData.get("usertype");
      const username = formData.get("username");
      const password = formData.get("password");

    }
  return (
    

        <form action={loginUser}>
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