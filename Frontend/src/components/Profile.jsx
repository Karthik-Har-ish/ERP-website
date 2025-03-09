import React from 'react'
import Navbar from './Navbar'

const Profile = () => {
  return (
    <div>
        <Navbar></Navbar>
        <div className="content mt-3 ml-5">
          <div className="peron-details">
            <h1>Karthik H</h1>
            <h5>Class</h5>
            <h5>email</h5>
          </div>
          <div className="user-photo">
            <img src="" alt="image not found" />
          </div>
        </div>
    </div>
  )
}

export default Profile