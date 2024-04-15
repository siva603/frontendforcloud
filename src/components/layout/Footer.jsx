import React from 'react'
import './footer.css';
import Target from '../../assets/Target.png';
import Email from '../../assets/email.svg';
import LinkedIn from '../../assets/linkedin.svg';
import GitHub from '../../assets/github.svg';

function Footer() {
  return (
    <footer>
      
      <div className='container grid grid-three--cols'>

        <div className='item-one'>
            <h2>About Us</h2>
            <p>U SIVAPRASAD <sub><small>B<sup>TECH</sup></small></sub></p>

            <img src={Email} alt="Email svg" />
            <a href="mailto:sivaprasad911380@gmail.com">Email us</a>
            <br />
            <img src={LinkedIn} alt="Email svg" />
            <a href="https://linkedin.com/in/u-sivaprasad-5175b1274" target="_blank">LinkedIn</a><br />
            <img src={GitHub} alt="Email svg" />
            <a href="https://github.com/siva603" target="_blank">Github</a>
     
        </div>

        <div className='item-two'>

          <div className='target-icon'>
            <figure>
              <img src={Target} alt="" />
            </figure>
          </div>
          <div className='grid grid-three--cols'>

            <div className="item-1">
              <p>Terms and Conditions</p>
              <p>Privacy Policy</p>
              <p>Cookie Policy</p>
            </div>
            <div className="item-3">
                <h2>Let's Contact</h2>
                <a href="/contact"><button>contact me</button></a>
            </div>
        
          </div>

        </div>
        
      </div>

    </footer>
  )
}

export default Footer
