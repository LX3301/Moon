import React from "react";
import "./contacts.css";
import ClientForm from "../../modules/clientForm/ClientForm";

export default function Contacts() {
  return (
    <div className="cnt-container">
      <div className="cnt-section-one">
        <h2 className="cnt-one-h2">Contact us</h2>
        <p className="cnt-one-p">
          Got an amazing business idea? Let’s bring it to market together
        </p>
      </div>
      <div className="cnt-section-two">
        <ClientForm />
      </div>
    </div>
  );
}
