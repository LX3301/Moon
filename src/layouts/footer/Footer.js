import React from 'react'
import './footer.css'
import logo from '../../assets/images/logo_white.png'
export default function Footer() {
  return (
    <footer className="footer-container">
    <div className="footer-top">
      <img className="footer-logo" src={logo} alt='logo_white'/>  
      <ul className="footer-links">
        <li><a href="/about">About us</a></li>
        <li><a href="/services">Services</a></li>
        <li><a href="/projects">Projects</a></li>
        <li><a href="/career">Career</a></li>
        <li><a href="/contacts">Contacts</a></li>
      </ul>
    </div>
    <hr className="footer-divider" />
    <div className="footer-bottom">
      <p>© Moon Software, Vinnytsia, Ukraine</p>
      <a href="/" className="footer-policy">Privacy Policy</a>
      <a href="/" className="footer-contact">info@bluemoon.net</a>
    </div>
  </footer>
  )
}
