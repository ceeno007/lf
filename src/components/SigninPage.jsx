import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSignIn } from '../service/handleSignIn.js';
import ClipLoader from 'react-spinners/ClipLoader';
import '../style/SignIn.css'; // Assuming your CSS path is correct

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        try {
            const data = await handleSignIn({ email, password });
            console.log('Sign-in successful:', data);
            navigate('/dashboard'); // Redirect to dashboard or intended path
        } catch (err) {
            setError(err.message);
            console.error("Error signing in:", err.message);
        } finally {
            setLoading(false);
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
                        <input
                            type="password"
                            id="password"
                            name="password"
                            value={password}
                            onChange={(e) => setPassword(e.target.value)}
                            required
                        />
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="cta-button" disabled={loading}>
                        {loading ? <ClipLoader size={20} color={"#FFFFFF"} /> : 'Sign In'}
                    </button>
                </form>
                <Link to="/" className="back-home-button">Back to Home</Link>
                <div className="signin-footer">
                    <p>Don't have an account? <Link to="/register" className="register-link">Register here</Link></p>
                </div>
            </div>
        </section>
    );
};

export default SigninPage;
