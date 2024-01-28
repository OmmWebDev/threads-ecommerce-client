import React from 'react';
import './Newsletter.css';

// Assets
import newsletterImage from '../../assets/Newsletter.png';
import sendIcon from '../../assets/icons/Send.svg';

const Newsletter = () => {
  return (
    <>
      <section id='newsletter'>
        <div>
          <img src={newsletterImage} alt="Newsletter Image" className='newsletter-img' />
          <h3>Subscribe Newsletter</h3>
          <p>Subscribe to our email and get updates in your inbox</p>
          <form>
            <input type="text" placeholder='Enter Your Email' />
            <button type="submit"><img src={sendIcon} alt="Send Icon" /></button>
          </form>
        </div>
      </section>
    </>
  )
}

export default Newsletter;