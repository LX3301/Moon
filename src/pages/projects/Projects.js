import React from "react";
import "./projects.css";
import project1 from "./img/project1.png";
import project2 from "./img/project2.png";
import project3 from "./img/project3.png";
import project4 from "./img/project4.png";
import ClientForm from "../../modules/clientForm/ClientForm";

export default function Projects() {
  return (
    <div className="p-container">
      <div className="p-section-one">
        <h2 className="p-one-h2">Projects</h2>
        <p className="p-one-p">
          Check out our works to make sure in our professionalism
        </p>
      </div>
      <div className="p-section-two">
        <h3 className="p-two-h3">Our latest case studies</h3>
        <p className="p-two-p">
          We create high-quality software for enterprises and startups with high
          ambitions
        </p>
        <div className="p-two-group">
          <img src={project1} alt="Project 1" />
          <img src={project2} alt="Project 2" />
          <img src={project3} alt="Project 3" />
          <img src={project4} alt="Project 4" />
        </div>
        <h1 className="p-two-h1">Contact us</h1>
      </div>
      <div className="p-section-three">
        <ClientForm />
      </div>
    </div>
  );
}
