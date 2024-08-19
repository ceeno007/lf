import React from 'react';
import '../style/Footer.css';

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-info">
                    <a href="mailto:info@Lfreturnme.com" className="footer-link">
                        info@lfreturnme.com
                    </a>
                    <a href="tel:+234123456789" className="footer-link">
                        +234 8 023 118 899
                    </a>
                    <p className="footer-address">
                        KM 10 Airport Rd AUSTInspire Business Innovation Centre African University of Science & Technology, Galadimawa
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
                <p>&copy;2024 LFReturnMe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
