import React from 'react'
import Navbar from "./Navbar"
import { Line, Bar } from 'react-chartjs-2'
import { attendance,marks } from "./fakeAttendance.js"
import Card from '@mui/material/Card';
import Grid2 from '@mui/material/CardContent';


import {
  Chart as ChartJS,
  CategoryScale,
  LineElement,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
  PointElement,
  scales
} from 'chart.js'

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
)

const Dashboard = () => {

  const options = { 
    scales: {
      y : {
        suggestedMin: 0,
        suggestedMax: 100,
      }
    }
   }
  return (
    <div>
        <Navbar></Navbar>
        <h1 className='ml-3 mt-3'>Hi Karthik!</h1>
        <br />
        <br />
        <div className="grid">
          <div className="inner-grid">
            <h3>Attendance:</h3>
            <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}>
              <Line options={options} data={attendance}></Line>
            </Card>
          </div>
          <div className="inner-grid">
            <h3>Marks from last series test:</h3>
            <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}>
              <Bar options={options} data={marks}></Bar>
            </Card>
          </div>
        </div>
        
    </div>
  )
}

export default Dashboard


