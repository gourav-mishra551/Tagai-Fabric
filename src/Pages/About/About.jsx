import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Footer from '../../components/Footer/Footer'
import Image from "../../assets/About.png"
import "./about.css"

const About = () => {
  return (
    <div>
        <Navbar/>
        <img className='about-image' src={Image} alt="background" />
        <Footer/>
    </div>
  )
}

export default About