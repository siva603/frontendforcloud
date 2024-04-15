import React, { useEffect, useState }  from 'react'
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import './student.css'
import { useNavigate} from 'react-router';
import AdminNav from './AdminNav';
import {useParams} from 'react-router';

function UpdateStudent() {
 
  const [name,setName] = useState("");
  const [rollNo,setRollNo] = useState("");
  const [studentGroup,setGroup] = useState("");
  const [year,setYear] = useState("");
  const [password,setPassword] = useState("");
  const [role ,setRole] = useState("")
  const [data,setData] = useState("");

  const navigate=useNavigate();

  const {roll} = useParams(); 

  useEffect(()=>{

            const getData = async()=>{
              let response= await axios.get(`${process.env.REACT_APP_URL_STUDENT}/student/${roll}`);
              
              setName(response.data.name)
              setRollNo(response.data.rollNo)
              setGroup(response.data.studentGroup)
              setYear(response.data.year)
              setPassword(response.data.password)
              setRole(response.data.role)
            }
            try {
              
                getData()

            }
            catch(error){
                toast.error("500 server error");
                console.log("Error creating Student Service : ",error);
               
            }

  },[])

  const handleOnClickEvent= async()=>{
    
    if(name && rollNo && studentGroup && year && password && role){

    const studentObject = {
      name,
      rollNo,
      studentGroup,
      year,
      role,
      password
    }

    try {
      let response= await axios.put(`${process.env.REACT_APP_URL_STUDENT}/student/admin/update`,studentObject);
    setData(response.data);
    
  if(response.data!=null){

    toast.success("Updated successfully.")
    setName("")
    setRollNo("")
    setGroup("")
    setYear("")
    setPassword("")
    navigate('/students')
  }
  else{
  
    toast.error("student doesn't updated");
  }

    } catch (error) {
      console.log(error)
    }


    }
    else{
      toast.error("Enter the Update details")
    }
  }

  const handleNameChange=(value)=>{
    setName(value)
  }
  const handleRollNoChange=(value)=>{
    setRollNo(value)
  }
  const handleRoleChange=(value)=>{
    setRole(value)
  }


  const handleGroupChange=(value2)=>{
    setGroup(value2)
  }

  const handleYearChange=(value)=>{
    setYear(value)
  }

  const handlePasswordChange=(value)=>{
    setPassword(value)
  }



    return(
    <div className='container'>
    {/* <ToastContainer /> */}
  <AdminNav/>
  
  <div className='student-center'>

    <fieldset>
        <legend>STUDENT DETAILS</legend>
        <div className="grid grid-two--cols">
            <label htmlFor="student-name">NAME : </label>
            <input type="text" id='student-name' value={name} onChange={(e)=>handleNameChange(e.target.value)}/>
        </div>
        <div className="grid grid-two--cols">
            <label htmlFor="student-rollNo">ROLL NO : </label>
            <input type="text" id='student-rollNo' value={rollNo} onChange={(e)=>handleRollNoChange(e.target.value)}/>
        </div>
        <div className="grid grid-two--cols">
            <label htmlFor="student-group" >GROUP : </label>
            <input type="text" id='student-group' value={studentGroup} onChange={(e)=>handleGroupChange(e.target.value)}/>
        </div>
        <div className="grid grid-two--cols">
            <label htmlFor="register-year">YEAR : </label>
            <input type="text" id='register-year' value={year} onChange={(e)=>handleYearChange(e.target.value)}/>
        </div>
        <div className="grid grid-two--cols">
            <label htmlFor="register-role">ROLE : </label>
            <input type="text" id='register-role' value={role} onChange={(e)=>handleRoleChange(e.target.value)}/>
        </div>

        <div className="grid grid-two--cols">
            <label htmlFor="student-password">PASSWORD : </label>
            <input type="password" id='student-password' value={password} onChange={(e)=>handlePasswordChange(e.target.value)}/>
        </div>

        <div className='button'>
       <button className='btn' onClick={handleOnClickEvent}>Update</button>
        </div>
    </fieldset>
  </div>
</div>
)
}

export default UpdateStudent
