import React from 'react';
import useResetPasswordLogic from '../service/resetPassword.js'; // Ensure the correct path
import '../style/ForgotPassword.css'; // Ensure the correct path for the shared styles

const ResetPasswordPage = () => {
    const {
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
    } = useResetPasswordLogic();

    return (
        <section className="forgot-password-page">
            <div className="forgot-password-container">
                <h1 className="forgot-password-title">Reset Password</h1>
                <form onSubmit={handleSubmit}>
                    <div className="forgot-password-form-group">
                        <label htmlFor="newPassword">New Password</label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            required
                        />
                        {passwordError && <p className="error">{passwordError}</p>}
                    </div>

                    <div className="forgot-password-form-group">
                        <label htmlFor="retypePassword">Confirm Password</label>
                        <input
                            type="password"
                            id="retypePassword"
                            value={retypePassword}
                            onChange={(e) => setRetypePassword(e.target.value)}
                            required
                        />
                        {retypePasswordError && <p className="error">{retypePasswordError}</p>}
                    </div>

                    <button type="submit" className="cta-button" disabled={isLoading}>
                        {isLoading ? 'Loading...' : 'Reset Password'}
                    </button>
                </form>
            </div>

            {popupMessage && (
                <div className={`popup ${popupType}`}>
                    <p>{popupMessage}</p>
                </div>
            )}
        </section>
    );
};

export default ResetPasswordPage;
