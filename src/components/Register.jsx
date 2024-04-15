import React, { useState } from 'react'
import Navbar from './layout/Navbar'
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import './register.css'
import { useNavigate } from "react-router-dom";



function Register() {



  const [name,setName] = useState();
  const [rollNo,setRollNo] = useState();
  const [studentGroup,setGroup] = useState("CSE");
  const [year,setYear] = useState("3rd year");
  const [password,setPassword] = useState();
  const [role ,setRole] = useState("STUDENT")
  const [student,setStudent] = useState(null);
  const navigate = useNavigate();

  const CreateStudent = async(studentObj) =>{
    try {

        let response= await axios.post(`${process.env.REACT_APP_URL_STUDENT}/student`,studentObj);
        setStudent(response.data);

    }
    catch(error){
        toast.error("500 server error");
        console.log("Error creating Student Service : ",error);
       
    }
}

  const handleOnClickEvent=()=>{
    if(name && rollNo && studentGroup && year && password){

    const studentObject = {
      name,
      rollNo,
      studentGroup,
      year,
      role,
      password
    }

   CreateStudent(studentObject);
  if(student!=null){

    toast.success("Registered successfully.")
    navigate('/');
    setName("")
    setRollNo("")
    setGroup("")
    setYear("")
    setPassword("")

  }
  else{
    console.log(student)
    toast.error("student doesn't created");
  }

    }
    else{
      toast.error("Enter the register details")
    }
  }

  const handleNameChange=(value)=>{
    setName(value)
  }

  const handleRollChange=(value)=>{
    setRollNo(value)
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


  return (
    <div className="back-register">
    <div className='container'>
      {/* <ToastContainer /> */}
    <Navbar/>
    
    <div className='register-center'>

      <fieldset>
          <legend>REGISTER FORM</legend>
          <div className="grid grid-two--cols">
              <label htmlFor="register-name">NAME : </label>
              <input type="text" id='register-name' value={name} onChange={(e)=>handleNameChange(e.target.value)}/>
          </div>
          <div className="grid grid-two--cols">
              <label htmlFor="register-rollNo">ROLL NO : </label>
              <input type="text" id='register-rollNo' value={rollNo} onChange={(e)=>handleRollChange(e.target.value)}/>
          </div>
          <div className="grid grid-two--cols">
              <label htmlFor="register-group" >GROUP : </label>
              <input type="text" id='register-group' value={studentGroup} onChange={(e)=>handleGroupChange(e.target.value)}/>
          </div>
          <div className="grid grid-two--cols">
              <label htmlFor="register-year">YEAR : </label>
              <input type="text" id='register-year' value={year} onChange={(e)=>handleYearChange(e.target.value)}/>
          </div>

          <div className="grid grid-two--cols">
              <label htmlFor="register-password">PASSWORD : </label>
              <input type="password" id='register-password' value={password} onChange={(e)=>handlePasswordChange(e.target.value)}/>
          </div>

          <div className='button'>
         <button className='btn' onClick={handleOnClickEvent}>Register</button>
          </div>
      </fieldset>
    </div>
  </div>
  </div>
  )
}

export default Register
