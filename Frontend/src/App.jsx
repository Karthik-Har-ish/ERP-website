import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Academics from './components/Academics'
import Attendance from './components/Attendance'
import Payment from './components/Payment'
import Profile from './components/Profile'
import AddUser from './components/AddUser'
import AllUsers from './components/AllUsers'
import ProtectedRoute from './components/ProtectedRoute'

const App = () => {

  const access = localStorage.getItem('access')

  return (
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<ProtectedRoute Component={Dashboard}/>}></Route>
        <Route path='/academics' element={<ProtectedRoute Component={Academics}/>}></Route>
        <Route path='/payment' element={<ProtectedRoute Component={Payment}/>}></Route>
        <Route path='/attendance' element={<ProtectedRoute Component={Attendance}/>}></Route>
        <Route path='/profile' element={<ProtectedRoute Component={Profile}/>}></Route>
        
        access==="Admin"?<Route path='/all-users' element={<ProtectedRoute Component={AllUsers}/>}></Route>:null
        access==="Admin"?<Route path='/add-user' element={<ProtectedRoute Component={AddUser}/>}></Route>:null
    </Routes>
  )
}

export default App