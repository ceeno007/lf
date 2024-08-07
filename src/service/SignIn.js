import api from './api';

export const signIn = async (credentials) => {
    try {
        const response = await api.post('/users/signin', credentials); // Update the endpoint accordingly
        return response.data;
    } catch (error) {
        throw error.response.data;
    }
};
