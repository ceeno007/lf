// src/hooks/useTeamMembers.js
import { API_BASE_CMS_URL } from '../service/apiEndpoints.js';
import { useState, useEffect } from 'react';
import axios from 'axios';

const API_URL = `${API_BASE_CMS_URL}/api/teams?populate=*`;

export const getTeamMembers = async () => {
    try {
        const response = await axios.get(API_URL);
        return response.data.data.map((item) => ({
            id: item.id,
            name: item.attributes.name,
            image: item.attributes.team.data.attributes.formats.medium.url,
        }));
    } catch (error) {
        console.error('Error fetching team members:', error);
        return [];
    }
};

const useTeamMembers = () => {
    const [teamMembers, setTeamMembers] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchTeamMembers = async () => {
            try {
                const members = await getTeamMembers();
                setTeamMembers(members);
            } catch (error) {
                setError(error);
            }
        };

        fetchTeamMembers();
    }, []);

    return { teamMembers, error };
};

export default useTeamMembers;
