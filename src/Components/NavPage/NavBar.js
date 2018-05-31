import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
import Button from 'material-ui/Button';

const toHome = props => <Link to="/" {...props} />;
const toAbout = props => <Link to="/about" {...props} />;
const toIngCheck = props => <Link to="/ingrecheck" {...props}/>;

const NavBar = () =>
    <ul className="navbar fixed-top navbarpink">
        <li className='navli'>
            <Button component={toHome}>
                Home
            </Button>
        </li>
        <li className='navli'>
            <Button component={toIngCheck}>
                Ingredients Check
            </Button>
        </li>
        <li className='navli'>
            <Button component={toAbout}>
                About
            </Button>
        </li>
        <li className='navli'>
            <Button>
                <a href='https://github.com/ys2843/SkincareWebProject' rel="noopener noreferrer" target="_blank"
                   style={{textDecoration: 'none', color: 'black'}}>VIEW ON GITHUB</a>
            </Button>
        </li>
    </ul>;


export default NavBar;