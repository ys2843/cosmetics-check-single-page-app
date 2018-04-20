import React from 'react'
import SearchForm from '../SearchForm/SearchForm'
import '../css/Home.css'
import im from '../../Image/frontPage.png'

const Home = () => (
        <div className="homebox">
            <img src={im} alt="logo"/>
            <SearchForm fire={true}/>
        </div>
)

export default Home
