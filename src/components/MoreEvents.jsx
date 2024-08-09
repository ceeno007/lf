import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import '../style/MoreEvents.css'; // Updated CSS filename
import { fetchEvents } from '../service/eventApiService'; // Adjust as necessary

const MoreEvents = () => {
    const [events, setEvents] = useState([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const getEventData = async () => {
            try {
                const response = await fetchEvents();
                if (Array.isArray(response) && response.length > 0) {
                    setEvents(response);
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
        return <p>Loading events...</p>;
    }

    if (error) {
        return <p>{error}</p>;
    }

    return (
        <section className="more-events">
            <div className="container">
                <Link to="/" className="back-button">Back</Link> {/* Back button */}
                <h1 className="more-events-title">More Events</h1>
                <div className="more-events-list">
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

export default MoreEvents;
