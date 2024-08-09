import axios from 'axios';
// import { API } from "../constant";

export const handleSignUp = async (userData) => {
    try {
        const response = await axios.post(`${process.env.REACT_APP_API_URL}/auth/local/register`, userData);

        return response.data;
    } catch (error) {
        console.error('Sign-up error:', error.response); // Log the full error response for debugging

        // Check if the response is available in error object
        if (error.response) {
            const status = error.response.status;
            let errorMessage;

            if (status === 400) {
                errorMessage = 'The user already exists. Please try again with a different email or username.';
            } else {
                errorMessage = error.response.data.message || 'An error occurred during sign-up. Please try again later.';
            }

            throw new Error(errorMessage);
        } else {
            // Handle cases where the response is not structured as expected
            throw new Error('Unable to complete sign-up. Please try again later.');
        }
    }
};
