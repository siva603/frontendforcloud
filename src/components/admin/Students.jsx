import React, { useEffect, useState } from 'react'
import './students.css'
import AdminNav from './AdminNav'
import Update from '../../assets/update.svg';
import Delete from '../../assets/delete.svg';
import axios from 'axios'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import {Link, useNavigate} from 'react-router-dom'

function Students() {

    const [students, setStudents] = useState([]);
    const navigate = useNavigate();

    useEffect(()=>{

        const Method = async () =>
        {
            try {
                const res2 =   await axios.get(`${process.env.REACT_APP_URL_STUDENT}/student`);
                console.log(students)
                  setStudents(res2.data);
              }
              catch(error){
                  console.log("Error student login Service : ",error);
              }
        }
        Method()
    },[])


    const handleDeleteMethod = async (rollNo) =>{
        if(window.confirm("Do you want to delete ?")){

            try {
                const res2 =   await axios.delete(`${process.env.REACT_APP_URL_STUDENT}/student/${rollNo}`);
                if(res2.data)
               {
                    navigate('/students')
                    toast.success("student deleted successfully")
               }
              }
              catch(error){
                  console.log("Error student login Service : ",error);
              }
            
        }
    }

  return (
    <div> 
        <AdminNav/>
      {

        students.length!==0 && 
        <div className='container students'>
            <h1>Student data</h1><br /><br />

            <table>
                <thead>
                <tr>
                    <th>ROLL NO</th>
                    <th>NAME</th>
                    <th>GROUP</th>
                    <th>YEAR</th>
                    <th>ACTIONS</th>
                </tr>
                </thead>
               <tbody>

                {
                    students.map((student,index)=>{
                        return (
                            <tr key={index}>
                                <td>{student.rollNo}</td>
                                <td>{student.name}</td>
                                <td>{student.studentGroup}</td>
                                <td>{student.year}</td>
                                <td className='student-actions'> 
                                    <Link to={`/updatestudent/${student.rollNo}`}>
                                    <img src={Update} alt="update svg" />
                                    </Link> 
                                    
                                    <a href="" className='icon'onClick={()=>handleDeleteMethod(student.rollNo)}><img src={Delete} alt="delete svg" /></a>
                                </td>
                            </tr>
                        )
                    })
                }

               </tbody>
            </table>

        </div>

      }
    </div>
  )
}

export default Students
