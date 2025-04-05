import React from 'react'
import Navbar from "./Navbar"
import Card from '@mui/material/Card';
import axios from 'axios'
import { Button, CardActions, CardMedia, Grid2 } from '@mui/material';
import { useNavigate } from 'react-router-dom';


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
                <UserCard users={users.students} type='Student'/>
            </div>
        </div>
        <div className='mt-3 ml-3'>
            <h1>Teachers:</h1>
            <div className="grid">
                <UserCard users={users.teachers} type='Teacher'/>
            </div>
        </div>
        <div className='mt-3 ml-3'>
            <h1>Admins:</h1>
            <div className="grid">
                <UserCard users={users.admins} type='Admin'/>
            </div>
        </div>
    </div>
  )
}

const UserCard = ({users,type}) => {

    const navigate = useNavigate()

    function deleteUser(userId,type){
        console.log(type)
        axios.delete(import.meta.env.VITE_REACT_APP_API_LINK+'/user/'+userId,
            {data:{
                type:type
            }}
            
        )
        .then((res)=>{
            console.log("user:",res.data)
        })
        .catch((err)=>{console.log(err)})
        window.location.reload()    
    }


    function updateUser(user){
        navigate("/add-user", { state: { userToEdit: user, userType:type } })
    }
    const userEls = users.map((user)=>{
        return (<>
        <Grid2 key={user._id}>
        <Card className='user' sx={{ width:"40vw", height:"50vh", marginLeft:"2vw", marginTop:"2vh",backgroundColor:"#D9CAB3" }}>

        <CardMedia
          sx={{ height: "60%", width:"30%", borderRadius:"12px",marginTop:"2vh" }}
          component="img"
          image={user.profilePhoto}
          title={user.username}
          aria-label={user.username}
        />
            <div className='center'>
            {user.name!=undefined?<h1>{user.name.fname+" "+user.name.lname}</h1>:null}
            {user.class===undefined?null:<h2>Class: {user.class}</h2>}
            {user.subject===undefined?null:<h2>Subject: {user.subject}</h2>}
            </div>
            <CardActions>
                <Button size="small" sx={{color:"#90323D"}} onClick={()=>{console.log(type);updateUser(user, type)}}>Update</Button>
                <Button size="small" sx={{color:"#90323D"}} onClick={()=>{console.log(user._id);deleteUser(user._id,type)}}>Delete</Button>
            </CardActions>
        </Card>
        </Grid2>
        </>
            )
        }
    )
    return(
        <>
        <Grid2>
            {userEls}
        </Grid2>
        </>
    )
}

export default AllUsers