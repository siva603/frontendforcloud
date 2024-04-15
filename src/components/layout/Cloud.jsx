import React, { useContext } from 'react'
import './cloud.css'
import { StudentData  } from '../../App'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Cloud() {

    let {object,setObject} = useContext(StudentData);
    let navigate = useNavigate();

    const handleQuiz = async (subject,week) =>{
          
            if(object==null){
                toast.error("SIGN IN YOUR ACCOUNT")
                navigate('/login');
            }
            else{
                toast.success("Loading questions...")
                console.log(object);
                console.log(subject);
                console.log(week);
                navigate(`/quiz/${object.rollNo}/${subject}/${week}`)
            }
    }

  return (
    <section className='cloud'>

    <div className="container">
            <h2 className='common-heading'>Cloud computing</h2>
            <p className='common-sub--heading'>Cloud computing is a scalable services consumption and delivery platform that provides on-demand computing service for shared pool of resources, namely servers, storage, networking, software, database, applications etc., over the Internet. It is a model for enabling ubiquitous, on-demand access to a shared pool of configurable computing resources, which can be rapidly provisioned and released with minimal management effort. This course will introduce various aspects of cloud computing, including fundamentals, management issues, security challenges and future research trends. This will help students (both UG and PG levels) and researchers to use and explore the cloud computing platforms.</p>
    </div>

    <div className='container grid  grid-four--cols'>

      <div className='grid-items'>
      <iframe width="100%" height="250" src="https://www.youtube.com/embed/ZHCtVZ6cjdg?si=fC2fWEKKsmV4FBJ2" title="week 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 1</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 1")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SqG-b5E9vHs?si=PMZ0XAkp4Zvk_6si" title="week 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 2</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 2")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/57X6frOmwn0?si=kR3yFmstvobJXsia" title="week 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 3</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 3")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/u6q_hD73qwM?si=X6D8m_VdL2iXTaxX" title="week 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 4</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 4")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/9Btb72NZwg4?si=nZe6APctggLxUwzC" title="week 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 5</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 5")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XWNEhv-b2PM?si=vPwZ9w40OyF8nDPG" title="week 6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 6</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 6")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
     <iframe width="560" height="315" src="https://www.youtube.com/embed/Mkuf4pTqIdU?si=CXG8kukzu2e1mKDF" title="week 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 7</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 7")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XTW3ujxnndo?si=JBK6oH7p6T7fx9us" title="week 8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 8</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 8")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/M38DDZvr-YI?si=4E7qelj5YiFUJO1p" title="week 9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 9</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 9")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/KOH13vkv6VU?si=dhj-OT3gAKAEBTnb" title="week 10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 10</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 10")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/MavppiPIaZc?si=TFwhPIROJvoiSG4f" title="week 11" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 11</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 11")}>take quiz</button></a>
      </div>
      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/XJtFgzn4ug8?si=PHRKDBtr7qSV0zeR" title="week 12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>cloud computing</p>
          <p className='common-week--name'>week 12</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Cloud Computing","week 12")}>take quiz</button></a>
      </div>
      

    </div>
      
    </section>
  )
}

export default Cloud
