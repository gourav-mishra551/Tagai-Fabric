import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import Slider from "../../components/Slider/Slider";
import Images from "../../image2";


const Products = () => {
  return (
    <div className="main-conatiner">
      <Navbar/>
      <Slider images = {Images}/>
    <Card/>
    <Footer/>
    </div>
    
  )
}

export default Products