// service/dashboardService.js
import axios from 'axios';
// import { API } from '../constant';
import { getToken } from './authService';

export const fetchUserData = async (userId) => {
    try {

        const response = await axios.get(`${process.env.REACT_APP_API_URL}/users/${userId}`, {
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${getToken()}`,
            },
        });

        return response.data;
    } catch (error) {
        throw error;
    }
};
