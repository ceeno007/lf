import React, { useEffect, useState } from 'react';
import '../style/Hero.css';
import { Link } from 'react-router-dom';
import { fetchVideoUrl } from '../service/heroVideo.js'; // Adjust path as necessary

const Hero = () => {
    const [videoUrl, setVideoUrl] = useState('');

    useEffect(() => {
        const getVideoUrl = async () => {
            try {
                const url = await fetchVideoUrl();
                if (url) {
                    setVideoUrl(url);
                    // console.log('Video URL:', url); // Log the video URL to the console
                } else {
                    // console.error('Video URL is empty');
                }
            } catch (error) {
                // console.error('Error fetching video URL:', error);
            }
        };

        getVideoUrl();
    }, []);

    return (
        <section className="hero">
            <div className="overlay"></div>
            <video autoPlay loop muted playsInline className="background-video">
                {videoUrl && <source src={videoUrl} type="video/mp4" />}
                {!videoUrl && <p>Loading video...</p>}
                Your browser does not support the video tag.
            </video>
            <div className="content">
                <h1 className="hero-title">ONE STOP SHOP FOR LOST AND FOUND ITEMS</h1>
                <p className="hero-subtitle">Lost or found something important? Join LFReturnMe, where we connect people to reunite lost items with their rightful owners quickly and securely. Our affordable tags and supportive community ensure no cherished item stays lost. Join us today and be part of the solution!</p>
                <div className="button-container">
                    <Link to="/register" className="home-button">Join Now</Link>
                    <Link to="/found-items" className="home-button">Found an Item</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
