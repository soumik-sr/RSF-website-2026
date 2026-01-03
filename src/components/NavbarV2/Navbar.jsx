import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // Lock body scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
    return () => (document.body.style.overflow = "auto");
  }, [open]);

  return (
    <header className="navbar">
      <div className="navbar-container">

        {/* Left */}
        <div className="navbar-left">
          <img src="/logo.png" alt="RSF Logo" className="navbar-logo" />
          <span className="navbar-title">Research Synergy Forum</span>
        </div>

        {/* Desktop Links */}
        <nav className="navbar-links">
          <NavLink to="/" end>Home</NavLink>
          <NavLink to="/about">About</NavLink>
          {/* <NavLink to="/team">Team</NavLink> */}
          <NavLink to="/activities">Activities</NavLink>
          <NavLink to="/contact">Contact</NavLink>
        </nav>

        {/* Hamburger */}
        <div
          className={`hamburger ${open ? "open" : ""}`}
          onClick={() => setOpen(!open)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>

      {/* Overlay */}
      {open && <div className="menu-overlay" onClick={() => setOpen(false)} />}

      {/* Mobile Menu */}
      <div className={`mobile-menu ${open ? "show" : ""}`}>
        <NavLink to="/" end onClick={() => setOpen(false)}>Home</NavLink>
        <NavLink to="/about" onClick={() => setOpen(false)}>About</NavLink>
        {/* <NavLink to="/team" onClick={() => setOpen(false)}>Team</NavLink> */}
        <NavLink to="/activities" onClick={() => setOpen(false)}>Activities</NavLink>
        <NavLink to="/contact" onClick={() => setOpen(false)}>Contact</NavLink>
      </div>
    </header>
  );
}
