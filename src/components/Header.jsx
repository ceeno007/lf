import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../style/Header.css';


const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
    };

    const closeMenu = () => {
        setIsMenuOpen(false);
        document.body.style.overflow = 'auto';
    };

    useEffect(() => {
        if (isMenuOpen) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }
    }, [isMenuOpen]);

    return (
        <header className="header">
            <div className="logo">
                <img
                    src='https://res.cloudinary.com/dws3lnn4d/image/upload/v1724068645/logo2_4_2_fde4ve.png'
                    alt="NNBBA logo"
                    style={{ height: '50px', width: '50px' }}
                />

            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</ScrollLink>
                <ScrollLink to="pricing" smooth={true} duration={500} onClick={closeMenu}>Pricing</ScrollLink>
                <ScrollLink to="events" smooth={true} duration={500} onClick={closeMenu}>Events</ScrollLink>

                <ScrollLink to="community-section" smooth={true} duration={500} onClick={closeMenu}>Community</ScrollLink>
                <ScrollLink to="faq-container" smooth={true} duration={500} onClick={closeMenu}>faqs</ScrollLink>
                {/* <Link to="/gallery" style={{ color: 'black' }} onClick={closeMenu}>Gallery</Link> */}
                <Link to="/signin" className="cta-button" onClick={closeMenu}>Sign in</Link>
            </nav>
            <div className={`menu-toggle ${isMenuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <span></span>
                <span></span>
                <span></span>
            </div>
        </header>
    );
};

export default Header;
