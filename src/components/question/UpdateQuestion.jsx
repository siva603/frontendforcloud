import React,{useState,useEffect} from 'react';
import './QuestionForm';
import AdminNav from '../admin/AdminNav';
import { toast } from "react-toastify";
import axios from "axios";
import "react-toastify/dist/ReactToastify.css";
import { useNavigate, useParams} from 'react-router';

export default function UpdateQuestion() {

  const {roll} = useParams()

  const [subjectOptions, setSubjectOptions] = useState([
    "Cloud Computing",
    "Environmental Economics",
  ]);
      const [subject, setSubject] = useState(null);
      const [newSubject, setNewSubject] = useState(null);
     
      const [weekOptions, setWeekOptions] = useState(["week 1","week 2","week 3","week 4","week 5","week ","week 7","week 8","week 9","week 10","week 11","week 12"]);
      const [week, setWeek] = useState(null);
      const [newWeek, setNewWeek] = useState("");
    
    
      const [question, setQuestion] = useState(null);
    
      const [questionType, setQuestionType] = useState(null);
    
      var [choices, setChoices] = useState([]);
      
    
      var [correctAnswers, setCorrectAnswers] = useState([]);
    
      const [data,setData] = useState(null)
      
  const navigate=useNavigate();
  const {id} =useParams(); 

  useEffect(()=>{

      const Method = async () =>{
        try {

          let response= await axios.get(`${process.env.REACT_APP_URL_QUESTION}/question/${id}`);
          setSubject(response.data.subject)
          setWeek(response.data.week)
          setQuestion(response.data.question)
          setQuestionType(response.data.questionType)
          setChoices(response.data.choices)
          setCorrectAnswers(response.data.correctAnswers)
  
      }
      catch(error){
          toast.error("500 server error");
          console.log("Error creating Student Service : ",error);
         
      }
      }

      Method()
  },[])
    
    
      const handleSubmit = async (e) => {

           
    try {
      e.preventDefault();
    
      const newChoices = choices.map((item) =>{
        return item.slice(3);
      })
 
      correctAnswers = correctAnswers.map((item) =>{
        return item.slice(3);
      })


      setChoices(newChoices);
      // setCorrectAnswers(newCorrectAnswers)
      console.log('correct answers : ',correctAnswers)
      const sendQuestion = {
        subject,
        week,
        question,
        questionType,
        choices,
        correctAnswers
      }
      
      let response= await axios.put(`${process.env.REACT_APP_URL_QUESTION}/question/${id}`,sendQuestion);
      setData(response.data);
      console.log(sendQuestion)
      if(data!=null){
        toast.success("Question updated successfully")
        navigate(`/admin/${roll}`)
      }
      else{
        toast.error("Question doesn't updated successfully")
      }
      
      }
      catch(error){
          toast.error("500 server error");
          console.log("Error creating Student Service : ",error);
        
      }
       
    };
    
      const handleAddChoice = () => {
        setChoices([...choices, ""]);
      };
    
      const handleRemoveChoice = (index) => {
        const newChoices = [...choices];
        newChoices.splice(index, 1);
        setChoices(newChoices);
      };
    
     const handleCorrectAnswerChange= (index,value) =>{
      const newCorrectAnswers = [...correctAnswers];
      newCorrectAnswers[0]=value;
      setCorrectAnswers(newCorrectAnswers);
     }
    
     const handleCorrectAnswersChange = (value) =>
     {
      
      if(correctAnswers.includes(value)){
        setCorrectAnswers(correctAnswers.filter((v) => v !== value))
      }
      else{
        setCorrectAnswers([...correctAnswers,value])
      }
     }
    
      return (
        <div>
        <AdminNav/>
        <div className='container questionform'>
    
        <form onSubmit={handleSubmit}>
    
          <div className='nestcontainer'>
    
          <div className='subject grid-two-cols'>
    
              <label htmlFor="subject">Subject:</label>
              <select
                id="subject"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
              >
                {subjectOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
                <option value="new subject">new subject</option>
              </select>
            
              {
                    subject==="new subject" &&  (
                      <>
                      <input
                    type="text"
                    id="newSubject"
                    value={newSubject}
                    onChange={(e) => setNewSubject(e.target.value)}
                    />
                    <button type="button" className= "btn"onClick={() => 
                        {
                            setSubjectOptions([...subjectOptions, newSubject])
                            setNewSubject("")
                            setSubject("")
                        }
                        }>
                    Add Subject
                    </button>
    
                      </>
                    )
                }
          </div>
    
          <div className="week grid-two--cols">
    
              <label htmlFor="week">Week:</label>
              <select
                id="week"
                value={week}
                onChange={(e) => setWeek(e.target.value)}
              >
                {weekOptions.map((option, index) => (
                  <option key={index} value={option}>
                    {option}
                  </option>
                ))}
                <option value="new week">new week</option>
              </select>
    
                    {
                    week === "new week" &&  (
                      <>
                    <input
                    type="text"
                    id="newWeek"
                    value={newWeek}
                    onChange={(e) => setNewWeek(e.target.value)}
                    />
                    <button type="button" className='btn' onClick={() => 
                        {
                            setWeekOptions([...weekOptions, newWeek])
                            setNewWeek("")
                            setWeek("")
                        }
                        }>
                    Add new week
                    </button>
    
                      </>
                    )
                }
          </div>
    
          <div className="question">
          <label htmlFor="question grid-two-cols">Question:</label>
          <textarea
            type="text"
            id="question"
            value={question}
            onChange={(e) => setQuestion(e.target.value)}
          />
    
          </div>
    
          <div className="questionType">
    
              <label htmlFor="questionType">Question Type:</label>
                  <select
                    id="questionType"
                    value={questionType}
                    onChange={(e) => {
                      setQuestionType(e.target.value)
                      setCorrectAnswers([])
                    }}
                  >
                    <option value="single">Single Choice</option>
                    <option value="multiple">Multiple Choice</option>
                  </select>
          </div>
        
          <div className='choice grid-three--cols'>
    
              <label htmlFor="choices" className='block'>Choices:</label>
              {choices.map((choice, index) => (
                <div key={index} className='grid-two-cols choice2'>
                  <input
                    type="text"
                    value={choice.charAt(0)===String.fromCharCode(65+index) ? choice : String.fromCharCode(65+index)+". "+choice}
                    onChange={(e) => {
                      const newChoices2 = [...choices];
                      newChoices2[index] = e.target.value;
                      setChoices(newChoices2);
    
                    }}
                  />
                <button type="button" className='btn' onClick={() => handleRemoveChoice(index)}>
                Remove Choice
                </button>
                  
                </div>
              ))}
              <button type="button" className='btn' onClick={handleAddChoice}>
                Add Choice
              </button> 
    
          </div>
    
    
            {
              questionType === "single" && 
              (
                <div className='answer grid-two--cols'>
                        <label htmlFor="answer">Answer :</label>
                
                        <ul>
                        {choices.map((choice, index) => (
                          <li key={index}>
                            <input
                              type="radio"
                              value={choice}
                              onChange={(e) => handleCorrectAnswerChange(index,e.target.value)}
                              name="answer"
                              
                            />{choice.charAt(0)===String.fromCharCode(65+index) ? choice : String.fromCharCode(65+index)+". "+choice}
    
                          </li>
                        ))}
                        </ul>
                </div>
              )
              }
    
              {
                 questionType === "multiple" && 
                 (
                   <div className='answer grid-two--cols'>
                           <label htmlFor="answers">Answer :</label>
                   
                           <ul>
                           {choices.map((choice, index) => (
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

          <button type="submit" className='btn-success'>Update</button>
              </div>
        </form>
        </div>
        </div>
      );
    };
