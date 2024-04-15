import React, { useContext } from 'react'
import './cloud.css'
import { StudentData  } from '../../App'
import {toast} from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import { useNavigate } from "react-router-dom";

function Environmental() {

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
            <h2 className='common-heading'>Environmental Economics</h2>
            <p className='common-sub--heading'>Environmental economics is a discipline of economics that studies the economic effects of environmental policies around the world. Its main focus is on the efficient allocation of environmental and natural resources and how alternative environmental policies deal with environmental damage, such as air pollution, water quality, toxic substances, solid waste, and global warming.The origins of environmental economics date back to the 1960s, when industrialization was experiencing a boom, particularly in the western world, and pollution from industrial activity became an increasing concern. Environmental activism also started to increase due to the perceived negative consequences of environmental degradation. The world became aware of rapid economic growth and its consequences to the environment.</p>
    </div>

    <div className='container grid  grid-four--cols'>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/-3xNtg2bPQY?si=DW9v9fitCWdBwhEA" title="week 1" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 1</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 1")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/SC8e3STfid0?si=HOEnKLzRHCVlmKkR" title="week 2" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 2</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 2")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/iUbTV6reLrE?si=Dy7DX8ad-3ZT6W6Q" title="week week 3" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 3</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 3")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/QkfC3R3wHpg?si=ansrWzF4eimlSlsZ" title="week 4" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 4</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 4")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/cFjM7rMeNas?si=WO__K8f8A6YhpRC2" title="week 5" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 5</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 5")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/G27tw0e9u7U?si=3skysV_MuQ58AgPw" title="week 6" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 6</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 6")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/gg1gIszcEaQ?si=LR4hMdS7CyBj6fyD" title="week 7" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 7</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 7")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/yzO6TxOKUYM?si=SNC7vKlRHHExsQxr" title="week 8" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 8</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 8")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/dRe9a5Kylhc?si=C8boAJRaLAouz1-1" title="week 9" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 9</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 9")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/WN7qdmlzd24?si=tocwVjztYvWscH0U" title="week 10" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 10</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 10")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/Ne-IP9gp7fY?si=C12eQaVY6koSW7ww" title="week 11" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 11</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 11")}>take quiz</button></a>
      </div>

      <div className='grid-items'>
      <iframe width="560" height="315" src="https://www.youtube.com/embed/0HQgAMfzED4?si=apmGTCV8bJ3RyHZD" title="week 12" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
       
          <p className='common-subject--name'>Environmental Economics</p>
          <p className='common-week--name'>week 12</p>
          <a href="#"><button className='common-week--btn' onClick={()=>handleQuiz("Environmental Economics","week 12")}>take quiz</button></a>
      </div>
      

    </div>
      
    </section>
  )
}

export default Environmental
