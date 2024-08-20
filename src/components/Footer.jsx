import React from 'react';
import '../style/Footer.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faXTwitter } from '@fortawesome/free-brands-svg-icons';

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
                    <a href="https://web.facebook.com/profile.php?id=61560463703667" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-facebook-f"></i>
                    </a>
                    <a href="https://x.com/LFReturnMe1" target="_blank" rel="noopener noreferrer">
                        <FontAwesomeIcon icon={faXTwitter} />
                    </a>
                    <a href="https://www.instagram.com/lfreturnme/?next=%2F" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-instagram"></i>
                    </a>
                    <a href="https://www.linkedin.com/company/lf-retune-me/" target="_blank" rel="noopener noreferrer">
                        <i className="fab fa-linkedin"></i>
                    </a>
                </div>
                <p>&copy;2024 LFReturnMe. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
