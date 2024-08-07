import React from 'react';
import '../style/About.css';
import PresidentImg from '../assets/president.jpg';

const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h1 className="about-title">About NNBBA</h1>
                <p className="about-subtitle">
                    Welcome to the Nigeria Natural Bodybuilding Association (NNBBA), the premier organization dedicated to promoting the sport of natural bodybuilding in Nigeria.
                </p>
                <div className="about-content">
                    <div className="about-image">
                        <img src={PresidentImg} alt="President of NNBBA" />
                        <p className="image-label">Mr. Arinze T Oraekwotu <br />The president of the Nigeria Bodybuilding Association</p>
                    </div>
                    <div className="about-text">
                        <p>
                            Our mission is to foster a community of like-minded individuals who share a passion for health, fitness, and self-improvement through natural bodybuilding.
                        </p>
                        <p>
                            We aim to provide a platform for athletes to develop their physiques without the use of performance-enhancing substances and to promote a lifestyle that values discipline, hard work, and dedication.
                        </p>
                        <p>
                            Through our events, training programs, and resources, we strive to empower individuals to reach their full potential and become the best versions of themselves.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
