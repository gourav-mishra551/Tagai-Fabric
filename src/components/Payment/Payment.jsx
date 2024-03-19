import React from "react";
import "./payment.css";

const Payment = () => {
  return (
   
    <div className="payment-main">
    <h1  className="heading ">We Care About Our Customers</h1>
    <div className="parent">
      <div className="child">
        <img src="./payment.svg" alt="" />
        <h3>Secure Payment</h3>
      </div>
      <div className="child">
        <img src="./printing.svg" alt="" />
        <h3>Custom Printing</h3>
      </div>
      <div className="child">
        <img src="./shipping.svg" alt="" />
        <h3>Free Shipping</h3>
      </div>
      <div className="child">
        <img src="./quality.svg" alt="" />
        <h3>Quality Assurance</h3>
      </div>
    </div>

    <img className="headerImg" src="./newHeader.png" alt="head" />
    </div>
   
  );
};

export default Payment;
