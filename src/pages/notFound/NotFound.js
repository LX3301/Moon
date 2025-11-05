import React from 'react'
import './notFound.css'
import logo from "../../assets/images/logo_black.png";
import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <div className="not-found-container">
        <div className="">
            <img className='not-found-logo' src={logo} alt="404"/>
        </div>
        <div className='not-found-content'>
            <h1 className='error-code'>404</h1>
            <p className='error-message'>Page not found</p>
        </div>
        <div className='not-found-buttons'>
            <Link to='/services' className='button-nf service-button'>Services</Link>
            <Link to='/' className='button-nf home-button'>Home</Link>
        </div>
  </div>
  )
}
