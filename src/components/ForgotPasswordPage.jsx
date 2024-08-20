import React from 'react';
import { Link } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';
import useForgotPasswordLogic from '../service/forgotPasswordService.js'; // Ensure the path is correct
import Popup from './Popup.js'; // Popup component for displaying messages
import '../style/ForgotPassword.css'; // Ensure the path is correct

const ForgotPasswordPage = () => {
    const {
        email,
        setEmail,
        loading,
        popupMessage,
        popupType,
        handleForgotPassword,
    } = useForgotPasswordLogic(); // Use the separated logic

    return (
        <section className="forgot-password-page">
            <div className="forgot-password-container">
                <h1 className="forgot-password-title">Forgot Password</h1>
                <form onSubmit={handleForgotPassword}>
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
                    <button type="submit" className="cta-button" disabled={loading}>
                        {loading ? <ClipLoader size={20} color={"#FFFFFF"} /> : 'Send Reset Instructions'}
                    </button>
                </form>
                <Link to="/signin" className="back-signin-button">Back to Sign In</Link>

                {/* Display the popup for success or error messages */}
                {popupMessage && <Popup message={popupMessage} type={popupType} />}
            </div>
        </section>
    );
};

export default ForgotPasswordPage;
