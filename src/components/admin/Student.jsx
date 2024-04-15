import React, { useState,useEffect}  from 'react'
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import './student.css'
import AdminNav from './AdminNav';
import { useNavigate} from 'react-router';

import {useParams} from 'react-router';

function Student() {

  const {roll} = useParams();
  const navigate = useNavigate();

  const [name,setName] = useState(null);
  const [rollNo,setRollNo] = useState(null)
  const [studentGroup,setGroup] = useState(null)
  const [year,setYear] = useState(null);
  const [password,setPassword] = useState(null);
  const [role ,setRole] = useState(null)
  



    useEffect( () => {

         const Method = async() =>{
          try{
            const res = await axios.get(`${process.env.REACT_APP_URL_STUDENT}/student/${roll}`);
            console.log(res.data)
             setName(res.data.name)
             setRollNo(res.data.rollNo)
             setGroup(res.data.studentGroup)
             setYear(res.data.year)
             setRole(res.data.roll)
             setPassword(res.data.password)

          } 
        catch(err){
              console.log("Student component error : ",err)
         }}
         Method();  
        }
  ,[])

   
  const updateStudent = async(studentObj) =>{
    try {
        
        let response= await axios.put(`${process.env.REACT_APP_URL_STUDENT}/student/${rollNo}`,studentObj);
                if(response.data)
               {
                toast.success("Updated successfully.")

                if(role==="STUDENT"){
                  navigate(`/userhome/${roll}`)
                }
                else{
                  navigate(`/adminhome/${roll}`)
                }
                setName("")
                setRollNo("")
                setGroup("")
                setYear("")
                setPassword("")
                    
               }
    }
    catch(error){
        toast.error("500 server error");
        console.log("Error admin student service : ",error);
       
    }
}

// const handleChange = async(e) =>{

//   setData(...data,{e.target.name}:e.target.value)
// }

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

   updateStudent(studentObject);

    }
    else{
      toast.error("Enter the register details")
    }
  }

  const handleNameChange=(value)=>{
    setName(value)
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
            <input type="text" id='student-name' value={name || ""} onChange={(e)=>handleNameChange(e.target.value)}/>
        </div>
        <div className="grid grid-two--cols">
            <label htmlFor="student-rollNo">ROLL NO : </label>
            <input type="text" id='student-rollNo' value={rollNo || ""} disabled />
        </div>
        <div className="grid grid-two--cols">
            <label htmlFor="student-group" >GROUP : </label>
            <input type="text" id='student-group' value={studentGroup || ""} onChange={(e)=>handleGroupChange(e.target.value)}/>
        </div>
        <div className="grid grid-two--cols">
            <label htmlFor="register-year">YEAR : </label>
            <input type="text" id='register-year' value={year || ""} onChange={(e)=>handleYearChange(e.target.value)}/>
        </div>

        <div className="grid grid-two--cols">
            <label htmlFor="student-password">PASSWORD : </label>
            <input type="password" id='student-password' value={password || ""} onChange={(e)=>handlePasswordChange(e.target.value)}/>
        </div>

        <div className='button'>
       <button className='btn' onClick={handleOnClickEvent}>Update</button>
        </div>
    </fieldset>
  </div>
</div>
)
}

export default Student
