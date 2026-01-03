import React from 'react'
import './Navbar.css'


const Navbar = () => {
  return (
    <div className = "navbar">
      <nav>
        <div className="logoimg">
            <img src="src/assets/logoimg.png" alt="Logo" />
        </div>
        <div className="logoName">
            <h2>Research Synergy Forum</h2>
        </div>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Team</li>
            <li>Contact</li>
        </ul>
      </nav>
    </div>
  )
}

export default Navbar
