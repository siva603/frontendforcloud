
import React from 'react'
import Main from  '../components/layout/Main'
import Cloud from '../components/layout/Cloud'
import Footer from  '../components/layout/Footer'
import Navbar from './layout/Navbar'
import Environmental from './layout/Environmental'

export default function Home() {
  return (
    <div>
      <Navbar/>
      <Main/>
      <Cloud/>
      <Environmental/>
      <Footer/>
    </div>
  )
}
