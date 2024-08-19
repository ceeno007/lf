// src/service/partnersApi.js
export const fetchPartnersData = async () => {
    try {
        const response = await fetch(`${process.env.REACT_APP_API_URL}/api/partners?populate=*`); // Adjust the endpoint if needed
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
