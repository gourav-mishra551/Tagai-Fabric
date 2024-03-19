import React from "react";

import Navbar from "../../components/Navbar/Navbar";
import Slider from "../../components/Slider/Slider";
import Fabric from "../../components/Fabric/Fabric";
import Images from "../../images";
import Footer from "../../components/Footer/Footer";
import Payment from "../../components/Payment/Payment";
import Testimonial from "../../components/Testimonial/Testiomonial";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Slider images={Images} />
      <Fabric />
      <Payment />

      <Testimonial />
      <Footer />
    </div>
  );
};

export default Home;
