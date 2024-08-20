import { API_SIGNIN_URL } from './apiEndpoints'; // Make sure this is the correct path

export const signInUser = async (credentials) => {
    try {
        const response = await fetch(API_SIGNIN_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(credentials),
        });

        const result = await response.json();

        if (!response.ok) {
            throw new Error(result.detail || `Failed to sign in: ${response.statusText}`);
        }

        // Store user data in localStorage
        localStorage.setItem('user', JSON.stringify(result));

        return result; // Return the successful result
    } catch (error) {
        // Rethrow the error to be handled by the calling component
        throw new Error(error.message || 'An unknown error occurred during sign-in.');
    }
};
