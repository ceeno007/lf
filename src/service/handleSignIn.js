import axios from 'axios';
import { API } from "../constant";

export const handleSignIn = async (userData) => {
    try {
        const response = await axios.post(`${API}/auth/local`, {
            identifier: userData.email,
            password: userData.password
        });

        return response.data;
    } catch (error) {


        // Check if the response is available in error object
        if (error.response && error.response.data) {
            // Try to extract a meaningful error message
            const errorMessage = error?.message || 'An error occurred';
            throw new Error(errorMessage);
        } else {
            // Handle cases where the response is not structured as expected
            throw new Error('Unable to complete sign-in. Please try again later.');
        }
    }
};
