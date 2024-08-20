// import { API_URL } from "./config.js";
import { API_BASE_CMS_URL } from '../service/apiEndpoints.js';
export const fetchEvents = async () => {
    try {
        const response = await fetch(`${API_BASE_CMS_URL}/api/events`);
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }
        const data = await response.json(); // Parse JSON from the response
        return data.data; // Return the array of event objects
    } catch (error) {
        console.error('Error fetching event data:', error);
        return [];
    }
};
