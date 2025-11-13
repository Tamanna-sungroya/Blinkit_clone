import React from "react";
import { Link } from "react-router-dom";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer">
      <p>© 2025 Zenvy. All rights reserved.</p>
      <Link to="/support" className="support-link">
        💬 Help & Support
      </Link>
    </footer>
  );
};

export default Footer;