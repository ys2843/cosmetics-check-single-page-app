import React from 'react'
import {
    BrowserRouter as Router,
    Switch,
    Route
} from 'react-router-dom'
import About from './Components/NavPage/About'
import Home from './Components/NavPage/Home'
import NavBar from './Components/NavPage/NavBar'
import './App.css'
import Footer from "./Components/NavPage/Footer";
import SearchPage from './Components/SearchPage/SearchPage'
import NotFound from './Components/NavPage/NotFound'

const App = () =>
    <Router>
        <div className='box'>
            <NavBar/>
            <br/>
            <br/>
            <br/>
            <br/>
            <div className='container'>
                <Switch>
                    <Route exact path="/" component={Home}/>
                    <Route path="/about" component={About}/>
                    <Route path="/search/" component={SearchPage}/>
                    <Route component={NotFound}/>
                </Switch>
            </div>
            <Footer/>
        </div>
    </Router>

export default App
