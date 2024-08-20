// import { API_URL } from "./config";
import { API_BASE_CMS_URL } from '../service/apiEndpoints.js';
export const fetchNutritionData = async () => {
    try {
        const response = await fetch(`${API_BASE_CMS_URL}/api/blogs`); // Keep the endpoint as provided
        const data = await response.json();

        return data;
    } catch (error) {
        console.error("Error fetching nutrition data:", error);

        return null;
    }
};
