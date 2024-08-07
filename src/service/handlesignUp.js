import api from './api';

export const handleSignUp = async (userData) => {
    try {
        const response = await api.post('/users/signup', userData);
        return response.data;
    } catch (error) {
        // Check if the response is available in error object
        if (error.response && error.response.data) {
            throw error.response.data; // Throw meaningful error data if available
        } else {
            // Handle cases where the response is not structured as expected
            throw new Error('Unable to complete sign-up. Please try again later.');
        }
    }
};
