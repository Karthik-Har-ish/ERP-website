import React, { useEffect } from 'react'
import axios from 'axios';
import Navbar from './Navbar'
import "./attendance.css"
import Calendar from 'react-calendar';

    

import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { subjectWiseMarks } from './fakeAttendance'

const testMarks = ["Total Attendance (per subject)"]
const subjects1 = ["Subject 1", "Subject 2","Subject 3"]
const subjects2 = ["Subject 4", "Subject 5", "Subject 6"]



    

const Attendance = () => {

    const [user,setUser] = React.useState({})
    const [subjects,setSubjects] = React.useState([])
    const [subjectss,setSubjectss] = React.useState({})
    
      useEffect(()=>{
        axios.get(import.meta.env.VITE_REACT_APP_API_LINK+'/user/'+localStorage.getItem('userId'))
        .then((res)=>{
          setUser(res)
          setSubjects([res.data.user.subjects.subject1,res.data.user.subjects.subject2,res.data.user.subjects.subject3])
          setSubjectss([res.data.user.subjects.subject4,res.data.user.subjects.subject5,res.data.user.subjects.subject6])
        })
        .catch((err)=>{
          console.log(err)
        })
      },[])
      console.log(user.data)
      console.log(subjects)
      console.log(subjectss)

  ChartJS.register(
    ArcElement,
    Title,
    Tooltip,
    Legend
)
  return (
    <div>
      <Navbar></Navbar>
      <h1 className='mt-3 ml-3'>Attendance:</h1>
        {
            testMarks.map(
                (test)=>{
                    return(
                        <div key={test}>
                            <h4 className="mt-3 ml-5">{test} :</h4>
                            <div className="marks">
                                {
                                [0,1,2].map((subject)=>{
                                    if (subjects.length===0){
                                        return(null)
                                    }
                                    console.log(subjects[subject])
                                    return(
                                        <div className="secondary mark-card">
                                            <Pie options={{}} data={
                                                {
                                                    labels:[],
                                                    datasets:[
                                                        {
                                                            label:subjects[subject].subjectCode,
                                                            data:[subjects[subject].attendance,(100-subjects[subject].attendance)],
                                                            backgroundColor:[
                                                                "#90323D",
                                                                "#D9CAB3"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            }></Pie>
                                            <h5 className="mt-1 center">{subjects[subject].subjectName}: {subjects[subject].attendance}%</h5>
                                        </div>
                                    )
                                    })
                                }
                            </div>
                            <div className="marks">
                            {
                                [0,1,2].map((subject)=>{
                                    if (subjects.length===0){
                                        return(null)
                                    }
                                    console.log(subjects[subject])
                                    return(
                                        <div className="secondary mark-card">
                                            <Pie options={{}} data={
                                                {
                                                    labels:[],
                                                    datasets:[
                                                        {
                                                            label:subjectss[subject].subjectCode,
                                                            data:[subjectss[subject].attendance,(100-subjects[subject].attendance)],
                                                            backgroundColor:[
                                                                "#90323D",
                                                                "#D9CAB3"
                                                            ]
                                                        }
                                                    ]
                                                }
                                            }></Pie>
                                            <h5 className="mt-1 center">{subjectss[subject].subjectName}: {subjects[subject].attendance}%</h5>
                                        </div>
                                    )
                                    })
                                }
                            </div>
                        </div>
                    )
                }
            )
        }

        <div className="calendar">
            <Calendar></Calendar>
        </div>
    </div>
  )
}

export default Attendance