import React from 'react';
import './Banner.css';

const Banner = () => {
  return (
    <>
      <section id='home-banner'>
        <div style={{textAlign: 'center'}}>
          <p>Trending Collections</p>
          <h1>Explore Fashion <br /> collections</h1>
          <a href="#products-container"><button>Shop Now</button></a>
        </div>
      </section>
    </>
  )
}

export default Banner;