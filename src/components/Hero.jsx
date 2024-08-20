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
                <h1 className="hero-title">One-stop for lost and found</h1>
                <p className="hero-subtitle">Lost or found something? Join LFReturnMe to quickly and securely reconnect lost items with their owners. Our affordable tags and community make sure no cherished item stays lost. Join us today!</p>
                <div className="button-container">
                    <Link to="/register" className="home-button">Join Now</Link>
                    <Link to="https://tag-details.lfreturnme.com/" className="home-button-found">Found an Item</Link>
                </div>
            </div>
        </section>
    );
};

export default Hero;
