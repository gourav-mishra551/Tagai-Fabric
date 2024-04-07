import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Fabric from "../../components/Fabric/Fabric";
import images from "../../images";
import Footer from "../../components/Footer/Footer";
import Payment from "../../components/Payment/Payment";
import Testimonial from "../../components/Testimonial/Testiomonial";
import Structure from "../../components/Infrastructure/Structure";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider images={images} />
      <Fabric />
      <Structure/>
      <Payment />

      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
