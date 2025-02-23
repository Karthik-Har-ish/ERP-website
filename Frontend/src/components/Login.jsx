import { Visibility, VisibilityOff } from '@mui/icons-material';
import { Button, FormControl, IconButton, InputAdornment, InputLabel, OutlinedInput, TextField } from '@mui/material'
import React from 'react'
import "./login.css"
import { Link } from "react-router-dom"

const Login = () => {
    const [showPassword, setShowPassword] = React.useState(false);

    const handleClickShowPassword = () => setShowPassword((show) => !show);

  return (
    <div className='login-root'>
        
        <input 
        type="text"
        id='roll-number'
        aria-label='roll-number'
        
        />  
        <input
        id="outlined-adornment-password"
        type={showPassword ? 'text' : 'password'}
        label="Password"
        aria-label="Password"
        placeholder='Password'
        />
        

        <Button
            variant='outlined'
            sx={{color:"black",backgroundColor:"red"}}
        >
            Login
        </Button>
            <br /> <br />
        <Link>Forgot password?</Link>
        </div>
  )
}

export default Login