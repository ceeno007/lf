import React from 'react';
import '../style/Events.css';
// import Carousel1 from '../assets/carousel1.jpg';
// import Carousel2 from '../assets/carousel2.jpg';
// import Carousel3 from '../assets/carousel3.jpg';


const Events = () => {
    const events = [
        {
            title: "Ongoing Event 1",
            date: "August 12, 2024",
            description: "Join us for an exciting bodybuilding event featuring top athletes.",
            // image: { Carousel1 }
        },
        {
            title: "Master Class 1",
            date: "September 5, 2024",
            description: "Learn from the best in the industry in our exclusive master class.",
            // image: { Carousel2 }
        },
        {
            title: "Course 1",
            date: "October 15, 2024",
            description: "Enroll in our comprehensive course to enhance your bodybuilding skills.",
            // image: { Carousel3 }
        }
    ];

    return (
        <section className="events">
            <div className="container">
                <h1 className="events-title">Upcoming Events</h1>
                <div className="events-list">
                    {events.map((event, index) => (
                        <div key={index} className="event-card">
                            {/* <img src={event.image} alt={event.title} className="event-image" /> */}
                            <div className="event-info">
                                <h2 className="event-title">{event.title}</h2>
                                <p className="event-date">{event.date}</p>
                                <p className="event-description">{event.description}</p>
                                <a href="#register" className="cta-button">Register Now</a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Events;
