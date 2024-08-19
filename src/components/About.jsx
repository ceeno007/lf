import React from 'react';
import '../style/About.css';


const About = () => {
    return (
        <section className="about">
            <div className="container">
                <h1 className="about-title">About LfreturnMe</h1>
                {/* <p className="about-subtitle">
                    Welcome to the Nigeria Natural Bodybuilding Association (NNBBA), the premier organization dedicated to promoting the sport of natural bodybuilding in Nigeria.
                </p> */}
                <div className="about-content">
                    <div className="about-image">
                        <img src='https://res.cloudinary.com/dws3lnn4d/image/upload/v1720443870/IMG-20240417-WA0043_imwtgy.jpg' alt="President of NNBBA" />
                        <p className="image-label">Mrs. Adeline Clinton-Agbor</p>
                    </div>
                    <div className="about-text">
                        <p>
                            Welcome to LFReturnMe, your trusted partner in recovering lost items swiftly and securely. Our mission is to reunite you with your belongings through innovative technology and unparalleled customer service. With a commitment to professionalism and reliability, we ensure that every lost item finds its way back to its owner. Join our community and experience peace of mind knowing that we're here to help, 24/7. At LFReturnMe, we turn lost into found.

                            Our Values:
                            Trust: Dependable and secure services
                            Innovation: Cutting-edge solutions
                            Community: Supportive and collaborative environment
                        </p>
                        {/* <p>
                            We aim to provide a platform for athletes to develop their physiques without the use of performance-enhancing substances and to promote a lifestyle that values discipline, hard work, and dedication.
                        </p>
                        <p>
                            Through our events, training programs, and resources, we strive to empower individuals to reach their full potential and become the best versions of themselves.
                        </p> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
