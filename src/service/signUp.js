import { API_SIGNUP_URL } from "./apiEndpoints";

export const registerUser = async (formData) => {
    try {
        const response = await fetch(API_SIGNUP_URL, {
            method: "POST",
            body: formData,
        });

        // Check if response is OK
        if (!response.ok) {
            // Try to extract error message from response
            const errorData = await response.json();
            const errorMessage = errorData.detail || "Failed to submit the form";
            throw new Error(errorMessage); // Throw error with the message from backend
        }

        const result = await response.json();
        return result; // Return the result of the API call
    } catch (error) {
        // Rethrow error so it can be handled in the component
        throw error;
    }
};
