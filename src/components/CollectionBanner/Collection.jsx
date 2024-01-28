import React from 'react';
import './Collection.css';

// Assets
import facilities from '../../assets/Facility.jpg';
import menCollection from '../../assets/Men Collection.png';
import womenCollection from '../../assets/Women Collection.png';

const Collection = () => {
  return (
    <>
      <section id='collection'>
        <div className="collection-wrapper">

          <div className='facility'>
            <img src={facilities} alt="Threads. facilities" />
          </div>

          <div className='our-collection'>

            <div className='collection-div'>
              <div className='collection-details'>
                <h2>Collection For Men</h2>
                <p className='collection-para'>Upto <span style={{color: '#000'}}>40%</span> OFF</p>
                <button>Shop Now</button>
              </div>
              <img src={menCollection} alt="Men Collection" />
            </div>

            <div className='collection-div' style={{backgroundColor: '#58C4E4'}}>
              <div className='collection-details'>
                <h2>Collection For Women</h2>
                <p className='collection-para'>Upto <span style={{color: '#FBD103'}}>40%</span> OFF</p>
                <button>Shop Now</button>
              </div>
              <img src={womenCollection} alt="Women Collection" />
            </div>
            
          </div>
        </div>
      </section>
    </>
  )
}

export default Collection;