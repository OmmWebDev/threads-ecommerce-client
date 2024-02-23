import React from 'react';
import './Footer.css';

// Assets
import threadsLogo from '../../assets/ThreadsLogo.svg';

const Footer = () => {
  return (
    <>
      <footer id='footer'>
        <div>
          <img src={threadsLogo} alt="Threads. Logo" />
          <div className="socials">
            <i className="fa-brands fa-facebook"></i>
            <i className="fa-brands fa-x-twitter"></i>
            <i className="fa-brands fa-instagram"></i>
          </div>
          <p>All rights reserved @ Threads. 2024</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;