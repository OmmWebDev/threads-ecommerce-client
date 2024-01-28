import React, { useState, useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import './styles/ProductDetails.css';

// Assets
import waveBlob from '../assets/WaveBlob.svg';

// Hooks
import { fetchDataFromApi } from '../hooks/fetchData';

// Context
import Context from '../context/Context';

const ProductDetails = () => {

  const { handleAddToCart } = useContext(Context);

  const { prodId } = useParams();
  const [singleData, setSingleData] = useState();
  const [quantity, setQuantity] = useState(1);

  useEffect(() => {
    fetchSingleData();
  }, [])

  const fetchSingleData = () => {
    fetchDataFromApi(`/api/products?[filters][id]=${prodId}&`).then(res => setSingleData(res));
  }
  
  return (
    <>
      <section id='product-details'>
        <div className="prod-det-wrapper">
          <div className='prod-det-img'>
            <img src={waveBlob} className='back-circle' />
            <img src={`${import.meta.env.VITE_APP_BASE_URL}${singleData && singleData.data[0].attributes.image.data.attributes.url}`} alt="Demo" className='prod-img' />
          </div>
          <div className='prod-det-text'>
            <h2>{singleData && singleData.data[0].attributes.title}</h2>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <p className='price'>&#8377;{singleData && singleData.data[0].attributes.price}</p>
              <p>Free Shipping</p>
            </div>
            <div className='quantity-wrap'>
              <div className='quantity'>
                <p>Quantity</p>
                <div className='quantity-controller'>
                  <button className='minus' onClick={() => setQuantity(quantity - 1)}>-</button>
                  <input type="number" value={quantity} readOnly />
                  <button className='plus' onClick={() => setQuantity(quantity + 1)}>+</button>
                </div>
              </div>
              <button className='add-to-cart' onClick={() => handleAddToCart(singleData && singleData.data[0], quantity)} >Add to cart</button>
            </div>
          </div>
        </div>
        <div className='product-desc'>
          <p>{singleData && singleData.data[0].attributes.productdescription}</p>
        </div>
      </section>
    </>
  )
}

export default ProductDetails;