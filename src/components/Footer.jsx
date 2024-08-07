import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <a href="mailto:info@nnbba.com" className="footer-link">
                        info@nnbba.com
                    </a>
                    <a href="tel:+234123456789" className="footer-link">
                        +234 123 456 789
                    </a>
                    <p className="footer-address">
                        123 Fitness Street, Lagos, Nigeria
                    </p>
                </div>
                <div className="social-media">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-twitter"></i>
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://youtube.com" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-youtube"></i>
                    </a>
                </div>
                <p>&copy; 2024 Nigeria Natural Bodybuilding Association. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
