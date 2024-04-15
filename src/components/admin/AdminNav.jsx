import React from 'react'
import '../user/userNav.css';
import User from '../../assets/user.svg';
import {Link} from 'react-router-dom'
import {useParams} from 'react-router';

function AdminNav(props) {
    const {roll} = useParams()

    return (
        <div>
          <header className="container grid-two--cols nav-container">
            <div >
                <div className="usernav">
                <ul>
                <Link to={`/adminhome/${roll}`}><li className='nav-item'>HOME</li></Link>
                <Link to={`/AdminEE/${roll}`}><li className='nav-item'>CC</li></Link>
                <Link to={`/AdminCC/${roll}`}><li className='nav-item'>IEE</li></Link>
                    <a href='/contact'><li className='nav-item'>CONTACT</li></a>
                    <Link to={`/admin/${roll}`}>
                        <li className='nav-item'><img src={User} alt="user logo" /></li></Link> 
                </ul>
                </div>
            </div>
        </header>
        </div>
      )
}

export default AdminNav
