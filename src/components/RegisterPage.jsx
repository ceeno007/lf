import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import ClipLoader from 'react-spinners/ClipLoader';

import '../style/SignUp.css';
import { FaEye, FaEyeSlash } from 'react-icons/fa'; // Import eye icons

const RegisterPage = () => {
  const [username, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [retypePassword, setRetypePassword] = useState(''); // New state for retyped password
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false); // State to toggle password visibility
  const [showRetypePassword, setShowRetypePassword] = useState(false); // State to toggle retype password visibility
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setError(''); // Clear any previous errors

    // Password validation
    if (password !== retypePassword) {
      setError("Passwords do not match.");
      setLoading(false);
      return;
    }

    if (!validatePassword(password)) {
      setError("Password must be at least 8 characters long and include a number and a special character.");
      setLoading(false);
      return;
    }

    try {
      // const data = await handleSignUp({ username, email, password });
      // console.log('Sign-up successful:', data);
      // Reset form state after successful sign-up
      setName('');
      setEmail('');
      setPassword('');
      setRetypePassword('');
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (err) {
      console.error('Sign-up error:', err); // Log the error for debugging
      setError(err.message);
      setLoading(false);
    }
  };

  const validatePassword = (password) => {
    const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
    return regex.test(password);
  };

  return (
    <section className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1 className="register-title">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="register-form-group">
              <label htmlFor="name">Username</label>
              <input type="text" id="name" name="name" value={username} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="password">Password</label>
              <div className="password-input-container">
                <input
                  type={showPassword ? "text" : "password"}
                  id="password"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  required
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setShowPassword(!showPassword)}
                >
                  {showPassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            <div className="register-form-group">
              <label htmlFor="retypePassword">Retype Password</label>
              <div className="password-input-container">
                <input
                  type={showRetypePassword ? "text" : "password"}
                  id="retypePassword"
                  name="retypePassword"
                  value={retypePassword}
                  onChange={(e) => setRetypePassword(e.target.value)}
                  required
                />
                <span
                  className="password-toggle-icon"
                  onClick={() => setShowRetypePassword(!showRetypePassword)}
                >
                  {showRetypePassword ? <FaEyeSlash /> : <FaEye />}
                </span>
              </div>
            </div>
            {error && <p className="error">{error}</p>}
            <button type="submit" className="cta-button" disabled={loading}>
              {loading ? <ClipLoader size={20} color={"#fff"} /> : 'Register'}
            </button>
          </form>
          <div className="register-footer">
            <p>Already have an account? <Link to="/signin" className="signin-link">Sign in here</Link></p>
          </div>
        </div>
        <div className="register-info">
          <h2>Becoming a Member</h2>
          <p>Joining the Nigeria Natural Bodybuilding Association (NNBBA) is easy:</p>
          <ol>
            <li>Meet the eligibility criteria.</li>
            <li>Choose your membership category.</li>
            <li>Submit your application.</li>
            <li>Pay membership fees.</li>
            <li>Agree to our Code of Conduct.</li>
          </ol>
          <h2>Membership Benefits</h2>
          <ul>
            <li>Community support.</li>
            <li>Access to events.</li>
            <li>Training and development.</li>
            <li>Discounts and perks.</li>
            <li>Representation.</li>
            <li>Personal growth.</li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;