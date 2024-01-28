import React from 'react';
import './Brand.css';

// Assest
import NikeLogo from '../../assets/brands/Nike.svg';
import HandMLogo from '../../assets/brands/HandM.png';
import LevisLogo from "../../assets/brands/Levi's.png";
import PumaLogo from '../../assets/brands/Puma.png';
import USPoloLogo from '../../assets/brands/USPolo.png';

const Brand = () => {

  let brandLogos = [
    {
      name: 'Nike Logo',
      url: NikeLogo
    },
    {
      name: 'HandMLogo',
      url: HandMLogo
    },
    {
      name: "Levi's Logo",
      url: LevisLogo
    },
    {
      name: 'USPolo Logo',
      url: USPoloLogo
    },
    {
      name: 'Puma Logo',
      url: PumaLogo
    },
  ]
  
  return (
    <>
      <section id='home-brands'>
        <div className="brand-wrapper">
          <h2>Top Brand Deals</h2>
          <p>Up To <span style={{color: '#FBD103'}}>45%</span> OFF on brands</p>
          <div className="brands-img">
            {
              brandLogos.map((elm, index) => {
                return <div className='each-image' key={index}><img src={elm.url} alt={elm.name} /></div>
              })
            }
          </div>
        </div>
      </section>
    </>
  )
}

export default Brand;