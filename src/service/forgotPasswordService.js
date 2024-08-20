import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { API_FORGOT_PASSWORD_URL } from './apiEndpoints.js'; // Ensure the API URL is correct

const useForgotPasswordLogic = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');
    const navigate = useNavigate(); // Hook for navigation

    const triggerPopup = (message, type) => {
        // console.log(`Triggering popup: ${message}, Type: ${type}`);
        setPopupMessage(message);
        setPopupType(type);
        setTimeout(() => {
            // console.log("Hiding popup");
            setPopupMessage('');
            setPopupType('');
        }, 3000); // Hide after 3 seconds
    };

    const handleForgotPassword = async (event) => {
        event.preventDefault();
        setLoading(true);
        setPopupMessage('');
        setPopupType('');


        try {
            const response = await fetch(API_FORGOT_PASSWORD_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ email_address: email }), // Send the email as email_address
            });



            if (!response.ok) {
                const errorResponse = await response.json();

                throw new Error(errorResponse.message || 'Failed to send reset instructions.');
            }

            triggerPopup('Password reset instructions sent to your email.', 'success');

            // Redirect to sign-in page after a short delay
            setTimeout(() => {
                navigate('/signin');
            }, 3000); // Wait for 3 seconds before redirecting
        } catch (err) {

            triggerPopup(err.message || 'Failed to send reset instructions.', 'failure');
        } finally {
            setLoading(false);

        }
    };

    return {
        email,
        setEmail,
        loading,
        popupMessage,
        popupType,
        handleForgotPassword,
    };
};

export default useForgotPasswordLogic;
