import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate, } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../components/RegisterPage';
import SigninPage from '../components/SigninPage';
import DashboardPage from '../components/Dashboard';
import GalleryPage from '../components/gallery';
import { getToken } from "../service/authService";
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<LandingPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={getToken() ? <DashboardPage /> : <Navigate to="/signin" />} />
                <Route path="/gallery" element={<GalleryPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
