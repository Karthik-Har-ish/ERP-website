import React from 'react'
import Navbar from './Navbar'
import Table from './Table'
import "./academics.css"
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
  return (
    <div>
        <Navbar></Navbar>
        <h1 className='mt-3 ml-3'>Academics:</h1>
        {
            testMarks.map(
                (test)=>{
                    return(
                        <div key={test}>
                            <h4 className="mt-3 ml-5">{test} :</h4>
                            <div className="marks">
                                {
                                subjects.map((subject)=>{
                                    return(
                                        <div className="secondary mark-card">
                                            <Pie options={{}} data={subjectWiseMarks}></Pie>
                                            <h5 className="mt-1 center">{subject}</h5>
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
    </div>
  )
}

export default Academics