import React from 'react'
import './navbar_updated.css'

const NavbarUpdated = () => {
    return (

        <div className="navbar">
            <div className="nav-left">
                <img src="src/assets/logoimg.png" alt="RSF Logo" />
                <h1>Research Synergy Forum</h1>
            </div>
            <div className="nav-links">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#team">Team</a>
                <a href="#contact">Contact</a>
            </div>
        </div>


    )
}

export default NavbarUpdated;
