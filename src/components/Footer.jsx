import React, { useEffect, useState } from "react";
import "./Footer.css";

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
            <img src="/logo.png" alt="RSF Logo" />
            <h2>Research Synergy Forum</h2>
            <p>Bridging research, innovation, and collaboration.</p>
          </div>

          {/* Quick Links */}
          <div className="footer-links">
            <h4>Quick Links</h4>
            <a href="/">Home</a>
            <a href="/about">About</a>
            <a href="/events">Events</a>
            <a href="/contact">Contact</a>
          </div>

          {/* Social */}
          <div className="footer-links">
            <h4>Social</h4>

            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <path d="M7 2h10a5 5 0 015 5v10a5 5 0 01-5 5H7a5 5 0 01-5-5V7a5 5 0 015-5zm5 5.5A4.5 4.5 0 1016.5 12 4.5 4.5 0 0012 7.5zm6.2-.9a1.05 1.05 0 11-1.05-1.05 1.05 1.05 0 011.05 1.05z" />
              </svg>
              Instagram
            </a>

            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              className="social-link"
            >
              <svg viewBox="0 0 24 24">
                <path d="M4.98 3.5a2.48 2.48 0 110 4.96 2.48 2.48 0 010-4.96zM3 9h4v12H3zm7 0h3.8v1.64h.05a4.17 4.17 0 013.75-2.06C20.4 8.58 22 10.4 22 14v7h-4v-6.2c0-1.48 0-3.38-2.06-3.38-2.06 0-2.38 1.6-2.38 3.26V21h-4z" />
              </svg>
              LinkedIn
            </a>
          </div>

          {/* Contact */}
          <div className="footer-links">
            <h4>Contact</h4>
            <a href="mailto:rsf@example.com">rsf@example.com</a>
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
