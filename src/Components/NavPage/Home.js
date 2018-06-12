import React from 'react';
import SearchForm from '../SearchForm/SearchForm';
import '../css/Home.css';
import im from '../../Image/frontPage.png';

const Home = () =>
    <div className="home-box">
        <img src={im} alt="logo" className="home-logo"/>
        <SearchForm fire={true}/>
    </div>;


export default Home;
