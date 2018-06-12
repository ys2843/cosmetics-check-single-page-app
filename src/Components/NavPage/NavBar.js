import React from 'react';
import {Link} from 'react-router-dom';
import '../css/Navbar.css';
import Button from 'material-ui/Button';

const toHome = props => <Link to="/" {...props} />;
const toAbout = props => <Link to="/about" {...props} />;
const toIngCheck = props => <Link to="/ingrecheck" {...props}/>;

const NavBar = () =>
    <nav className="navbar navbar-expand-lg navbar-light nav-bar-pink">
        <Button component={toHome}>
            Home
        </Button>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
        </button>

        <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto ">
                <li className="nav-item nav-li">
                    <Button component={toIngCheck}>
                        Ingredients Check
                    </Button>
                </li>
                <li className="nav-item nav-li">
                    <Button component={toAbout}>
                        About
                    </Button>
                </li>
                <li className="nav-item nav-li">
                    <Button>
                        <a href='https://github.com/ys2843/SkincareWebProject' rel="noopener noreferrer" target="_blank"
                           style={{textDecoration: 'none', color: 'black'}}>VIEW ON GITHUB</a>
                    </Button>
                </li>
            </ul>
        </div>
    </nav>


export default NavBar;