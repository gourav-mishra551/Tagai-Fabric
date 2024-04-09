import React from "react";
import image from "../.././assets/100 (1).jpeg";
import image2 from "../.././assets/100 (2).jpeg";
import image3 from "../.././assets/100 (3).jpeg";
import image4 from "../.././assets/100 (4).jpeg";
import image5 from "../.././assets/100 (5).jpeg";
import image6 from "../.././assets/100 (6).jpeg";
import image7 from "../.././assets/100 (7).jpeg";
import image8 from "../.././assets/100 (8).jpeg";

import image9 from "../.././assets/100 (9).jpeg";
import image10 from "../.././assets/100 (10).jpeg";
import image11 from "../.././assets/100 (11).jpeg";
import image12 from "../.././assets/100 (12).jpeg";

import "./testimonial.css";

const Testiomonial = () => {
  return (
    <div className="our">
      <h1 className="febric-heading">We are Tagai Fashion & Design</h1>
      <p className="fabric-para">
        Custom printing of design are also available in our service , we can
        print specific designs according to our customers.
      </p>
      <div id="mz-gallery-container">
        <div id="mz-gallery">
          <figure>
            <img src={image} alt="Statue of Liberty" className="img-fabric" />
            <figcaption>Custom Design</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img
              src={image9}
              alt="Sunset Over Mountains"
              className="img-fabric"
            />
            <figcaption>Custom design</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img
              src={image10}
              alt="SUV in Front of Building"
              className="img-fabric"
            />
            <figcaption>Custom design</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={image11} alt="Classic Vehicle" className="img-fabric" />
            <figcaption>Custom design</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={image12} alt="Stacked Rocks" className="img-fabric" />
            <figcaption>Custom design</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
        </div>
      </div>

      {/* machines */}
      <h1 className="febric-heading " style={{marginTop:"20px"}}>Glimps of our Work</h1>
      <div id="mz-gallery-container">
        <div id="mz-gallery">
          <figure>
            <img src={image6} alt="Statue of Liberty" className="img-fabric" />
            <figcaption>Our Showroom</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img
              src={image2}
              alt="Sunset Over Mountains"
              className="img-fabric"
            />
            <figcaption>Sewing Fabric</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img
              src={image3}
              alt="SUV in Front of Building"
              className="img-fabric"
            />
            <figcaption>Fabric Making</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={image4} alt="Classic Vehicle" className="img-fabric" />
            <figcaption>Custom design</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>

          <figure>
            <img src={image5} alt="Stacked Rocks" className="img-fabric" />
            <figcaption>Denim Work</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
          <figure>
            <img src={image7} alt="Statue of Liberty" className="img-fabric" />
            <figcaption>Fabric From Machine</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
          <figure>
            <img src={image8} alt="Statue of Liberty" className="img-fabric" />
            <figcaption>Thread Making</figcaption>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
          </figure>
        </div>
      </div>

    </div>
  );
};

export default Testiomonial;
