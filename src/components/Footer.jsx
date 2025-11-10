import React from "react";
import "./Footer.css";
import {
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaEnvelope,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-overlay"></div>

      <div className="footer-content">
        <h2 className="footer-title">Ministry of Recruiters</h2>
        <p className="footer-text">
          Building connections that matter — empowering businesses and job
          seekers across the globe since 2011.
        </p>

        <div className="social-icons">
          <a href="https://facebook.com" target="_blank" rel="noreferrer">
            <FaFacebookF />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noreferrer">
            <FaLinkedinIn />
          </a>
          <a href="https://instagram.com" target="_blank" rel="noreferrer">
            <FaInstagram />
          </a>
          <a href="mailto:info@morjobs.sg">
            <FaEnvelope />
          </a>
        </div>

        <div className="footer-links">
          <a href="/privacy">Privacy Policy</a>
          <span>|</span>
          <a href="/terms">Terms of Use</a>
          <span>|</span>
          <a href="/faq">FAQ</a>
        </div>

        <p className="footer-bottom">
          © 2025 Ministry of Recruiters PTE LTD. All Rights Reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
