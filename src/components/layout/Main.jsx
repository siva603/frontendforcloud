import React, { useContext } from 'react'
import './main.css';
import cloudImage from './cloudcomputing.jpeg';


import { StudentData  } from '../../App'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Main() {

  const {object,setObject} = useContext(StudentData);
  let navigate = useNavigate();

  const handleQuiz = async () =>{
          console.log(object);
          if(object==null){
              toast.error("SIGN IN YOUR ACCOUNT")
              navigate('/login');
          }
          else{
              toast.success("Loading questions...")
              if(object.role==="STUDENT"){
                navigate(`/user/${object.rollNo}`)
              }
              else{
                navigate(`/admin/${object.rollNo}`)
              }
          }
  }

  return (
    <main className='section-hero'>
      
      <div className="container grid grid-two--cols">
        <div className="hero-text">
        {/* <!-- Quiz section (you can add more content here --> */}
        <h1>Welcome to the Cloud Computing Quiz!</h1>
        <p>Test your knowledge on cloud computing with our quiz.</p>
        <button>Start Quiz</button>
        </div>

        <div className='hero-img'>

        <figure>
            <img src={cloudImage} alt="this is cloud computing img" />
        </figure>
        </div>
        
      </div>
    </main>
  )
}

export default Main
