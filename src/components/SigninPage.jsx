import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import '../style/SignIn.css'; // Ensure the path is correct
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const SigninPage = () => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
    const [error, setError] = useState('');
    const [loading, setLoading] = useState(false);
    const navigate = useNavigate();

    const handleSubmit = async (event) => {
        event.preventDefault();
        setLoading(true);
        setError(''); // Clear previous errors

        try {
            navigate("/dashboard", { replace: true }); // Redirect to dashboard or intended path
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
                                {showPassword ? <FaEyeSlash /> : <FaEye />}
                            </button>
                        </div>
                    </div>
                    {error && <p className="error">{error}</p>}
                    <button type="submit" className="cta-button" disabled={loading}>
                        {loading ? <ClipLoader size={20} color={"#FFFFFF"} /> : 'Sign In'}
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
