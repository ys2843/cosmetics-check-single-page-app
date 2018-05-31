import React from 'react';
import '../css/styles.css';
import SearchForm from '../SearchForm/SearchForm';
import ProductContainer from './ProductContainer';


const SearchPage = () =>

    <div className='searchpage'>
        <SearchForm fire={false}/>
        <br/>
        <ProductContainer/>
    </div>

export default SearchPage
