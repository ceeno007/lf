import { API_URL } from "./config";

export const fetchGalleryData = async () => {
    try {
        const response = await fetch(`${API_URL}/api/images?populate=*`); // Adjust the endpoint if needed
        const data = await response.json();
        return data;
    } catch (error) {
        console.error("Error fetching gallery data:", error);
        return null;
    }
};
