import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'
import Dashboard from './components/Dashboard'

const App = () => {
  return (
    <Routes>
        <Route path='/' element={<Login/>}></Route>
        <Route path='/dashboard' element={<Dashboard/>}></Route>
    </Routes>
  )
}

export default App