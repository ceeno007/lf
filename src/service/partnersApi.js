// src/service/partnersApi.js
import { API_BASE_CMS_URL } from '../service/apiEndpoints.js';
export const fetchPartnersData = async () => {
    try {
        const response = await fetch(`${API_BASE_CMS_URL}/api/partners?populate=*`); // Adjust the endpoint if needed
        const data = await response.json();
        if (data && data.data) {
            // Flatten the nested images to get only the URLs
            const partners = data.data.flatMap(item => item.attributes.Partners.data.map(partner => ({
                id: partner.id,
                url: partner.attributes.url,
            })));
            return partners;
        }
        return [];
    } catch (error) {
        console.error("Error fetching partners data:", error);
        return [];
    }
};
