
import React,{createContext, useState} from 'react';
import {
  Route,
  BrowserRouter,
  Routes
}    from "react-router-dom";

import './index.css';
import Home from './components/Home'
import Login from './components/Login'
import Register from './components/Register'
import Contactform from './components/layout/Contactform';
import {ToastContainer} from 'react-toastify'

import UserHome from './components/user/UserHome';
import User from './components/user/User';

import AdminHome from './components/admin/AdminHome'
import Admin from './components/admin/Admin'
import Student from './components/admin/Student';
import UpdateStudent from './components/admin/UpdateStudent';
import Students from './components/admin/Students';

import TotalQuestionsQuiz from './components/quiz/TotalQuestionsQuiz'
import Quiz from './components/quiz/Quiz'

import AllQuestions from './components/question/AllQuestions'
import QuestionForm from './components/question/QuestionForm'
import UpdateQuestion from './components/question/UpdateQuestion'
import EE from './components/layout/EE';
import CC from './components/layout/CC';
import AdminCC from './components/layout/AdminCC';
import AdminEE from './components/layout/AdminEE';

export  const StudentData = createContext();

function App() {

 

    const [ object,setObject] = useState(null);

  return (
    <BrowserRouter>
  <StudentData.Provider value={{object,setObject}}>
  <Routes>
  
    <Route path="/" element={<Home />}></Route>
    <Route path="/login" element={<Login/>}></Route>
    <Route path="/register" element={<Register/>}></Route>
    <Route path="/contact" element={<Contactform/>}></Route>
    <Route path="/student/:roll" element={<Student/>}></Route>
    <Route path="/userhome/:roll" element={<UserHome/>}></Route>
    <Route path="/adminhome/:roll" element={<AdminHome/>}></Route>
    <Route path="/admin/:roll" element={<Admin/>}></Route>
    <Route path="/user/:roll" element={<User/>}></Route>
    
    <Route path="/students" element={<Students/>}></Route>
    <Route path="/updatestudent/:roll" element={<UpdateStudent/>}></Route>
    <Route path="/totalquiz/:roll/:subject" element={<TotalQuestionsQuiz/>}></Route>
    <Route path="/quiz/:roll/:subject/:week" element={<Quiz/>}></Route>
    <Route path="/allquestions/:roll/:subject" element={<AllQuestions/>}></Route>
    <Route path="/addquestion" element={<QuestionForm/>}></Route>
    <Route path="/updatequestion/:roll/:id" element={<UpdateQuestion/>}></Route>

    <Route path="EE/:roll" element={<EE/>}></Route>
    <Route path="CC/:roll" element={<CC/>}></Route>
    <Route path="AdminEE/:roll" element={<AdminCC/>}></Route>
    <Route path="AdminCC/:roll" element={<AdminEE/>}></Route>



  </Routes>
  </StudentData.Provider>
  <ToastContainer/>
</BrowserRouter>

  )
}

export default App
