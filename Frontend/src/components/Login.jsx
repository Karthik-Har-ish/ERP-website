import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import "./login.css"
import { Link } from "react-router-dom"
import Logo from './Logo'

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className='center login-root'>
        <Logo></Logo>


        <input 
        type="text"
        className='input secondary-background'
        id='roll-number'
        aria-label='roll-number'
        placeholder='Roll Number'
        
        />  
        <input
        id="outlined-adornment-password"
        className='input secondary-background'
        type={showPassword ? 'text' : 'password'}
        label="Password"
        aria-label="Password"
        placeholder='Password'
        />
        

        <button
            variant='outlined'
            className='secondary-background'
            >
            Login
        </button>
            <br /> <br />
        <Link>Forgot password?</Link>
        </div>
  )
}

export default Login