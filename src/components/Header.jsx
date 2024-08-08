import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';
import { Link } from 'react-router-dom';
import '../style/Header.css';
import logo from '../assets/nnbba.jpg';

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
                <img src={logo} alt="NNBBA logo" />
            </div>
            <nav className={`nav ${isMenuOpen ? 'open' : ''}`}>
                <ScrollLink to="about" smooth={true} duration={500} onClick={closeMenu}>About</ScrollLink>
                <ScrollLink to="events" smooth={true} duration={500} onClick={closeMenu}>Events</ScrollLink>
                <ScrollLink to="contact" smooth={true} duration={500} onClick={closeMenu}>Contact</ScrollLink>
                <Link to="/gallery" style={{ color: 'black' }} onClick={closeMenu}>Gallery</Link>
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
