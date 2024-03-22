import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import Image from "../../assets/About.png";
import "./about.css";

const About = () => {
  return (
    <div>
      <Navbar />
      <img className="about-image" src={Image} alt="background" />
      <hr className="sep-3" />
      <h1 className="heading">Something about us</h1>
      <div className="parass">
      <p>
        Welcome to <b>Tagai</b>, your ultimate destination for quality
        fabrics and creative inspiration. Nestled in the heart of
        <b> Delhi okhla and Nehru Place</b>, 
        <br /><hr className="sep-3" />we pride ourselves on offering an extensive selection
        of premium fabrics to fuel your passion for sewing, crafting, and
        design. With a rich heritage spanning <b>22+</b> years, we have
        established ourselves as a trusted resource for enthusiasts and
        professionals alike. At <b>Tagai</b>, we are committed to
        providing exceptional customer service and fostering a welcoming
        environment where creativity flourishes. 
        <br /><hr className="sep-3" />Whether you're a seasoned
        seamstress or a novice crafter, our knowledgeable staff is here to
        assist you in finding the perfect fabric for your project and offer
        expert advice on techniques and design ideas. From luxurious silks to
        durable cottons, vibrant prints to classic solids, our curated
        collection showcases the latest trends as well as timeless favorites. 
        <br /><hr className="sep-3"/>
        We source our fabrics from reputable suppliers to ensure superior quality
        and versatility, empowering you to bring your vision to life with
        confidence and style. Beyond our extensive fabric offerings, we also
        host workshops, events, and community gatherings to inspire creativity,
        foster connections, and share our passion for all things fabric-related.
        <br /><hr className="sep-3" />
        Join us on this exciting journey as we continue to inspire and empower
        makers of all levels to create beautiful, one-of-a-kind pieces that
        reflect their individual style and personality. Thank you for choosing
        <b> Tagai</b>. We look forward to being your trusted partner in
        all your fabric endeavors.
      </p>
      </div> 
      <div className="div">
        <img className="about-img" src="./fabric.jpg" alt="plants to clothes" />
      </div>
      <h1 className="heading">Our working Stations</h1>
      <div className="working">
        <div className="left-work">
            Our production unit situated in,  <b>Bihar</b> for Silk <br /><hr className="sep-3"/>
             <b>Haryana </b> for Die and ,<br /><hr className="sep-3"/>
             <b>Jharkhand </b> for  handwoven yarn  to fabric
        </div>
        <div className="right-work">
        <img className="work-img" src="./working.jpg" alt="" />
        </div>
        
      </div>
      <Footer />
    </div>
  );
};

export default About;
