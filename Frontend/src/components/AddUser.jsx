import { useState, useEffect } from "react"
import Navbar from "./Navbar"
import { TextField, Typography, Button, Grid2, MenuItem, Select, FormControl, InputLabel } from "@mui/material"
import axios from "axios"
import { useLocation } from "react-router-dom"

export default function AddUser() {
const location = useLocation()
const isEditMode = !!location.state?.userToEdit
const [userType, setUserType] = useState(location.state?.userType || "Student")
const [user, setUser] = useState({ 
  userType: location.state?.userType || "Student",
  name: { fname: '', lname: '' } 
})


useEffect(() => {
  if (isEditMode && location.state.userToEdit) {
    const userData = location.state.userToEdit
    setUser({
      ...userData,
      userType: location.state.userType,
      fname: userData.name?.fname || '',
      lname: userData.name?.lname || ''
    })
    setUserType(location.state.userType)
  }
}, [location.state, isEditMode])

  function handleUserTypeChange(e) {
    const newUserType = e.target.value
    setUserType(newUserType)
    setUser(prev => ({ 
      ...prev, 
      userType: newUserType,
      class: undefined,
      subject: undefined
    }))
  
  function handleChange(e) {
    const { name, value } = e.target
  
    if (name === 'fname' || name === 'lname') {
      setUser(prev => ({
        ...prev,
        name: {
          ...prev.name,
          [name]: value
        }
      }))
    }
    else {
      setUser(prev => ({
        ...prev,
        [name]: value
      }))
    }
  }

  function addUser() {
    const endpoint = {
      Student: isEditMode ? '/update-student' : '/add-student',
      Teacher: isEditMode ? '/update-teacher' : '/add-teacher',
      Admin: isEditMode ? '/update-admin' : '/add-admin'
    }[userType]

    const userData = {
      ...user,
      name: {
        fname: user.name.fname,
        lname: user.name.lname
      }
    }
    if (isEditMode) userData._id = user._id

    axios.post(import.meta.env.VITE_REACT_APP_API_LINK + endpoint, userData)
      .then((res) => {
        alert(res.data.message)
        if (!isEditMode) {
          setUser({ 
            userType: userType,
            name: { fname: '', lname: '' } 
          })
        }
      })
      .catch((err) => {
        alert(err.response?.data?.message || err.message)
      })
  }

  const commonFields = [
    { name: "username", label: "Username" },
    { name: "email", label: "Email" },
    { name: "password", label: "Password", type: "password" },
    { name: "profilePhoto", label: "Profile Photo URL" }
  ]

  const nameFields = [
    { name: "fname", label: "First Name" },
    { name: "lname", label: "Last Name" }
  ]

  const studentFields = [
    { name: "class", label: "Class", select: true, options: ["A", "B", "C", "D"] }
  ]

  const teacherFields = [
    { name: "subject", label: "Subject" }
  ]

  const renderTextField = (field) => {
    if (field.select) {
      return (
        <FormControl fullWidth sx={{ marginTop: "20px", backgroundColor: "#D9CAB3", borderRadius: "4px" }}>
          <InputLabel>{field.label}</InputLabel>
          <Select
            name={field.name}
            value={user[field.name] || ''}
            onChange={handleChange}
            label={field.label}
          >
            {field.options.map(option => (
              <MenuItem key={option} value={option}>{option}</MenuItem>
            ))}
          </Select>
        </FormControl>
      )
    }
    const value = field.name in user ? 
      user[field.name] : 
      (user.name && user.name[field.name]) || ''

    return (
      <TextField
        fullWidth
        sx={{ marginTop: "20px", backgroundColor: "#D9CAB3" }}
        label={field.label}
        name={field.name}
        type={field.type || "text"}
        value={value}
        onChange={handleChange}
        variant="outlined"
      />
    )
  }

  return (
    <>
      <Navbar />
      <form className="form" style={{ padding: '20px' }}>
      <Typography variant="h3" sx={{ marginBottom: "20px" }}>
        {isEditMode ? 'Edit User' : 'Add User'}
      </Typography>

        <FormControl fullWidth sx={{ marginBottom: "20px", backgroundColor: "#D9CAB3", borderRadius: "4px" }}>
          <InputLabel>User Type</InputLabel>
          <Select
            value={userType}
            onChange={handleUserTypeChange}
            label="User Type"
          >
            <MenuItem value="Student">Student</MenuItem>
            <MenuItem value="Teacher">Teacher</MenuItem>
            <MenuItem value="Admin">Admin</MenuItem>
          </Select>
        </FormControl>

        <Grid2 container spacing={2}>
          {/* Name fields */}
          {nameFields.map((field) => (
            <Grid2 item xs={12} sm={6} key={field.name}>
              {renderTextField(field)}
            </Grid2>
          ))}

          {/* Common fields */}
          {commonFields.map((field) => (
            <Grid2 item xs={12} sm={6} key={field.name}>
              {renderTextField(field)}
            </Grid2>
          ))}

          {/* Type-specific fields */}
          {userType === "Student" && studentFields.map((field) => (
            <Grid2 item xs={12} sm={6} key={field.name}>
              {renderTextField(field)}
            </Grid2>
          ))}

          {userType === "Teacher" && teacherFields.map((field) => (
            <Grid2 item xs={12} sm={6} key={field.name}>
              {renderTextField(field)}
            </Grid2>
          ))}
        </Grid2>

        <Button
          variant='contained'
          sx={{
            marginTop: "20px",
            backgroundColor: "#D9CAB3",
            color: "#90323D",
            height: "60px",
            '&:hover': {
              backgroundColor: "#c5b69e"
            }
          }}
          onClick={addUser}
        >
          Add User
        </Button>
      </form>
    </>
  )
}