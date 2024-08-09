import { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const useForgotPasswordLogic = () => {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setMessage('');

        try {
            // Add your forgot password logic here
            // For example, API call to request a password reset
            setMessage('If an account with that email exists, a password reset link has been sent.');
            navigate("/signin", { replace: true }); // Redirect to sign-in or intended path
        } catch (err) {
            setError(err.message);
            console.error("Error requesting password reset:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return {
        email,
        setEmail,
        message,
        error,
        loading,
        handleSubmit
    };
};

export default useForgotPasswordLogic;
