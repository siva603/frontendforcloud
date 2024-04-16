import React, { useContext } from 'react'
import Main from '../layout/Main'
import Cloud from '../layout/Cloud'
import Footer from '../layout/Footer'
import AdminNav from './AdminNav';
import {StudentData} from '../../App'
import { useNavigate} from 'react-router';
import {useParams} from 'react-router';
import Environmental from '../layout/Environmental'

function AdminHome() {

  const {object,setObject} = useContext(StudentData);
  const {roll} = useParams();

  const navigate = useNavigate()

  if(object==null){
    navigate('/login')
  }
  return (
    <div>
      <AdminNav value="219B1A0530"/>
      <Main/>
      <Cloud/>
      <Environmental/>
      <Footer/>
    </div>
  )
}

export default AdminHome
