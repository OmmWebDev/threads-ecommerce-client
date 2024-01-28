import React, { useEffect, useContext } from 'react';
import './styles/AllProducts.css';

// Component
import Products from '../components/Products/Products';

// Context
import Context from '../context/Context';

// Hooks
import { fetchDataFromApi } from '../hooks/fetchData';

const AllProducts = () => {

  const {products, setProducts} = useContext(Context);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    fetchDataFromApi('/api/products?').then(res => setProducts(res))
  }
  
  return (
    <>
      <Products 
        title='Products' 
        para='These are all products.' 
        allBtn={false} 
        products={products}
      />
    </>
  )
}

export default AllProducts;