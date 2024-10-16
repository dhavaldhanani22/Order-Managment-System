import React from 'react';
import './Footer.css';

const Footer = () => {
    return (
        <div className="footer">
            <p>&copy; 2024 Order Management System App</p>
            <div className="footer-links">
                <a href="/privacy-policy" className="footer-link">Home</a>
                <a href="/terms-of-service" className="footer-link">Product</a>
                <a href="/contact" className="footer-link">About</a>
            </div>
        </div>
    );
};

export default Footer;