import React, { useState } from "react";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import ClipLoader from "react-spinners/ClipLoader";
import { useNavigate, Link } from "react-router-dom";
import { registerUser } from "../service/signUp"; // Import the API helper function
import "../style/SignUp.css";

const RegisterPage = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [dob, setDob] = useState("");
  const [address, setAddress] = useState("");
  const [idNumber, setIdNumber] = useState("");
  const [gender, setGender] = useState("");
  const [idType, setIdType] = useState("");
  const [profilePicture, setProfilePicture] = useState(null);
  const [idImage, setIdImage] = useState(null);
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [isPasswordVisible, setIsPasswordVisible] = useState(false);
  const [isConfirmPasswordVisible, setIsConfirmPasswordVisible] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [modalMessage, setModalMessage] = useState("");
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  // Helper to validate password
  // const validatePassword = (password) => {
  //   const regex = /^(?=.*[A-Za-z])(?=.*\d)(?=.*[@$!%*#?&])[A-Za-z\d@$!%*#?&]{8,}$/;
  //   return regex.test(password);
  // };

  // Handle form submit
  const handleSubmit = async (e) => {
    e.preventDefault();

    // Basic validation checks
    if (
      !fullName ||
      !email ||
      !phone ||
      !dob ||
      !address ||
      !idNumber ||
      !gender ||
      !idType ||
      !profilePicture ||
      !idImage ||
      !password ||
      !confirmPassword
    ) {
      setShowModal(true);
      setModalMessage("Please fill in all required fields! 😢");
      return;
    }

    if (password !== confirmPassword) {
      setShowModal(true);
      setModalMessage("Passwords do not match! 😢");
      return;
    }

    // if (!validatePassword(password)) {
    //   setShowModal(true);
    //   setModalMessage(
    //     "Password must be at least 8 characters long and contain both letters and numbers! 😢"
    //   );
    //   return;
    // }

    setIsLoading(true);

    // Prepare form data for submission
    const formData = new FormData();
    formData.append("full_name", fullName);
    formData.append("email_address", email);
    formData.append("phone_number", phone);
    formData.append("date_of_birth", dob);
    formData.append("address", address);
    formData.append("id_no", idNumber);
    formData.append("gender", gender);
    formData.append("valid_id_type", idType);
    formData.append("profile_picture", profilePicture);
    formData.append("id_card_image", idImage);
    formData.append("password", password);

    try {
      const result = await registerUser(formData); // Call the API helper function
      setModalMessage("Form submitted successfully! 🎉🚀");
      setShowModal(true);

      // Redirect to the sign-in page after 2 seconds
      setTimeout(() => {
        navigate("/signin");
      }, 2000);
    } catch (error) {
      setModalMessage(`Error submitting form: ${error.message} 😭`);
      setShowModal(true);
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <section className="register-page">
      <div className="register-container">
        <h1 className="register-title">Register</h1>
        <form onSubmit={handleSubmit}>
          <label htmlFor="full-name" className="select-label">Full Name*</label>
          <input
            type="text"
            name="fullName"
            placeholder="Full Name"
            value={fullName}
            onChange={(e) => setFullName(e.target.value)}
            required
            className="input-field"
          />
          <label htmlFor="email" className="select-label">Email*</label>
          <input
            type="email"
            name="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
            className="input-field"
          />
          <label htmlFor="phone-number" className="select-label">Phone Number*</label>
          <input
            type="text"
            name="phone"
            placeholder="Phone Number"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            required
            className="input-field"
          />
          <label htmlFor="dob" className="select-label">Date of Birth*</label>
          <input
            type="date"
            name="dob"
            value={dob}
            onChange={(e) => setDob(e.target.value)}
            required
            className="input-field"
          />
          <label htmlFor="address" className="select-label">Address*</label>
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
            required
            className="input-field"
          />
          <label htmlFor="id-card-number" className="select-label">ID Card Number*</label>
          <input
            type="text"
            name="idNumber"
            placeholder="ID Card Number"
            value={idNumber}
            onChange={(e) => setIdNumber(e.target.value)}
            required
            className="input-field"
          />

          <label htmlFor="gender" className="select-label">Gender*</label>
          <select
            name="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            required
            className="input-field select-field"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>

          <label htmlFor="idType" className="select-label">ID Type*</label>
          <select
            name="idType"
            value={idType}
            onChange={(e) => setIdType(e.target.value)}
            required
            className="input-field select-field"
          >
            <option value="">Select ID Type</option>
            <option value="passport">Passport</option>
            <option value="driver_license">Driver's License</option>
            <option value="national_id">National ID</option>
          </select>

          <div className="file-upload">
            <label>Profile Picture *</label>
            <input
              type="file"
              name="profilePicture"
              accept="image/*"
              onChange={(e) => setProfilePicture(e.target.files[0])}
              required
              className="input-file"
            />
          </div>

          <div className="file-upload">
            <label>ID Card Image *</label>
            <input
              type="file"
              name="idImage"
              accept="image/*"
              onChange={(e) => setIdImage(e.target.files[0])}
              required
              className="input-file"
            />
          </div>
          <label htmlFor="password" className="select-label">Password*</label>
          <div className="password-input-container">
            <input
              type={isPasswordVisible ? "text" : "password"}
              name="password"
              placeholder="Password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="input-field"
            />
            <span
              className="password-toggle-icon"
              onClick={() => setIsPasswordVisible(!isPasswordVisible)}
            >
              {isPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>
          <label htmlFor="Confirm-password" className="select-label">Confirm Password*</label>
          <div className="password-input-container">
            <input
              type={isConfirmPasswordVisible ? "text" : "password"}
              name="confirmPassword"
              placeholder="Confirm Password"
              value={confirmPassword}
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
              className="input-field"
            />
            <span
              className="password-toggle-icon"
              onClick={() => setIsConfirmPasswordVisible(!isConfirmPasswordVisible)}
            >
              {isConfirmPasswordVisible ? <FaEyeSlash /> : <FaEye />}
            </span>
          </div>

          <button type="submit" className="cta-button" disabled={isLoading}>
            {isLoading ? <ClipLoader size={20} color={"#fff"} /> : "Register"}
          </button>
        </form>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <p>{modalMessage}</p>
              <button onClick={() => setShowModal(false)} className="modal-close-btn">Close</button>
            </div>
          </div>
        )}

        <div className="signin-redirect">
          <p>Already have an account? <Link to="/signin">Sign in here</Link></p>
        </div>
      </div>
    </section>
  );
};

export default RegisterPage;
