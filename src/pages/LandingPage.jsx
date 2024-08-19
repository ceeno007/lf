import React, { useEffect } from 'react';
import Header from '../components/Header';
import Hero from '../components/Hero';
import About from '../components/About';
import Event from '../components/Events';
import Nutrition from '../components/Nutrition';
import Footer from '../components/Footer';
import CommunitySection from '../components/Community';
import Faq from '../components/Faq';
import PricingPackages from '../components/PricingPackages';
import Testimonial from '../components/Testimonial';
import Partners from '../components/Partners';
import Team from '../components/Team';

const LandingPage = () => {
    useEffect(() => {

        (function () {
            var s1 = document.createElement("script"),
                s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = "https://embed.tawk.to/6672d93d19f6c616eadbef74/1i0oa175c";
            s1.charset = "UTF-8";
            s1.setAttribute("crossorigin", "*");
            s0.parentNode.insertBefore(s1, s0);
        })();
    }, []);

    return (
        <>
            <Header />
            <Hero />
            <About />
            <PricingPackages />
            <Event />
            <Nutrition />
            {/* <Contact /> */}
            <CommunitySection />
            <Faq />
            <Team />
            <Testimonial />
            <Partners />
            <Footer />
        </>
    );
};

export default LandingPage;
