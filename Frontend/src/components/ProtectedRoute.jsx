import { Login } from '@mui/icons-material';
import React from 'react'
import { Link, redirect, useNavigate } from 'react-router-dom'

const ProtectedRoute = ({Component}) => {
    const navigate = useNavigate()
    const webtoken = sessionStorage.getItem('token');
    
    if(webtoken!=null)
      {
        return(<Component/>)
      }
    else{
      
      return <Link className='center mt-5' to="/">Login page</Link>
    }
}

export default ProtectedRoute