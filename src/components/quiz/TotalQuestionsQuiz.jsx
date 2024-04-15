import React, { useState ,useEffect} from 'react'
import { useParams } from 'react-router-dom'
import axios from "axios";
import { useNavigate} from 'react-router-dom'
import './quiz.css'

function TotalQuestionsQuiz() {

  const {roll,subject} = useParams();
  let [data2,setData2] = useState(null);
  const navigate = useNavigate();
  let [display,setDisplay] = useState("none");
  let [display2,setDisplay2] = useState("none");


  var [ index,setIndex] = useState(0);
  var [score,setScore] = useState(0);
  let [multiple,setMultiple] = useState([]);
  

  if(roll==null){
    navigate('/login');
  }

  useEffect( () => {

    const Method = async() =>{
     try{
       const res = await axios.get(`${process.env.REACT_APP_URL_QUESTION}/question/subject/${subject}`);
      
        setData2(res.data)
        console.log(data2)
       
     } 
   catch(err){
         console.log("Quiz component error : ",err)
    }}
    Method();  
   }
,[])


   const handleNextClick = () =>{

   if(data2[index].questionType.match("single")){
    if(index < data2.length-1){
      
      setIndex(index+1)
      setDisplay("none")
    
    }
    if(index === data2.length-1){
      setDisplay2("block")
    }
   }
   else{

    let count = multiple.length;
    let value = 1/count;
    let add = 0;

    multiple = multiple.map((item) =>{
      return item.slice(3);
    })
    for(let i=0;i<count;i++){

    const matter=  data2[index].correctAnswers.map(ans=>{
                  if(ans===multiple[i]){

                    add+=value;
                  }
                  return ans;
              })         
    }
    setScore(score+add);
    if(index === data2.length-1){
      setDisplay2("block")
    }}}

   
   const handlePreviousClick = () =>{
    if(index < data2.length && index > 0){
      setIndex(index-1)
    }
   }

   const handleRestart = async () =>{
      setDisplay2("none")
      setIndex(0)
      setScore(0)
      setMultiple([])
   }

   const handleCorrectAnswerChange= (e,value) =>{
    if(data2[index].correctAnswers[0].match(value)){
      setScore(score+1);
    }
    else{
      setDisplay("block")
    }}

   
   const handleCorrectAnswersChange = (value) =>
   {
    if(multiple.includes(value)){
      setMultiple(multiple.filter((v) => v !== value))
    }
    else{
      setMultiple([...multiple,value])
    }
   }


  return (
    <div className='container'>

      {
        data2 && <div className="inner-container">
        <h1>Quiz Practice</h1>
        <hr />
        <h2>{index+1 }. <nbsp/> { data2[index].question}</h2>
        
        {
              data2[index].questionType === "single" && 
              (
                <div className='answer grid-two--cols'>
                        
                
                        <ul>
                        {data2[index].choices.map((choice, index) => (
                          <li key={index}>
                            <input
                              type="radio"
                              value={choice}
                              onChange={(e) => handleCorrectAnswerChange(e,e.target.value)}
                              name="answer"
                              
                            />{choice.charAt(0)===String.fromCharCode(65+index) ? choice : String.fromCharCode(65+index)+". "+choice}
    
                          </li>
                        ))}
                        </ul>
                </div>
              )
              }

        {
                 data2[index].questionType === "multiple" && 
                 (
                   <div className='answer grid-two--cols'>
                          
                   
                           <ul>
                           {data2[index].choices.map((choice, index) => (
                             <li key={index}>
                               <input
                                 type="checkbox"
                                 value={choice}
                                 onChange={(e) => handleCorrectAnswersChange(e.target.value)}
                                 name="answers"
                                 
                               />{choice.charAt(0)===String.fromCharCode(65+index) ? choice : String.fromCharCode(65+index)+". "+choice}
       
                             </li>
                           ))}
                           </ul>
                   </div>
                 )
              }

                  
          <div style={{display:display}} className='correct'>
              ANSWER : {data2[index].correctAnswers[0]}
          </div>

          <div style={{display:display2}} className='final'>
            CORRECT ANSWER  {score} OUT OF {data2.length}
            <button className='restart' onClick={handleRestart}>Restart</button>
          </div>
        <div>
        <button className='previous' onClick={handlePreviousClick}>Previous</button>
        <button className='next' onClick={handleNextClick}>Next</button>
        </div>
        
        <div className="index">
         <h3> {index+1} of {data2.length} Questions</h3>
        </div>
        </div>
      }

    </div>
  )
}

export default TotalQuestionsQuiz
