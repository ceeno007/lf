// src/services/testimonialService.js
import axios from 'axios';

const API_URL = `${process.env.REACT_APP_API_URL}/api/testimonies?populate=*`;

export const getTestimonials = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data.map((item) => ({
            id: item.id,
            name: item.attributes.name,
            quote: item.attributes.desc,
            image: item.attributes.image.data.attributes.formats.medium.url,
            role: 'Role', // replace with the correct role if available
        }));
    } catch (error) {
        console.error('Error fetching testimonials:', error);
        return [];
    }
};
