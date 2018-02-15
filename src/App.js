import React from 'react'
import {
    BrowserRouter as Router,
    Route
} from 'react-router-dom'
import About from './Components/About'
import Home from './Components/Home'
import NavBar from './Components/NavBar'
import './App.css'
import Divider from 'material-ui/Divider';
import Footer from "./Components/Footer";
import SearchPage from './Components/SearchPage/SearchPage'
import NotFound from './Components/NotFound'

const App = () =>
    <Router className='router'>
        <div className='box'>
            <NavBar/>
            <br/>
            <Divider/>
            <br/>
            <div className='container'>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/search/" component={SearchPage}/>
            </div>
            <br/>
            <Footer/>
        </div>
    </Router>

export default App
