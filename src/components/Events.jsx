import React, { useEffect, useState } from 'react';
import '../style/Events.css';
import { fetchEvents } from '../service/eventApiService.js';
import { Link } from 'react-router-dom';
const Events = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getEventData = async () => {
            try {
                const response = await fetchEvents();
                if (Array.isArray(response) && response.length > 0) {
                    // Sort events by date in ascending order
                    const sortedEvents = response.sort((a, b) => new Date(a.attributes.Date) - new Date(b.attributes.Date));

                    // Slice the array to get only the last 3 events, excluding the most recent one
                    const latestThreeEvents = sortedEvents.slice(-4, -1);
                    setEvents(latestThreeEvents);
                } else {
                    setEvents([]);
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
        let cleanedUrl = url ? url.replace(/['"]/g, '').trim() : '';
        if (cleanedUrl && !/^https?:\/\//i.test(cleanedUrl)) {
            cleanedUrl = `https://${cleanedUrl}`;
        }
        return cleanedUrl;
    };

    if (loading) {
        return <p className='event-description'>Loading events...</p>;
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
                        <p className='event-description'>No events available.</p>
                    )}
                </div>
                {events.length === 3 && (
                    <div className="more-container">
                        <Link to="/more-events" className="more-link-event">More Events</Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Events;
