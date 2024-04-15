import React from 'react'
import './userNav.css'
import User from '../../assets/user.svg';
import {useParams} from 'react-router';
import {Link} from 'react-router-dom'

function UserNav() {

  const {roll} = useParams()
  return (
    <div>
      <header className="container grid-two--cols nav-container">
        <div >
            <div className="usernav">
            <ul>
                <a href='/'><li className='nav-item'>HOME</li></a>
                <Link to={`/CC/${roll}`}><li className='nav-item'>CC</li></Link>
                <Link to={`/EE/${roll}`}><li className='nav-item'>IEE</li></Link>
                <a href='/contact'><li className='nav-item'>CONTACT</li></a>
                <Link to={`/user/${roll}`}><li className='nav-item'><img src={User} alt="user logo" /></li></Link>
            </ul>
            </div>
        </div>
    </header>
    </div>
  )
}

export default UserNav
