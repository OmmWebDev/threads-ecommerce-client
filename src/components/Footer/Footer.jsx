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
            <div></div>
            <div></div>
            <div></div>
          </div>
          <p>All rights reserved @ Threads. 2024</p>
        </div>
      </footer>
    </>
  )
}

export default Footer;