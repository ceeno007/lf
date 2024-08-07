import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { handleSignUp } from '../service/handlesignUp';
import ClipLoader from 'react-spinners/ClipLoader';
import '../style/SignUp.css';

const RegisterPage = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    try {
      const data = await handleSignUp({ name, email, password });
      console.log('Sign-up successful:', data);
      navigate('/dashboard'); // Redirect to the dashboard
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  };

  return (
    <section className="register-page">
      <div className="register-container">
        <div className="register-form">
          <h1 className="register-title">Register</h1>
          <form onSubmit={handleSubmit}>
            <div className="register-form-group">
              <label htmlFor="name">Name</label>
              <input type="text" id="name" name="name" value={name} onChange={(e) => setName(e.target.value)} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="email">Email</label>
              <input type="email" id="email" name="email" value={email} onChange={(e) => setEmail(e.target.value)} required />
            </div>
            <div className="register-form-group">
              <label htmlFor="password">Password</label>
              <input type="password" id="password" name="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
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
