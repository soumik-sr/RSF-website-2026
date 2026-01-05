import React, { useEffect, useState } from "react";
import "./Footer.css";
import { NavLink } from "react-router-dom";
import { Link } from "react-router-dom";

const Footer = () => {
  const [showTop, setShowTop] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setShowTop(window.scrollY > 300);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <footer className="footer">
        {/* Glow */}
        <div className="footer-glow" />

        <div className="footer-container">
          {/* Brand */}
          <div className="footer-brand">
            <Link to="/"><img src="/logoimg.png" alt="RSF Logo" /></Link>
            <Link to="/"><h2>Research Synergy Forum</h2></Link>
            <p>Bridging research, innovation, and collaboration.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/activities">Events</Link>
            <Link to="/contact">Contact</Link>
          </div>


          {/* Social */}
          <div className="footer-links">
            <h4>Social</h4>

            <a
              href="https://www.instagram.com/rsf_iitdelhi/?hl=en"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.2-.9a1.05 1.05 0 11-1.05-1.05 1.05 1.05 0 011.05 1.05z" />
              </svg>

            </a>

            <a
              href="https://www.linkedin.com/in/research-synergy-forum-5068a538a"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.48 2.48 0 110 4.96 2.48 2.48 0 010-4.96zM3 9h4v12H3zm7 0h3.8v1.64h.05a4.17 4.17 0 013.75-2.06C20.4 8.58 22 10.4 22 14v7h-4v-6.2c0-1.48 0-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.26V21h-4z" />
              </svg>

            </a>
            <a
              href="https://x.com/rsf_iitd?t=iNf4n4eOmn5Mpml6qbyUrQ&s=08"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53A4.48 4.48 0 0016.11 3c-2.63 0-4.64 2.46-4.04 5.02A12.94 12.94 0 013 4s-4 9 5 13a13.07 13.07 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z" />
              </svg>

            </a>

          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4>Contact</h4>
            <a href="mailto:rsf_secretary@iitd.ac.in">rsf_secretary@iitd.ac.in</a>
          </div>
        </div>

        {/* Bottom */}
        <div className="footer-bottom">
          © 2025 Research Synergy Forum. All rights reserved.
        </div>
      </footer>

      {/* Scroll To Top */}
      {showTop && (
        <button className="scroll-top" onClick={scrollToTop}>
          ↑
        </button>
      )}
    </>
  );
};

export default Footer;
