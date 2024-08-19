// src/service/VideoApi.js
export const fetchVideoUrl = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/hero-videos?populate=*`);
        const data = await response.json();

        // Extract the video URL from the API response
        const videoUrl = data.data?.[0]?.attributes?.heroVideo?.data?.[0]?.attributes?.url;

        return videoUrl;
    } catch (error) {
        console.error("Error fetching video URL:", error);
        return null;
    }
};
