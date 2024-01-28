import React, {useEffect, useRef} from 'react';
import { useNavigate } from 'react-router-dom';
import './Product.css';

// Assets
import cartAddIcon from '../../../assets/icons/Cart-add.svg';

const Product = ({id, title, price, image}) => {

  const navigate = useNavigate();

  let productsCardRef = useRef();
  let addToCartBtn = useRef();

  // Show add to cart btn when mouse enter to the thumbnail
  const showAddToCartBtnOnHover = () => {
    productsCardRef.current.addEventListener('mouseenter', () => {
      addToCartBtn.current.style.opacity = '1';
    });
  }

  // Remove add to cart btn when mouse leave the thumbnail
  const removeAddToCartBtn = () => {
    productsCardRef.current.addEventListener('mouseleave', () => {
      addToCartBtn.current.style.opacity = '0';
    });
  };

  // Use the effect functions
  useEffect(() => {
    showAddToCartBtnOnHover();
    removeAddToCartBtn();
  }, []);
  
  return (
    <>
      <div className='product-card' ref={productsCardRef}>
        <div className="thumbnail">
          <img src={image} alt="" onClick={() => navigate(`/product-details/${id}`)} />
        </div>
        <button className='add-cart' ref={addToCartBtn}>
          <img src={cartAddIcon} alt='Add to Cart' />
        </button>
        <div className="product-details">
          <span className='title' onClick={() => navigate(`/product-details/${id}`)}>{title}</span>
          <span className='price'>&#8377;{price}</span>
        </div>
      </div>
    </>
  )
}

export default Product;