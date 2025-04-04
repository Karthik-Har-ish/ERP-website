import React from 'react'
import Navbar from './Navbar'
import "../index.css"
import axios from "axios";

const Profile = () => {

  const [user,setUser]=React.useState({})

  React.useEffect(()=>{
      axios.get(import.meta.env.VITE_REACT_APP_API_LINK+'/user/'+localStorage.getItem('userId'))
      .then((res)=>{
        setUser(res.data.user)
      })
      .catch((err)=>{
        console.log(err)
      })
    },[])


    console.log(user)
    

  return (
    <div>
        <Navbar></Navbar>
        <div className="content mt-3 ml-5">
          <div className="peron-details">
            <h1>{user.name==undefined?"":user.name.fname+" "+user.name.lname} </h1>
            <h5>CLASS: {user.name==undefined?"":user.class}</h5>
            <h5>{user.name==undefined?"":user.email}</h5>
          </div>
          <div className="user-photo">
            <img src={user.profilePhoto} alt="image not found" />
          </div>
        </div>
    </div>
  )
}

export default Profile