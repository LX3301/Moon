import React from "react";
import "./career.css";
import ClientForm from "../../modules/clientForm/ClientForm";

export default function Career() {
  return (
    <div className="c-container">
      <div className="c-section-one">
        <h2 className="c-one-h2">
          Invite you to become a part of Moon`s family
        </h2>
        <p className="c-one-p">Work together with Moon Software</p>
      </div>
      <div className="c-section-two">
        <h4 className="c-two-h4">We are looking for:</h4>
        <div className="c-two-content">
          <div className="c-two-card">
            <h3 className="c-card-h3">Middle iOS Developer</h3>
            <p className="c-two-p">
              <span className="c-two-span">REQUIRED SKILLS:</span> Good skills
              in Swift Ability to close tasks of any difficulty level, without
              the help of other developers Optimization of the code, fix the
              memory leaks OOP principles Pattern: MVC/MVP/MVVM Autolayout REST
              API integration 2+ year of experience as an iOS developer English
              at the Upper-Intermediate level or higher.
            </p>
          </div>
          <div className="c-two-card">
            <h3 className="c-card-h3">Middle Lead Generation Manager</h3>
            <p className="c-two-p">
              <span className="c-two-span">REQUIRED SKILLS:</span> Experience in
              communication with foreign customers. Advanced Intermediate
              written and spoken English are mandatory. Analytical and research
              skills. Excellent communication skills. Productivity. Leadgen
              process automation tools experience.
            </p>
          </div>
        </div>
        <h1 className="c-two-h1">Contact us</h1>
      </div>
      <div className="c-section-three">
        <ClientForm />
      </div>
    </div>
  );
}
