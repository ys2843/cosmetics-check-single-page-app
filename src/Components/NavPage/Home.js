import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import '../css/styles.css'
import im from '../../Image/frontPage.jpg'

const Home = () => (
    <div className='homeBox'>
        <img src={im} height={window.innerWidth / 5} alt="logo"/>
        <br/>
        <SearchForm/>
    </div>
)

export default Home
