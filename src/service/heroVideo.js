import { API_BASE_CMS_URL } from '../service/apiEndpoints.js';
// src/service/VideoApi.js
export const fetchVideoUrl = async () => {
    try {
        const response = await fetch(`${API_BASE_CMS_URL}/api/hero-videos?populate=*`);
        const data = await response.json();

        // Extract the video URL from the API response
        const videoUrl = data.data?.[0]?.attributes?.heroVideo?.data?.[0]?.attributes?.url;

        return videoUrl;
    } catch (error) {
        console.error("Error fetching video URL:", error);
        return null;
    }
};
