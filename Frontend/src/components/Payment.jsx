import React from 'react'
import Navbar from "./Navbar"
import Table from "./Table"
import { Button } from '@mui/material'

const Payment = () => {
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='mt-3 ml-3'>Due Payments: </h1>
      <div className='center mt-3'>
      </div>
      <h1 className='center mt-2'>Total : ₹35060</h1>
      <div className='center'>
        <Button 
        variant='contained'
        sx={{backgroundColor:"#D9CAB3",
            color:"#90323D",placeSelf:"center"}}>Pay</Button>

      </div>
      
    </div>
  )
}

export default Payment