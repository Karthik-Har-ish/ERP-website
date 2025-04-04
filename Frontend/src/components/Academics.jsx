import React,{useEffect, useState} from 'react'
import Navbar from './Navbar'
import Table from './Table'
import "./academics.css"
import axios from 'axios'
import {
    Chart as ChartJS,
    ArcElement,
    Title,
    Tooltip,
    Legend,
  } from 'chart.js'
import { Pie } from 'react-chartjs-2'
import { subjectWiseMarks } from './fakeAttendance'

const testMarks = ["Series 1", "Series 2"]
const subjects = ["Subject 1", "Subject 2","Subject 3", "Subject 4", "Subject 5", "Subject 6"]


const Academics = () => {
    ChartJS.register(
        ArcElement,
        Title,
        Tooltip,
        Legend
    )
    const [user,setUser] = useState({})
    const [subjects,setSubjects] = useState([])

    useEffect(()=>{
            axios.get(import.meta.env.VITE_REACT_APP_API_LINK+'/user/'+localStorage.getItem('userId'))
            .then((res)=>{
              setUser(res)
              setSubjects([res.data.user.subjects.subject1,res.data.user.subjects.subject2,res.data.user.subjects.subject3,res.data.user.subjects.subject4,res.data.user.subjects.subject5,res.data.user.subjects.subject6])
            })
            .catch((err)=>{
              console.log(err)
            })
          },[])
          console.log(user.data)
          console.log(subjects)

  return (
    <div>
        <Navbar></Navbar>
        <h1 className='mt-3 ml-3'>Academics:</h1>
        <div className="marks">
                                        {
                                        [0,1,2,3,4,5].map((subject)=>{
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
                                                                    data:[subjects[subject].marks,(50-subjects[subject].marks)],
                                                                    backgroundColor:[
                                                                        "#90323D",
                                                                        "#D9CAB3"
                                                                    ]
                                                                }
                                                            ]
                                                        }
                                                    }></Pie>
                                                    <h5 className="mt-1 center">{subjects[subject].subjectName}: {subjects[subject].marks}</h5>
                                                </div>
                                            )
                                            })
                                        }
                                    </div>
    </div>
  )
}

export default Academics