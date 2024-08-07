import React, { useEffect, useState } from 'react';
import { fetchUserDashboard } from '../services/dashboard';
import { useNavigate } from 'react-router-dom';
import '../style/Dashboard.css';

const DashboardPage = () => {
    const [userData, setUserData] = useState(null);
    const navigate = useNavigate();

    useEffect(() => {
        const token = localStorage.getItem('token');
        if (!token) {
            navigate('/signin');
        } else {
            fetchUserDashboard(token)
                .then((data) => setUserData(data))
                .catch((error) => {
                    console.error('Error fetching dashboard data:', error);
                    navigate('/signin');
                });
        }
    }, [navigate]);

    if (!userData) {
        return <p>Loading...</p>;
    }

    return (
        <section className="dashboard-page">
            <div className="dashboard-container">
                <h1>Welcome, {userData.name}</h1>
                <p>Your email: {userData.email}</p>
                {/* Display other user-specific data here */}
            </div>
        </section>
    );
};

export default DashboardPage;
