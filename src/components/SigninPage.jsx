import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { signInUser } from '../service/signin.js'; // Updated import path
import '../style/SignIn.css'; // Ensure the path is correct

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const [modalMessage, setModalMessage] = useState('');
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(''); // Clear previous errors

        try {
            if (!email || !password) {
                throw new Error("Email and password are required");
            }

            // console.log("Submitting credentials:", { email_address: email, password });

            // Ensure credentials object matches the backend's expected structure
            const credentials = { email_address: email, password };

            const result = await signInUser(credentials); // Use the signInUser utility function

            // Store user data in localStorage
            // console.log("Sign-in successful:", result);
            localStorage.setItem("user", JSON.stringify(result));
            setModalMessage("Signed in successfully! 🎉");

            // Redirect to the dashboard after a short delay
            setTimeout(() => {
                // console.log("Redirecting to dashboard");
                navigate("/dashboard");
            }, 2000);

        } catch (err) {
            console.error("Error signing in:", err);
            setError(err.message);
        } finally {
            setLoading(false); // Ensure loading state is cleared
        }
    };

    return (
        <section className="signin-page">
            <div className="signin-container">
                <h1 className="signin-title">Sign In</h1>
                <form onSubmit={handleSubmit}>
                    <div className="signin-form-group">
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
                    <div className="signin-form-group">
                        <label htmlFor="password">Password</label>
                        <div className="password-container">
                            <input
                                type={showPassword ? 'text' : 'password'}
                                id="password"
                                name="password"
                                value={password}
                                onChange={(e) => setPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowPassword(!showPassword)}
                            >
                                {showPassword ? 'Hide' : 'Show'}
                            </button>
                        </div>
                    </div>
                    {error && <p className="error">{error}</p>}
                    {modalMessage && <p className="success">{modalMessage}</p>}
                    <button type="submit" className="cta-button" disabled={loading}>
                        {loading ? 'Loading...' : 'Sign In'}
                    </button>
                </form>
                <Link to="/forgot-password" className="forgot-password-link">Forgot Password?</Link>
                <Link to="/" className="forgot-password-link">Back to Home</Link>
                <div className="signin-footer">
                    <p>Don't have an account? <Link to="/register" className="forgot-password-link">Register here</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SigninPage;
