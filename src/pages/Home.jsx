import React, { useEffect, useContext } from 'react';

// Components
import Banner from '../components/Banner/Banner';
import Collection from '../components/CollectionBanner/Collection';
import Products from '../components/Products/Products';
import Brand from '../components/Brand/Brand';
import Newsletter from '../components/Newsletter/Newsletter';

// Hooks
import { fetchDataFromApi } from '../hooks/fetchData';

// Context
import Context from '../context/Context';

const Home = () => {

  const {products, setProducts} = useContext(Context);

  useEffect(() => {
    getProducts();
  }, [])

  const getProducts = () => {
    fetchDataFromApi('/api/products?pagination[limit]=8&').then(res => {
      setProducts(res);
    })
  }
  
  return (
    <>
      <Banner />
      <Collection />
      <Products 
        title='Popular Products' 
        para='These are popular products.' 
        allBtn={true} 
        products={products}
      />
      <Brand />
      <Newsletter />
    </>
  )
}

export default Home;