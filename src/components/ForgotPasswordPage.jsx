// ForgotPasswordPage.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import '../style/ForgotPassword.css'; // Ensure the path is correct

const ForgotPasswordPage = () => {
    const [email, setEmail] = useState('');
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState('');
    const [error, setError] = useState('');

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError('');
        setSuccess('');

        try {
            // Mock API call
            // await someApiCallToResetPassword(email);

            setSuccess('Password reset instructions sent to your email.');
        } catch (err) {
            setError('Failed to send reset instructions.');
            console.error("Error sending reset instructions:", err.message);
        } finally {
            setLoading(false);
        }
    };

    return (
        <section className="forgot-password-page">
            <div className="forgot-password-container">
                <h1 className="forgot-password-title">Forgot Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="forgot-password-form-group">
                        <label htmlFor="email">Email</label>
                        <input
                            type="email"
                            id="email"
                            name="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <button type="submit" className="cta-button" disabled={loading}>
                        {loading ? <ClipLoader size={20} color={"#FFFFFF"} /> : 'Send Reset Instructions'}
                    </button>
                </form>
                <Link to="/signin" className="back-signin-button">Back to Sign In</Link>
            </div>
        </section>
    );
};

export default ForgotPasswordPage;
