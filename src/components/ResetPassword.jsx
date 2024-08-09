import React from 'react';
import { Link } from 'react-router-dom';
import useResetPasswordLogic from '../service/resetPasswordService'; // Path to your custom hook
import '../style/SignIn.css'; // Use the same CSS for consistent styling
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'; // Import icons for visibility toggle
import ClipLoader from 'react-spinners/ClipLoader';

const ResetPasswordPage = () => {
    const {
        password,
        setPassword,
        confirmPassword,
        setConfirmPassword,
        error,
        success,
        loading,
        showPassword,
        showConfirmPassword,
        setShowPassword,
        setShowConfirmPassword,
        handleSubmit
    } = useResetPasswordLogic();

    return (
        <section className="reset-password-page">
            <div className="reset-password-container">
                <h1 className="reset-password-title">Reset Password</h1>
                <form onSubmit={handleSubmit} className="reset-password-form">
                    <div className="reset-password-form-group">
                        <label htmlFor="password">New Password</label>
                        <div className="password-input-container">
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
                                {showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    <div className="reset-password-form-group">
                        <label htmlFor="confirmPassword">Confirm Password</label>
                        <div className="password-input-container">
                            <input
                                type={showConfirmPassword ? 'text' : 'password'}
                                id="confirmPassword"
                                name="confirmPassword"
                                value={confirmPassword}
                                onChange={(e) => setConfirmPassword(e.target.value)}
                                required
                            />
                            <button
                                type="button"
                                className="password-toggle"
                                onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                            >
                                {showConfirmPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                            </button>
                        </div>
                    </div>
                    {error && <p className="error">{error}</p>}
                    {success && <p className="success">{success}</p>}
                    <button type="submit" className="cta-button" disabled={loading}>
                        {loading ? <ClipLoader size={20} color={"#FFFFFF"} /> : 'Reset Password'}
                    </button>
                </form>
                <Link to="/signin" className="back-signin-button">Back to Sign In</Link>
            </div>
        </section>
    );
};

export default ResetPasswordPage;
