import React from 'react'
import UserNav from './UserNav'
import Main from '../layout/Main'
import Cloud from '../layout/Cloud'
import Footer from '../layout/Footer'
import { useNavigate } from "react-router-dom";
import {useParams} from 'react-router';
import Environmental from '../layout/Environmental'

function UserHome() {

  const {roll} = useParams()
  const navigate = useNavigate()

  if(roll==null){
    navigate('/login')
  }
  return (
    <div>
      <UserNav/>
      <Main/>
      <Cloud/>
      <Environmental/>
      <Footer/>
    </div>
  )
}

export default UserHome
