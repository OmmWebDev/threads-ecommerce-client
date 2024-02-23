import React, { useState, useEffect } from 'react';
import './Search.css';
import { useNavigate } from 'react-router-dom';

// Hooks
import {fetchDataFromApi} from '../../hooks/fetchData';
import useDebounce from '../../hooks/useDebounce';

const Search = ({setSearch}) => {

  const navigate = useNavigate();
  
  const [query, setQuery] = useState('');
  let [searchData, setSearchData] = useState(null);
  const [isSearched, setIsSearched] = useState(false);
  const debouncedValue = useDebounce(query, 500);
  
  useEffect(() => {
    if (debouncedValue) {
      fetchDataFromApi(`/api/products?[filters][title][$contains]=${debouncedValue}&`).then(res => setSearchData(res));
    }
    if(query.trim() == ''){
      setSearchData(null);
    }
    
    if(query != ''){
      if(query.trim() != ''){
        setIsSearched(true);
      }
    }
  }, [debouncedValue]);
  
  return (
    <>
      <div className='search-modal'>
        <div className="form-field">
          <input 
            type="text" 
            autoFocus 
            placeholder='Search Products' 
            value={query} 
            onChange={(e) => setQuery(e.target.value)}
          />
          <i className="fa-solid fa-xmark" onClick={() => setSearch(false)}></i>
        </div>

        {isSearched && <div className='search-result'>
          {
            searchData && searchData.data.map(elm => (
              <div className='search-items' key={elm.id} onClick={() => {
                navigate(`/product-details/${elm.id}`);
                setSearch(false);
              }}>
                <div className='img-box'>
                  <img src={import.meta.env.VITE_APP_BASE_URL + elm.attributes.image.data.attributes.url} alt="Image" />
                </div>
                <p>{elm.attributes.title}</p>
              </div>
            ))
          }
        </div>}
      </div>
    </>
  )
}

export default Search;