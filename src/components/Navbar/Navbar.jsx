import React, { useContext, useState } from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

// Assets
import Logo from '../../assets/ThreadsLogo.svg';
import cartIcon from '../../assets/icons/Cart.svg';
import profileIcon from '../../assets/icons/Profile.svg';
import searchIcon from '../../assets/icons/Search.svg';

// Components
import Search from '../Search/Search';

// Context
import Context from '../../context/Context';

function Navbar() {

  const { cartCount } = useContext(Context);
  const [search, setSearch] = useState(false);

  const navLinkStyles = ({ isActive }) => {
    return {
      textDecoration: isActive ? 'underline' : 'none',
      fontWeight: isActive ? '600' : 'normal'
    };
  };

  return (
    <>
      <nav>
        <div className="nav-wrapper">
          <div className='logo-and-link'>
            <div className="logo">
              <NavLink to='/' className='nav-link' style={navLinkStyles}><img src={Logo} /></NavLink>
            </div>
            <ul>
              <NavLink to='/products' className='nav-link' style={navLinkStyles}><li>Products</li></NavLink>
            </ul>
          </div>

          <div className="search-and-cart">
            <img src={searchIcon} alt="Search icon" className='search-icon' onClick={() => setSearch(true)} />
            
            <NavLink to='/cart' className='nav-link' style={navLinkStyles}>
              <div className='cart-box'>
                <img src={cartIcon} alt="Cart icon" id='cart-btn' />
                {cartCount > 0 ? <span>{cartCount}</span> : ''}
              </div>
            </NavLink>
            <img src={profileIcon} alt="Profile icon" />
          </div>
        </div>
      </nav>

      {search && <Search setSearch={setSearch} />}
    </>
  );
}

export default Navbar;