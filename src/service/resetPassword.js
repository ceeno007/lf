import { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { API_RESET_PASSWORD_URL } from './apiEndpoints.js'; // Ensure the API URL is correct

const useResetPasswordLogic = () => {
    const [newPassword, setNewPassword] = useState('');
    const [retypePassword, setRetypePassword] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const [retypePasswordError, setRetypePasswordError] = useState('');
    const [popupMessage, setPopupMessage] = useState('');
    const [popupType, setPopupType] = useState('');
    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();
    const { token } = useParams(); // Get the token from the URL

    const triggerPopup = (message, type) => {
        setPopupMessage(message);
        setPopupType(type);
        setTimeout(() => {
            setPopupMessage('');
            setPopupType('');
        }, 3000);
    };

    const validatePassword = (password) => {
        const minLength = 8;
        const hasUppercase = /[A-Z]/.test(password);
        const hasLowercase = /[a-z]/.test(password);
        const hasNumber = /\d/.test(password);
        const hasSpecialChar = /[!@#$%^&*(),.?":{}|<>]/.test(password);

        if (password.length < minLength) return `Password must be at least ${minLength} characters long.`;
        if (!hasUppercase) return "Password must include at least one uppercase letter.";
        if (!hasLowercase) return "Password must include at least one lowercase letter.";
        if (!hasNumber) return "Password must include at least one number.";
        if (!hasSpecialChar) return "Password must include at least one special character.";
        return null;
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        setPasswordError('');
        setRetypePasswordError('');
        setIsLoading(true);

        const validationError = validatePassword(newPassword);
        if (validationError) {
            setPasswordError(validationError);
            setIsLoading(false);
            return;
        }

        if (newPassword !== retypePassword) {
            setRetypePasswordError("Passwords do not match!");
            setIsLoading(false);
            return;
        }

        try {
            const response = await fetch(API_RESET_PASSWORD_URL, {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({ 'token': token, 'new_password': newPassword }),
            });


            if (!response.ok) {
                const errorResponse = await response.json();
                throw new Error(errorResponse.message || 'Failed to reset password.');
            }

            triggerPopup('Password reset successfully! Redirecting...', 'success');

            // Redirect after 3 seconds
            setTimeout(() => navigate('/signin', { replace: true }), 3000);
        } catch (err) {
            triggerPopup(err.message || 'Failed to reset password.', 'failure');
        } finally {
            setIsLoading(false);
        }
    };

    return {
        newPassword,
        setNewPassword,
        retypePassword,
        setRetypePassword,
        passwordError,
        retypePasswordError,
        popupMessage,
        popupType,
        isLoading,
        handleSubmit,
    };
};

export default useResetPasswordLogic;
