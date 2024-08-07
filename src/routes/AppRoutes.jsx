import React from 'react';
import { BrowserRouter as Router, Route, Routes, } from 'react-router-dom';
import LandingPage from '../pages/LandingPage';
import RegisterPage from '../components/RegisterPage';
import SigninPage from '../components/SigninPage';
import DashboardPage from '../components/Dashboard';
const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="*" element={<LandingPage />} />
                <Route path="/" element={<LandingPage />} />
                <Route path="/signin" element={<SigninPage />} />
                <Route path="/register" element={<RegisterPage />} />
                <Route path="/dashboard" element={<DashboardPage />} />
            </Routes>
        </Router>
    );
};

export default AppRoutes;
