import React, { useEffect, useState } from 'react';
import '../style/Events.css';
import { fetchEvents } from '../service/eventApiService';

const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getEventData = async () => {
            try {
                const response = await fetchEvents();
                // Check if response is an array and has the correct data structure
                if (Array.isArray(response) && response.length > 0) {
                    setEvents(response);
                } else {
                    setEvents([]); // No events
                }
            } catch (err) {
                setError('Failed to fetch events');
            } finally {
                setLoading(false);
            }
        };

        getEventData();
    }, []);

    const cleanUrl = (url) => {
        // Remove quotes and trim whitespace
        let cleanedUrl = url ? url.replace(/['"]/g, '').trim() : '';

        // Add https:// if the URL doesn't already start with it
        if (cleanedUrl && !/^https?:\/\//i.test(cleanedUrl)) {
            cleanedUrl = `https://${cleanedUrl}`;
        }

        return cleanedUrl;
    };

    if (loading) {
        return <p>Loading events...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="events">
            <div className="container">
                <h1 className="events-title">Upcoming Events</h1>
                <div className="events-list">
                    {events.length > 0 ? (
                        events.map((event) => (
                            event.attributes.Title && event.attributes.Content ? (
                                <div key={event.id} className="event-card">
                                    <div className="event-info">
                                        <h2 className="event-title">{event.attributes.Title}</h2>
                                        <p className="event-date">{new Date(event.attributes.Date).toDateString()}</p>
                                        <p className="event-description">{event.attributes.Content}</p>
                                        {event.attributes.URL ? (
                                            <a href={cleanUrl(event.attributes.URL)} className="cta-button" target="_blank" rel="noopener noreferrer">
                                                Register Now
                                            </a>
                                        ) : null}
                                    </div>
                                </div>
                            ) : null
                        ))
                    ) : (
                        <p>No events available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Events;
