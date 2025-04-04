import React, { useEffect } from 'react'
import Navbar from "./Navbar"
import { Line, Bar } from 'react-chartjs-2'
import { attendance } from "./fakeAttendance.js"
import Card from '@mui/material/Card';
import Grid2 from '@mui/material/CardContent';
import axios from 'axios'


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

  const [user,setUser] = React.useState({})

  useEffect(()=>{
    axios.get(import.meta.env.VITE_REACT_APP_API_LINK+'/user/'+localStorage.getItem('userId'))
    .then((res)=>{
      setUser(res)
    })
    .catch((err)=>{
      console.log(err)
    })
  },[])
  console.log(user.data)

  return (
    <div>
        <Navbar></Navbar>
        <h1 className='ml-3 mt-3'>Hi {user.data===undefined?"":user.data.user.name.fname}!</h1>
        <br />
        <br />
        <div className="grid">
          <DashboardContent user={user}/>
        </div>
        
    </div>
  )
}


function DashboardContent({user}){
  if(localStorage.access==="Student"){
    const attendanceOptions = { 
      scales: {
        y : {
          suggestedMin: 0,
          suggestedMax: 100,
        }
      }
     }
    const marksOptions = { 
      scales: {
        y : {
          suggestedMin: 0,
          suggestedMax: 50,
        }
      }
     }
  
  const subjects = user.data!=undefined?user.data.user.subjects:null;
  
  const dataForMarks = user.data===undefined?{
    labels:[],
  datasets:[
      {
          label:"Marks",
          data:[],
          backgroundColor:["#90323D"],
          borderWidth:1
      }
  ]
  }:
  {
    labels:[
      subjects.subject1.subjectName,
      subjects.subject2.subjectName,
      subjects.subject3.subjectName,
      subjects.subject4.subjectName,
      subjects.subject5.subjectName,
      subjects.subject6.subjectName
    ],
  datasets:[
      {
          label:"Marks",
          data:[
            subjects.subject1.marks,
            subjects.subject2.marks,
            subjects.subject3.marks,
            subjects.subject4.marks,
            subjects.subject5.marks,
            subjects.subject6.marks
          ],
          backgroundColor:["#90323D"],
          borderWidth:1
      }
  ]
  };
  
    const marks = {
      labels:[
          "subject1",
          "subject2",
          "subject3",
          "subject4",
          "subject5",
          "subject6",
      ],
      datasets:[
          {
              label:"Marks",
              data:[90,70,85,87,78,94],
              backgroundColor:["#90323D"],
              borderWidth:1
          }
      ]
  }
  return(
          <>
          <div className="inner-grid">
            <h3>Attendance:</h3>
            <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}>
              <Line options={attendanceOptions} data={attendance}></Line>
            </Card>
          </div>
          <div className="inner-grid">
            <h3>Marks from last series test:</h3>
            <Card sx={{ width:"40vw", height:"50vh",backgroundColor:"#D9CAB3" }}>
              <Bar options={marksOptions} data={dataForMarks}></Bar>
            </Card>
          </div>
          </>
  )
}

}

export default Dashboard


