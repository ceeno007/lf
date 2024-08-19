// src/components/Partners.js
import React, { useEffect, useState } from 'react';
import '../style/Partners.css';
import { fetchPartnersData } from '../service/partnersApi.js';

const Partners = () => {
    const [partners, setPartners] = useState([]);

    useEffect(() => {
        const getPartnersData = async () => {
            const data = await fetchPartnersData();
            console.log('Fetched partners data:', data); // Log the fetched data to the console

            if (data.length > 0) {
                // Print each URL to the console
                data.forEach(partner => {
                    console.log('Partner image URL:', partner.url);
                });
            }

            setPartners(data);
        };

        getPartnersData();
    }, []);

    useEffect(() => {
        const options = {
            root: null,
            rootMargin: "0px",
            threshold: 0.1,
        };

        const callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add("animate__animated");
                    entry.target.classList.add(entry.target.dataset.animate);
                    entry.target.style.opacity = "1";
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(callback, options);

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
            el.style.opacity = "0"; // Hide elements initially
            observer.observe(el);
        });
    }, []);

    return (
        <section className="partners">
            <h2 className="animate-on-scroll" data-animate="animate__fadeInDown">OUR PARTNERS</h2>
            <div className="partner-logos">
                {partners.length > 0 ? (
                    partners.map((partner) => (
                        <img
                            key={partner.id}
                            className="animate-on-scroll"
                            data-animate="animate__fadeIn"
                            src={partner.url}
                            alt={`Partner ${partner.id}`}
                        />
                    ))
                ) : (
                    <p>No partners available.</p>
                )}
            </div>
        </section>
    );
};

export default Partners;
