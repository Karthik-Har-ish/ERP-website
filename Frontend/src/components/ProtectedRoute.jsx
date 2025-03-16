import React from 'react'
import { useNavigate } from 'react-router-dom'

const ProtectedRoute = ({Component}) => {
    const navigate = useNavigate()
    const webtoken = localStorage.getItem('userId');
    
    return (
    webtoken===null?
    <a className='center mt-4' href={import.meta.env.VITE_REACT_APP_FRONTEND_LINK}>Go to Login page</a>
    
    :<Component/>
    
  )
}

export default ProtectedRoute