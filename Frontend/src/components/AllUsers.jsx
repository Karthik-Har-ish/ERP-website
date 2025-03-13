import React from 'react'
import Navbar from "./Navbar"
import Card from '@mui/material/Card';


const AllUsers = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className='mt-3 ml-3'>
            <h1>Students:</h1>
            <div className="grid">
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            </div>
        </div>
        <div className='mt-3 ml-3'>
            <h1>Teachers:</h1>
            <div className="grid">
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            </div>
        </div>
        <div className='mt-3 ml-3'>
            <h1>Admins:</h1>
            <div className="grid">
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            
                <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}></Card>
            </div>
        </div>
    </div>
  )
}

export default AllUsers