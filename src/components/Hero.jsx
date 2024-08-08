import React from 'react';
import '../style/Hero.css';
import { Link, } from 'react-router-dom';

import 'react-responsive-carousel/lib/styles/carousel.min.css';


const Hero = () => {
    return (
        <section className="hero">
            <div className="overlay"></div>
            <video autoPlay loop muted playsInline className="background-video">
                <source src="https://assets.mixkit.co/videos/40248/40248-720.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1 className="hero-title">Nigeria Natural Bodybuilding Association</h1>
                <p className="hero-subtitle">Fostering a community of like-minded individuals dedicated to health, fitness, and self-improvement.</p>
                <Link to="/register" className="home-button">Join Now</Link>
            </div>

        </section>
    );
};

export default Hero;
