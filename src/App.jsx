import React from 'react';
import { Route, Routes } from 'react-router-dom';

// Components
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';

// Pages
import Home from './pages/Home';
import Cart from './pages/Cart';
import ProductDetails from './pages/ProductDetails';
import AllProducts from './pages/AllProducts';

const App = () => {
  return (
    <>
      <Navbar />
      
      {/* All routes */}
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='/cart' element={<Cart />} />
        <Route path='/product-details/:prodId' element={<ProductDetails />} />
        <Route path='/products' element={<AllProducts />} />
      </Routes>

      <Footer />
    </>
  )
}

export default App;