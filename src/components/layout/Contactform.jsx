import React from 'react'
import Navbar from './Navbar'
import './contact.css'
import Footer from './Footer'

function Contactform() {
  return (

    <div>
      <Navbar/>
      <section class="contact-section">

        <div class="container title">

            <h2 class="section-common--heading">Contact Us</h2>
            <p class="section-common--title">Get in touch with us. We are always here to help you.</p>
        </div>

        <div class="container grid grid-two--cols">

            <div class="contact-div">
                <form action="">

                    <div class="grid grid-two--cols mb-3">

                    <div class="mb-3">
                      <label for="username">Username</label>
                      <input type="text" name="username" id="username" placeholder="Enter your name"/>
                    </div>
                    <div class="mb-3">
                      <label for="email">Enter Your Gmail</label>
                    <input type="email" name="email" id="email" placeholder="abc@gmail.com"/>
                    </div>

                    </div>

                    <div class="mb-3">
                      <label for="subject">subject</label>
                      <input type="text" name="subject" id="subject" placeholder="your main title"/>
                    </div>

                    <div class="mb-3 message-div">
                      <label for="message">Message</label>
                      <textarea name="message" id="message" cols="60" rows="15"></textarea>
                    </div>

                    <div class="btn-submit">
                      <button type="submit">Send Message</button>
                    </div>

                </form>
            </div>

            <div class="contact-map">
          
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m10!1m8!1m3!1d228402.08588263727!2d77.0607437479867!3d14.656669368015354!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1713110362028!5m2!1sen!2sin" 
                width="100%"
                height="500px"
                title='this map iframe'
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
            </div>

        </div>

      </section>
      <Footer/>
    </div>
  )
}

export default Contactform
