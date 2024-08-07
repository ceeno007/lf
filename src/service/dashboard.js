import api from './api';

export const fetchUserDashboard = async (token) => {
    try {
        const response = await api.get('/dashboard', {
            headers: {
                Authorization: `Bearer ${token}`,
            },
        });
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
