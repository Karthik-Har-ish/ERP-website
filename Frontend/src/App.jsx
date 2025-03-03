import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'
import Academics from './components/Academics'
import Attendance from './components/Attendance'
import Payment from './components/Payment'
import Profile from './components/Profile'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
        <Route path='/academics' element={<Academics/>}></Route>
        <Route path='/attendance' element={<Attendance/>}></Route>
        <Route path='/payment' element={<Payment/>}></Route>
        <Route path='/profile' element={<Profile/>}></Route>
    </Routes>
  )
}

export default App