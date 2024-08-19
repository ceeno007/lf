import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../components/RegisterPage';
import SigninPage from '../components/SigninPage';
import DashboardPage from '../components/Dashboard';
import BlogPost from '../components/BlogPost';
import AllBlogs from '../components/AllBlogs';
import { getToken } from "../service/authService";
import MoreEvents from '../components/MoreEvents';
import ForgotPasswordPage from '../components/ForgotPasswordPage';
import ResetPasswordPage from '../components/ResetPassword';
import PricingPackages from '../components/PricingPackages';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<LandingPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={getToken() ? <DashboardPage /> : <Navigate to="/signin" />} />
                <Route path="/plans" element={<PricingPackages />} />
                <Route path="/blog/:id" element={<BlogPost />} />
                <Route path="/all-blogs" element={<AllBlogs />} />
                <Route path="/more-events" element={<MoreEvents />} />
                <Route path="/forgot-password" element={<ForgotPasswordPage />} />
                <Route path="/reset-password" element={<ResetPasswordPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
