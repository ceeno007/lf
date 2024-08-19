import React, { useEffect } from "react";
import '../style/Community.css';

const CommunitySection = () => {
    useEffect(() => {
        // IntersectionObserver to animate elements on scroll
        const animateOnScroll = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add(
                        "animate__animated",
                        entry.target.dataset.animate
                    );
                    observer.unobserve(entry.target);
                }
            });
        };

        const observer = new IntersectionObserver(animateOnScroll, {
            threshold: 0.1,
        });

        document.querySelectorAll(".animate-on-scroll").forEach((el) => {
            observer.observe(el);
        });
    }, []);

    return (
        <section className="section community-section">
            <div
                className="columns is-vcentered animate-on-scroll"
                data-animate="animate__fadeInLeft"
            >
                <div className="column is-half image-box"></div>
                <div
                    className="column is-half community-content animate-on-scroll"
                    data-animate="animate__fadeInRight"
                >
                    <h2 className="title is-2">JOIN OUR VIBRANT COMMUNITY</h2>
                    <p className="content">
                        At LFReturnMe, we believe in the power of community. Connect with
                        like-minded individuals, share your experiences, and help each other
                        find lost items. Whether you're here to report a lost item, offer
                        support, or gather success stories, our community is here for you.
                        Together, we can make a difference. Join us today and be part of a
                        caring, proactive network committed to reuniting people with their
                        belongings.
                    </p>
                    <a
                        href="https://docs.google.com/forms/d/e/1FAIpQLScq6B6IX64sIHBZy1QFJiQ955QiOOfyJlkhhEEKgocCNaI-Zw/viewform?pli=1"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="button is-primary"
                    >
                        Join our Community →
                    </a>
                </div>
            </div>
        </section>
    );
};

export default CommunitySection;
