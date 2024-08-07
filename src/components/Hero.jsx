import React from 'react';
import '../style/Hero.css';
// import { Carousel } from 'react-responsive-carousel';
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
                <a href="/register" className="home-button">Join Now</a>
            </div>
            {/* <div className="carousel-container">
                <Carousel autoPlay infiniteLoop showThumbs={false} showStatus={false}>
                    <div>
                        <img src={Carousel1} alt="Bodybuilding Image 1" />
                    </div>
                    <div>
                        <img src={Carousel2} alt="Bodybuilding Image 2" />
                    </div>
                    <div>
                        <img src={Carousel3} alt="Bodybuilding Image 3" />
                    </div>
                    <div>
                        <img src={Carousel4} alt="Bodybuilding Image 3" />
                    </div>
                </Carousel>
            </div> */}
        </section>
    );
};

export default Hero;
