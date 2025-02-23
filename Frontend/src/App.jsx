import React from 'react'
import { Routes,Route } from 'react-router-dom'
import Login from './components/Login'

const App = () => {
  return (
    <Routes>
        <Route path='/login' element={<Login/>}></Route>
    </Routes>
  )
}

export default App