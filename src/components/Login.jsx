import React, {useContext, useState } from 'react';
import Navbar from './layout/Navbar';
import { useNavigate } from "react-router-dom";
import './login.css'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import axios from "axios";
import {StudentData} from '../App'

function Login() {

  var {object,setObject} =useContext(StudentData);
  var [rollNo,setRollNo] = useState(null);
  var [password,setPassword] = useState(null);
  var [data,setData] = useState(null);

  const navigate = useNavigate();

  const StudentLogin = async (login) =>{
    try {
      

      const res2 =   await axios.post(`${process.env.REACT_APP_URL_STUDENT}/student/login`, login);
        setData(res2.data);
        setObject(res2.data);
        
    }
    catch(error){
        console.log("Error student login Service : ",error);
        return null;
    }
}
  
  const HandleClick = async() =>{

    if(rollNo&& password){

      const login = {
        rollNo:rollNo,
        password:password
      }

      await StudentLogin(login);
   
    
      if(data)
      {
        toast.success("Login Successfully");
      

        if(data.role==="STUDENT"){
          setRollNo("")
          setPassword("")
          navigate(`/userhome/${object.rollNo}`)
        }
        else{
          
          console.log(data)
          setRollNo("")
          setPassword("")
          navigate(`/adminhome/${object.rollNo}`)
        }
      }
      else{
        
        toast.error("Wrong details")
      }
      
  
    }
    else{
      if(rollNo && !password)
      {
        alert('Enter the password');
      }
      else if(password && !rollNo){
        alert('Enter the roll no')
      }
      else{
        alert("Enter the login details");
      }
    }
  }

  const handleChangeRoll=(value)=>{
 
    setRollNo(value);
  }

  const handleChangePassword=(value)=>{
   
    setPassword(value);
  }

  return (
    
    <div className="back-login">
      <div className='container'>
      <Navbar/>
      
      <div className='login-center'>
        
        <fieldset>
            <legend>LOGIN FORM</legend>
            <div className="grid grid-two--cols">
                <label htmlFor="login-rollNo">ROLL NO : </label>
                <input type="text" id='login-rollNo' value={rollNo} onChange={(e)=>handleChangeRoll(e.target.value)}/>
            </div>

            <div className="grid grid-two--cols">
                <label htmlFor="login-password">PASSWORD : </label>
                <input type="password" id='login-password' value={password} onChange={(e)=>handleChangePassword(e.target.value)}/>
            </div>

            <div className='button'>
            <button className='btn' onClick={HandleClick} >LOGIN</button>
            </div>
        </fieldset>
      </div>
    </div>
    </div>
  )
}

export default Login
