import React from 'react';
import '../style/Contact.css';

const Contact = () => {
    return (
        <section className="contact">
            <div className="container">
                <h1 className="contact-title">Get in Touch</h1>
                <p className="contact-subtitle">
                    We'd love to hear from you! Whether you have a question about events, membership, or anything else, our team is ready to answer all your questions.
                </p>
                <div className="contact-content">
                    <form className="contact-form">
                        <div className="form-group">
                            <input type="text" id="name" name="name" required placeholder="Your Name" />
                            <label htmlFor="name">Name</label>
                        </div>
                        <div className="form-group">
                            <input type="email" id="email" name="email" required placeholder="Your Email" />
                            <label htmlFor="email">Email</label>
                        </div>
                        <div className="form-group">
                            <textarea id="message" name="message" rows="5" required placeholder="Your Message"></textarea>
                            <label htmlFor="message">Message</label>
                        </div>
                        <button type="submit" className="cta-button">Send Message</button>
                    </form>

                </div>
            </div>
        </section>
    );
};

export default Contact;
