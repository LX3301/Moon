import React from "react";
import "./services.css";
import group1 from "./img/group1.png";
import group2 from "./img/group2.png";
import group3 from "./img/group3.png";
import group4 from "./img/group4.png";
import group5 from "./img/group5.png";
import num1 from "./img/num1.png";
import num2 from "./img/num2.png";
import num3 from "./img/num3.png";
import num4 from "./img/num4.png";
import FAQ from "../../layouts/faq/FAQ";
import ClientForm from "../../modules/clientForm/ClientForm";

export default function Services() {
  return (
    <div className="s-container">
      <div className="s-section-one">
        <h2 className="s-one-h2">Services Software Development</h2>
        <p className="s-one-p">
          Do you need a professional team of software engineers with experience
          in your business field? Share your idea of a unique IT product, and
          Lampa Software will implement it within the deadline!
        </p>
        <h1 className="s-one-h1">Services</h1>
      </div>
      <div className="s-section-two">
        <div className="s-two-left">
          <h3 className="s-two-h3">Project Management</h3>
          <div className="s-two-p">
            Our PM specialists negotiate, organize and motivate teams, create
            roadmaps, and manage the execution of tasks throughout the
            development lifecycle. Our project managers also analyze risks,
            maintain the necessary document flow, and present results to the
            client after each stage. Our studio specialists ensure successful
            software design and development services within the available
            resources and timeframe.
          </div>
          <h5 className="s-two-h5">We develop applications for</h5>
          <ul className="s-business-list">
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Large Businesses
            </li>
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Medium Businesses
            </li>
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Small Businesses
            </li>
            <li className="s-business-item">
              <span className="s-business-circle">○</span> Start-ups
            </li>
          </ul>
        </div>
        <div className="s-two-right">
          <div className="s-two-group">
            <img src={group1} alt="Mobile App" />
            <img src={group2} alt="Web" />
            <img src={group3} alt="QA" />
            <img src={group4} alt="UI/UX" />
            <img src={group5} alt="Project Managment" />
          </div>
        </div>
      </div>
      <div className="s-section-three">
        <div className="s-three-content">
          <h3 className="s-three-h3">What Makes Us Different?</h3>
          <p className="s-three-p">
            We provide software development services through project-specific
            teams of experts. Among our clients are leading Ukrainian media
            companies and foreign companies, whose projects are featured on our
            website. Contact our experts to realize your most daring ideas of
            custom software development!
          </p>
          <h4 className="s-three-h4">Our company:</h4>
          <div className="s-three-group">
            <div class="s-three-g-box">
              <img className="s-three-g-number" src={num1} alt="one" />
              <p class="s-three-g-text">
                Performs about 20 unique projects annually
              </p>
            </div>
            <div class="s-three-g-box">
              <img className="s-three-g-number" src={num2} alt="two" />
              <p class="s-three-g-text">Has more than 9 years of experience</p>
            </div>
            <div class="s-three-g-box">
              <img className="s-three-g-number" src={num3} alt="thre" />
              <p class="s-three-g-text">
                Offers a team of professionals in any field
              </p>
            </div>
            <div class="s-three-g-box">
              <img className="s-three-g-number" src={num4} alt="four" />
              <p class="s-three-g-text">
                Provides free consultations on your project
              </p>
            </div>
          </div>
        </div>
        <h1 className="s-three-h1">FAQ</h1>
      </div>
      <div className="s-section-four">
        <h2 className="s-four-h2">Frequently Asked Questions</h2>
        <FAQ />
        <h1 className="s-four-h1">Contact us</h1>
      </div>
      <div className="s-section-five">
        <ClientForm />
      </div>
    </div>
  );
}
