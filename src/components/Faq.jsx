import React, { useState, useEffect } from "react";
import '../style/Faq.css';

const Faq = () => {
    const [faqs, setFaqs] = useState([
        {
            question: "What is LFReturnMe?",
            answer:
                "LFReturnMe is a service that helps people recover their lost items. We provide a platform for users to report lost items and connect with others who may have found them.",
            open: false,
        },
        {
            question: "How do I report a lost item?",
            answer:
                "To report a lost item, simply fill out our lost item description template and submit it to us, or if you find an item with our holographic QR codes, scan the QR code, accurately fill our lost and found form. We'll handle the rest.",
            open: false,
        },
        {
            question: "What information do I need to provide?",
            answer:
                "Please provide as much detail as possible about the lost item, including its description, last known location, and your contact information.",
            open: false,
        },
        {
            question: "How long does it take to recover a lost item?",
            answer:
                "Once you purchase an LFReturnMe tag, log into your account on our website, enter the unique tag ID, and provide details about your item to complete the registration process.",
            open: false,
        },
        {
            question: "Will LFReturnMe offer more features in the future?",
            answer:
                "Yes, we are constantly working on improving our services. Stay tuned for updates and new features by subscribing to our newsletter.",
            open: false,
        },
        {
            question: "How do I create an account with LFReturnMe?",
            answer:
                "To create an account with LFReturnMe, click on the 'Sign Up' button. You will be prompted to enter your email address, create a password, and fill out some basic information. Once you complete the form and verify your email, your account will be ready to use.",
            open: false,
        },
    ]);

    // Toggle FAQ function
    const toggleFAQ = (index) => {
        setFaqs(
            faqs.map((faq, i) => {
                if (i === index) faq.open = !faq.open;
                return faq;
            })
        );
    };

    useEffect(() => {
        // Animation on mount using IntersectionObserver
        const cards = document.querySelectorAll(".faq-card");
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add("animate__animated", "animate__fadeInUp");
                        observer.unobserve(entry.target);
                    }
                });
            },
            { threshold: 0.1 }
        );

        cards.forEach((card) => observer.observe(card));

        return () => {
            // Cleanup observer on unmount
            observer.disconnect();
        };
    }, []);

    return (
        <main className="faq-container">
            <div className="faq-header">
                <h1>Frequently Asked Questions (FAQ)</h1>
                <p>
                    Everything you need to know about our platform
                </p>
            </div>
            <div className="faq-list">
                {faqs.map((faq, index) => (
                    <div
                        key={index}
                        className={`faq-card ${faq.open ? "open" : ""}`}
                        onClick={() => toggleFAQ(index)}
                    >
                        <div className="faq-question">
                            <h2>{faq.question}</h2>
                            <span className="toggle-icon">{faq.open ? "−" : "+"}</span>
                        </div>
                        {faq.open && (
                            <div className="faq-answer">
                                <p>{faq.answer}</p>
                            </div>
                        )}
                    </div>
                ))}
            </div>
        </main>
    );
};

export default Faq;