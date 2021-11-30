import React from 'react'
import {Link} from 'react-router-dom'
import './Nav.css';

function NavBae() {
    return (
        <div className="body-div">
        <div className="main-div">
            <Link className ='home' to="/" >Home</Link>
            <Link className ='about'to="/Service">Service</Link>
           
            <Link className ='about'to="/About">About</Link>
            <Link className ='Contact'to="/Contact">Contact</Link>
            <Link className ='about'to="/Search">Search</Link>
            <Link className ='about'to="/Login">Login</Link>
            
        </div>
        </div>
    )
}

export default NavBae
