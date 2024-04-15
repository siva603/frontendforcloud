import React, { useEffect, useState } from 'react'
import Update from '../../assets/update.svg'
import AllQuestionsForStudent from './AllQuestionForStudent'
import '../admin/admin.css'
import {Link} from 'react-router-dom'
import {useParams} from 'react-router';
import axios from "axios";

function User() {


  const {roll} = useParams();
  const [name,setName] = useState(null)

  useEffect( () => {

    const Method = async() =>{
     try{
       const res = await axios.get(`${process.env.REACT_APP_URL_STUDENT}/student/${roll}`);
  
        setName(res.data.name)
        

     } 
   catch(err){
         console.log("Student component error : ",err)
    }}
    Method();  
   }
,[])
  return (
    <div>

        <div className="container admin">
            <div className="welcome">
                <div className='left'>
                <h1>Hi {name} </h1>

                <Link to={`/student/${roll}`}><img src={Update} alt="update svg-" /></Link> 
                </div>

                <div className='right'>
                  <Link to={`/totalquiz/${roll}/Cloud Computing`}><button className='button'>CC All Questions Quiz</button></Link> 
                  <Link to={`/totalquiz/${roll}/Environmental Economics`}><button className='button'>EE All Questions Quiz</button></Link> 
                </div>
            </div>
        </div>

    <AllQuestionsForStudent/>
    
    </div>
  )
}

export default User;
