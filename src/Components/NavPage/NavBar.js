import React from 'react'
import {Link} from 'react-router-dom'
import '../css/Navbar.css'
import Button from 'material-ui/Button';

const toHome = props => <Link to="/" {...props} />
const toAbout = props => <Link to="/about" {...props} />
const toIngCheck = props => <Link to="/ingrecheck" {...props}/>

const NavBar = () =>
    <ul className="navbar fixed-top navbarpink">
        <li className='navli'>
            <Button component={toHome}>
                Home
            </Button>
        </li>
        <li className='navli'>
            <Button component={toAbout}>
                About
            </Button>
        </li>
        <li className='navli'>
            <Button component={toIngCheck}>
                Ingredients Check
            </Button>
        </li>
    </ul>


export default NavBar