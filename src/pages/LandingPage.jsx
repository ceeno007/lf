import React from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Event from '../components/Events';
import Nutrition from '../components/Nutrition';
import Contact from '../components/Contact';
import Footer from '../components/Footer';



const LandingPage = () => {
    return (
        <>
            <Header />
            <Hero />
            <About />
            <Event />
            <Nutrition />
            <Contact />
            <Footer />
        </>
    );
};

export default LandingPage;
