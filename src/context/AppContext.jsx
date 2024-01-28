import React, { useEffect, useState } from 'react';

// Context
import Context from './Context';

const AppContext = ({children}) => {

  const [products, setProducts] = useState(null);
  const [cartItems, setCartItems] = useState([]);
  const [cartCount, setCartCount] = useState(0);
  const [cartSubTotal, setCartSubTotal] = useState(0);

  useEffect(() => {
    let subTotal = 0;
    cartItems.map(items => subTotal += items.attributes.price * items.attributes.quantity)
    setCartSubTotal(subTotal);
    setCartCount(cartItems.length);
  }, [cartItems]);

  const handleAddToCart = (product, quantity) => {
    let items = [...cartItems];
    let index = items.findIndex(prod => prod.id === product.id);
    if(index !== -1){
      items[index].attributes.quantity += quantity;
    }else{
      product.attributes.quantity = quantity;
      items = [...items, product];
    }
    setCartItems(items);
  }
  const handleRemoveFromCart = (product) => {
    let items = [...cartItems];
    items = items.filter(prod => prod.id !== product.id);
    setCartItems(items);
  }
  const handleCartProductQuantity = (type, product) => {
    let items = [...cartItems];
    let index = items.findIndex(prod => prod.id === product.id);
    if(type == 'inc'){
      if(items[index].attributes.quantity === 10) return;
      else {items[index].attributes.quantity += 1}
    }else{
      if(items[index].attributes.quantity === 1) return;
      else {items[index].attributes.quantity -= 1}
    }
    setCartItems(items);
  }
  
  return (
    <Context.Provider value={{
      products,
      setProducts,
      cartItems,
      setCartItems,
      cartCount,
      setCartCount,
      cartSubTotal,
      setCartSubTotal,
      handleAddToCart,
      handleRemoveFromCart,
      handleCartProductQuantity
    }}>
      {children}
    </Context.Provider>
  )
}

export default AppContext;