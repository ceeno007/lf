// src/components/Testimonial.js
import React, { useState, useEffect } from 'react';
import '../style/Testimonial.css';
import { getTestimonials } from '../service/testimonialApi.js';

const Testimonial = () => {
    const [testimonials, setTestimonials] = useState([]);
    const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0);

    useEffect(() => {
        const fetchTestimonials = async () => {
            const data = await getTestimonials();
            setTestimonials(data);
        };

        fetchTestimonials();
    }, []);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTestimonialIndex(prevIndex => (prevIndex + 1) % testimonials.length);
        }, 5000);

        return () => clearInterval(interval);
    }, [testimonials]);

    if (testimonials.length === 0) {
        return <div>Loading...</div>; // Show a loading message while fetching data
    }

    const testimonial = testimonials[currentTestimonialIndex];

    return (
        <section className="testimonials">
            <h2 className="animate__animated animate__fadeInDown">TESTIMONIALS</h2>
            <p className="animate__animated animate__fadeInUp">
                {testimonial.quote}
            </p>
            <div className="testimonial-cards">
                <div className="testimonial-card animate__animated animate__fadeIn">
                    <blockquote>{`"${testimonial.quote}"`}</blockquote>
                    <div className="author">
                        <img src={testimonial.image} alt={testimonial.name} />
                        <div>
                            <strong>{testimonial.name}</strong>
                            <br />
                            <span>{testimonial.role}</span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonial;
