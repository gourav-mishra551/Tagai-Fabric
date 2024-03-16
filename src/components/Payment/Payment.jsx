import React from "react";
import "./payment.css";

const Payment = () => {
  return (
    <div className="parent">
      <div className="child">
        <img src="./payment.svg" alt="" />
        <h1>Secure Payment</h1>
      </div>
      <div className="child">
        <img src="./printing.svg" alt="" />
        <h1>Custom Printing</h1>
      </div>
      <div className="child">
        <img src="./shipping.svg" alt="" />
        <h1>Free Shipping</h1>
      </div>
      <div className="child">
        <img src="./quality.svg" alt="" />
        <h1>Quality Assurance</h1>
      </div>
    </div>
  );
};

export default Payment;
