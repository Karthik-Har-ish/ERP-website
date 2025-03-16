import React from 'react'
import Navbar from "./Navbar"
import Card from '@mui/material/Card';
import axios from 'axios'
import { Button, CardActions, CardContent, CardMedia, Grid2, Typography } from '@mui/material';


const AllUsers = () => {
    let [users,setUsers] = React.useState({
        students:[],
        teachers:[],
        admins:[]
    })

    React.useEffect(
        ()=>{
            axios.get(import.meta.env.VITE_REACT_APP_API_LINK+'/all-users')
    .then((res)=>{
        setUsers(res.data)
    })
    .catch((err)=>{
        console.log(err)
    })
    console.log(users)
        },
        []
    )
    console.log(users)

  return (
    <div>
        <Navbar></Navbar>
        <div className='mt-3 ml-3'>
            <h1>Students:</h1>
            <div className="grid">
                <UserCard users={users.students}/>
            </div>
        </div>
        <div className='mt-3 ml-3'>
            <h1>Teachers:</h1>
            <div className="grid">
                <UserCard users={users.teachers}/>
            </div>
        </div>
        <div className='mt-3 ml-3'>
            <h1>Admins:</h1>
            <div className="grid">
                <UserCard users={users.admins}/>
            </div>
        </div>
    </div>
  )
}


const Users = ({users}) => {

    
    const studentEls = users.map((user)=>{
        return (<>
        <Card className='user' sx={{ width:"40vw", height:"50vh", marginLeft:"2vw",backgroundColor:"#D9CAB3" }}>

            <img className='profile-photo' src={user.profilePhoto} alt="profile photo" />
            <h1>{user.name.fname+" "+user.name.lname}</h1>
        </Card>
        </>)
    })
    
  return (
    <div className='grid'>
        {studentEls}
    </div>
  )
}


const UserCard = ({users}) => {
    const userEls = users.map((user)=>{
        console.log(user.class)
        return (<>
        <Grid2>
        <Card className='user' sx={{ width:"40vw", height:"50vh", marginLeft:"2vw", marginTop:"2vh",backgroundColor:"#D9CAB3" }}>

        <CardMedia
          sx={{ height: "60%", width:"30%", borderRadius:"12px",marginTop:"2vh" }}
          component="img"
          image={user.profilePhoto}
          title={user.username}
          aria-label={user.username}
        />
            <h1>{user.name.fname+" "+user.name.lname}</h1>
            {user.class===undefined?null:<h2>Class: {user.class}</h2>}
            {user.subject===undefined?null:<h2>Subject: {user.subject}</h2>}
            
            <CardActions>
                <Button size="small" sx={{color:"#90323D"}}>Update</Button>
                <Button size="small" sx={{color:"#90323D"}}>Delete</Button>
            </CardActions>
        </Card>
        </Grid2>
        </>)})
    return(
        <>
        <Grid2>
            {userEls}
        </Grid2>
        </>
    )
}

export default AllUsers