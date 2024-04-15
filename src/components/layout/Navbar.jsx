import React from 'react'
import './navbar.css';
function Navbar() {
  return (
    <header className="container grid-two--cols nav-container">
        <div >
            <div className="nav">
            <ul>
                <a href='/'><li className='nav-item'>HOME</li></a>
                <a href='/login'><li className='nav-item'>LOGIN</li></a>
                <a href='/register'><li className='nav-item'>REGISTER</li></a>
                <a href='/contact'><li className='nav-item'>CONTACT</li></a><s></s>
            </ul>
            </div>
        </div>
      
    </header>
  )
}

export default Navbar;