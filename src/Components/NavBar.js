import React from 'react'
import {Link} from 'react-router-dom'
import './css/styles.css'
import Button from 'material-ui/Button';


const toHome = props => <Link to="/" {...props} />
const toAbout = props => <Link to="/about" {...props} />

const NavBar = () =>
    <div className={'navbar'}>
        <Button component={toHome}>
            Home
        </Button>
        <Button component={toAbout}>
            About
        </Button>
    </div>


export default NavBar