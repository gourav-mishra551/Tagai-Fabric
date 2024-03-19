import React from 'react'
import Navbar from '../../components/Navbar/Navbar'
import Card from '../../components/Card/Card'
import Footer from '../../components/Footer/Footer'
import { MDBCarousel, MDBCarouselItem } from 'mdb-react-ui-kit';
const Products = () => {
  return (
    <div className="main-conatiner">
      <Navbar/>
    
    <MDBCarousel  showIndicators>
      <MDBCarouselItem itemId={1}>
        <img src='./backgroud.png' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={2}>
        <img src='./background.png' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
      <MDBCarouselItem itemId={3}>
        <img src='./background3.png' className='d-block w-100' alt='...' />
      </MDBCarouselItem>
    </MDBCarousel>
    <Card/>
    <Footer/>
    </div>
    
  )
}

export default Products