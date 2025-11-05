import React from "react";
import { Link } from "react-router-dom";

import Carousel from "./Carousel";
import FAQ from  "../../layouts/faq/FAQ";
import "./home.css";
import "./home_media.css";
import "../../assets/styles/fonts.css";
import teams from "./img/teams.png";
import ClientForm from "../../modules/clientForm/ClientForm";

export default function Home() {
  const servImg = [
    require("./img/service1.png"),
    require("./img/service2.png"),
    require("./img/service3.png"),
    require("./img/service4.png"),
    require("./img/service5.png"),
    require("./img/service6.png"),
  ];
  const feedImg = [
    require("./img/feedback1.png"),
    require("./img/feedback2.png"),
    require("./img/feedback3.png"),
    require("./img/feedback4.png"),
    require("./img/feedback5.png"),
  ];
  const altText = ["image1", "image2", "image3", "image4", "image5", "image6"];

  return (
    <div>
      <div className="section-one">
        <div className="content">
          <h1>
            Safe <br />
            Software
            <br /> Development
          </h1>
          <div className="top-btn">
            <Link to="/contacts" className="contact-btn">
              Contacts
            </Link>
            <Link to="/services" className="services-btn">
              Services
            </Link>
          </div>
        </div>
        <h2 className="about">About us</h2>
      </div>
      <div className="section-two">
        <img className="teams-img" src={teams} alt="teams" />
        <h2>IT Outsourcing Services Company</h2>
        <p>
          Moon is a state-of-the-art app development studio specializing in
          creating innovative and user-friendly mobile applications. With a
          focus on sleek design and seamless functionality, Moon brings your
          ideas to life with custom development solutions. Whether you need a
          business app, a creative tool, or a mobile game, our team of
          experienced developers ensures high performance and quality. At Moon,
          we bring your vision to life, delivering apps that meet modern
          technology demands and user expectations.
        </p>
        <Link to="/about" className="about-btn">
          About us
        </Link>
        <h1>Partners</h1>
      </div>
      <div className="section-three">
        <h2>Why should you trust us?</h2>
        <p>
          At Moon, we work with a variety of partners to deliver best-in-class
          application development solutions. Our partners include leading
          technology companies, innovative startups, and industry experts who
          share our passion for quality and innovation. Together, we ensure that
          our customers have access to the most advanced and reliable tools,
          platforms, and services to turn their app ideas into reality. By
          working closely with our trusted partners, Moon guarantees
          cutting-edge technology and seamless integration for every project.
        </p>
        <div className="map" />
        <h3>Map of our partners in 2024</h3>
        <h1>Our Flow</h1>
      </div>
      <div className="section-four">
        <Carousel
          images={servImg}
          altText={altText}
          customClass="h-carousel-service"
        />
        <h1>Feedback</h1>
      </div>
      <div className="section-five">
        <h3>What clients say</h3>
        <Carousel
          images={feedImg}
          altText={altText}
          customClass="carousel-feedback"
        />
        <h1>FAQ</h1>
      </div>
      <div className="section-six">
        <h2>Frequently Asked Questions</h2>
        <FAQ />
        <div><h4>Contact us</h4></div>
      </div>
      <div className="section-seven">
        <ClientForm />
      </div>
    </div>
  );
}
