import React from 'react';
import {Link} from 'react-router-dom';
import './Products.css';

// Components
import Product from './Product/Product';

function Products({ title, para, allBtn, products }) {
  return (
    <>
      <section id='products-container'>
        <div className="products-wrapper">
          <div className='sec-heading'>{title}</div>
          <p>{para}</p>
          <div className="product-filter">
            <button type='button' className='filter-opt'>All</button>
            {/* <button type='button' className='filter-opt'>Men</button>
            <button type='button' className='filter-opt'>Women</button> */}
          </div>
          <div className="products">
            {
              products && products.data.map((elm) => (
                <Product 
                  key={elm.id} 
                  id={elm.id}
                  title={elm.attributes.title} 
                  price={elm.attributes.price}
                  image={`${import.meta.env.VITE_APP_BASE_URL}${elm.attributes.image.data.attributes.url}`}
                />
              ))
            }
          </div>
          {allBtn && <Link to='/products' className='product-link'><button className='see-all'>See All</button></Link>}
        </div>
      </section>
    </>
  );
}

export default Products;