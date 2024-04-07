import React from 'react'
import image from "../.././assets/100 (1).jpeg"
import image9 from "../.././assets/100 (9).jpeg"
import image10 from "../.././assets/100 (10).jpeg"
import image11 from "../.././assets/100 (11).jpeg"
import image12 from "../.././assets/100 (12).jpeg"



import "./testimonial.css"

const Testiomonial = () => {
  return (
    <div className='our'>
      <h1 className="febric-heading">We are Tagai Fashion & Design</h1>
      <p className='fabric-para'>Custom printing of design are also available in our service , we can print specific designs according to our customers.</p>
      <div id="mz-gallery-container">

<div id="mz-gallery">

  <figure>
    <img src= {image} alt="Statue of Liberty" className='img-fabric' />
    <figcaption>Custom Design</figcaption>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </figure>

  <figure>
    <img src= {image9} alt="Sunset Over Mountains"  className='img-fabric' />
    <figcaption>Custom fabric design</figcaption>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </figure>

  <figure>
    <img src= {image10} alt="SUV in Front of Building"  className='img-fabric' />
    <figcaption>Custom fabric design</figcaption>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </figure>

  <figure>
    <img src={image11} alt="Classic Vehicle"  className='img-fabric' />
    <figcaption>Custom fabric design</figcaption>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </figure>

  <figure>
    <img src= {image12} alt="Stacked Rocks"  className='img-fabric' />
    <figcaption>Custom fabric design</figcaption>
    <div></div>
    <div></div>
    <div></div>
    <div></div>
  </figure>

  
</div>

</div>
    </div>
  )
}

export default Testiomonial