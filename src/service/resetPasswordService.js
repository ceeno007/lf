// import { useState } from 'react';
// import { useNavigate } from 'react-router-dom';

// const useResetPasswordLogic = () => {
//     const [password, setPassword] = useState('');
//     const [confirmPassword, setConfirmPassword] = useState('');
//     const [error, setError] = useState('');
//     const [success, setSuccess] = useState('');
//     const [loading, setLoading] = useState(false);
//     const [showPassword, setShowPassword] = useState(false);
//     const [showConfirmPassword, setShowConfirmPassword] = useState(false);
//     const navigate = useNavigate();

//     const handleSubmit = async (event) => {
//         event.preventDefault();
//         setLoading(true);
//         setError('');
//         setSuccess('');

//         if (password !== confirmPassword) {
//             setError("Passwords do not match.");
//             setLoading(false);
//             return;
//         }

//         try {
//             // Add your reset password logic here
//             // For example, API call to reset the password
//             setSuccess('Password reset successfully.');
//             navigate("/signin", { replace: true }); // Redirect to sign-in or intended path
//         } catch (err) {
//             setError(err.message);
//             console.error("Error resetting password:", err.message);
//         } finally {
//             setLoading(false);
//         }
//     };

//     return {
//         password,
//         setPassword,
//         confirmPassword,
//         setConfirmPassword,
//         error,
//         success,
//         loading,
//         showPassword,
//         showConfirmPassword,
//         setShowPassword,
//         setShowConfirmPassword,
//         handleSubmit
//     };
// };

// export default useResetPasswordLogic;
