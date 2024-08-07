import api from './api';

export const signUp = async (userData) => {
    try {
        const response = await api.post('/users/signup', userData); // Adjust the endpoint accordingly
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
