import React, { useContext } from 'react';
import './styles/Cart.css';

// Context
import Context from '../context/Context';

const Cart = () => {

  const {cartItems, handleRemoveFromCart, handleCartProductQuantity, cartSubTotal} = useContext(Context);
  
  return (
    <>
      <section id='cart-page'>
        <div className="cart-wrapper">
          <h2>Your Cart Items</h2>
          <p>Back to shopping</p>
          <div className='item-box'>
            {
              cartItems.map(elm => {
                return <div className='cart-items' key={elm.id}>
                <div className='item-image'>
                  <img src={import.meta.env.VITE_APP_BASE_URL + elm.attributes.image.data.attributes.url} alt="Items" />
                </div>
                <div className='item-text'>
                  <p className='item-title'>{elm.attributes.title}</p>
                  <button className='remove-item' onClick={() => handleRemoveFromCart(elm)}>Remove</button>
                </div>
                <div className='price-and-quantity'>
                  <div className='item-price'>
                    <p>&#8377;{elm.attributes.price}</p>
                  </div>
                  <div className='item-quantity'>
                    <div className='quantity-controller'>
                      <button className='minus' onClick={() => handleCartProductQuantity('dec', elm)}>-</button>
                      <input type="number" value={elm.attributes.quantity} readOnly />
                      <button className='plus' onClick={() => handleCartProductQuantity('inc', elm)}>+</button>
                    </div>
                  </div>
                  <div className='item-total'>
                    <p>&#8377;{elm.attributes.price * elm.attributes.quantity}</p>
                  </div>
                </div>
              </div>
              })
            }
          </div>

          {!cartItems?.length && <p>Empty Cart...</p>}
          
          <div className='checkout'>
            <p>Subtotal: &#8377;{cartSubTotal}</p>
            <button>Checkout</button>
          </div>
        </div>
      </section>
    </>
  )
}

export default Cart;