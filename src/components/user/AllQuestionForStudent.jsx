import React, { useState,useEffect } from 'react'

import axios from 'axios'

import {useParams} from 'react-router-dom'
import './allquestionsforstudent.css'

function AllQuestionsForStudent() {

 

  const [data,setData] = useState([])

const {roll} =useParams(); 



  useEffect(()=>{

   const Method = async () =>{
    try {
      const res2 =   await axios.get(`${process.env.REACT_APP_URL_QUESTION}/question`);
        console.log(res2.data)
        setData(res2.data);
    }
    catch(error){
        console.log("Error student login Service : ",error);
    }

   }
   Method();
},[])


  return (
    <div>

      <div className="container allquestions-container">

  {/* starting div */}

  {
    data.length!==0 &&

    data.map((question,index)=>{

      return(
        <div className='allquestions' key={index}>
      <div className='question-div'>
        
        <div className=' question-item'>
      
            <div className="inner-item">
            <label htmlFor="subject">Subject : </label>
            <label htmlFor="">{question.subject}</label>
            </div>
            <div className="inner-item">
            <label htmlFor="week">Week : </label>
            <label htmlFor="">{question.week}</label>
            </div>
           
            

        </div>

     
        <div className="question question-item">

            <label htmlFor="question">Question:</label>
            <textarea
              type="text"
              id="question"
              disabled
              value={question.question}
            />

        </div>

        <div className='choice question-item'>

            <label htmlFor="choices" className='block'>Choices:</label>
            {question.choices.map((choice, index) => (
              <div key={index} className='grid-two-cols choice2'>
                <input
                  type="text"
                  disabled
                  value={choice.charAt(0)===String.fromCharCode(65+index) ? choice : String.fromCharCode(65+index)+". "+choice}
                />
              
              </div>
            ))}
          
        </div>


        {
          question.questionType === "single" && 
          (
            <div className='answer question-item'>
                    <label htmlFor="answer">Answer :</label>
            
                    <ul>
                    
                      <li key={index}>
                        <label htmlFor={index}>{question.correctAnswers[0]}</label>
                      </li>
                    
                    </ul>
            </div>
          )
          }

          {
            question.questionType === "multiple" && 
            (
              <div className='answer question-item'>
                      <label htmlFor="answers">Answer :</label>
              
                      <ul>
                      {question.correctAnswers.map((answer, index) => (
                        <li key={index}>
                         <label htmlFor={index}>{answer}</label>
                        </li>
                      ))}
                      </ul>
              </div>
            )
          }

      </div>

      </div>

      )
    })
  }

{/* ending div */}
      </div>
    </div>
  )
}

export default AllQuestionsForStudent;
