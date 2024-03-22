import React from "react";
import Navbar from "../../components/Navbar/Navbar";
import Footer from "../../components/Footer/Footer";
import "./contact.css";

const Contact = () => {
  return (
    <div>
      <Navbar />
      <hr class="sep-3" />
      <h1 className="heading-contact">Contact Us</h1>

      <div className="main">
        <div className="left">
        Consult Your Clothing Collection With Our Experts.
        </div>
        
      <div id="container">
        <div className="right">
          <h1 className="contact" id="#h1">&bull; Keep in Touch &bull;</h1>
          <div className="underline"></div>
          <form action="#" method="post" id="contact_form">
            <div className="name">
              <label for="name"></label>
              <input
                type="text"
                placeholder="My name is"
                name="name"
                id="name_input"
                required
              />
            </div>
            <div className="email">
              <label for="email"></label>
              <input
                type="email"
                placeholder="My e-mail is"
                name="email"
                id="email_input"
                required
              />
            </div>
            <div className="telephone">
              <label for="name"></label>
              <input
                type="text"
                placeholder="My number is"
                name="telephone"
                id="telephone_input"
                required
              />
            </div>
            <div className="subject">
              <label for="subject"></label>
              <select
                placeholder="Subject line"
                name="subject"
                id="subject_input"
                required
              >
                <option disabled hidden selected>
                  Subject line
                </option>
                <option>I'd like to start a project</option>
                <option>I'd like to ask a question</option>
                <option>I'd like to make a proposal</option>
              </select>
            </div>
            <div className="message">
              <label for="message"></label>
              <textarea
                name="message"
                placeholder="I'd like to chat about"
                id="message_input"
                cols="30"
                rows="5"
                required
              ></textarea>
            </div>
            <div className="submit">
              <input type="submit" value="Send Message" id="form_button" />
            </div>
          </form>
        </div>
      </div>
      </div>
      
      <Footer />
    </div>
  );
};

export default Contact;
