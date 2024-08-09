// import { API_URL } from "./config";

export const fetchNutritionData = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/blogs`); // Keep the endpoint as provided
        const data = await response.json();
  
        return data;
    } catch (error) {
        console.error("Error fetching nutrition data:", error);
     
        return null;
    }
};
