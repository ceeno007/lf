import React, { useEffect, useState } from 'react';
import '../style/Nutrition.css';
import { fetchNutritionData } from '../service/blogApiervice.js'; // Corrected the import path
import { BlocksRenderer } from '@strapi/blocks-react-renderer'; // Import BlocksRenderer

const Nutrition = () => {
    const [nutritionData, setNutritionData] = useState([]);
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [loading, setLoading] = useState(true); // Track loading state

    useEffect(() => {
        const getNutritionData = async () => {
            try {
                const data = await fetchNutritionData();

                if (data && data.data) {
                    // Sort data to have the newest blog posts at the top
                    const sortedData = data.data.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));
                    setNutritionData(sortedData);
                } else {
                    setNutritionData([]); // No data or empty response
                }
            } catch (error) {
                console.error("Error fetching nutrition data:", error);
                setNutritionData([]); // Set to empty array on error
            } finally {
                setLoading(false); // Stop loading
            }
        };

        getNutritionData();
    }, []);

    const toggleDropdown = (id) => {
        setOpenDropdown(openDropdown === id ? null : id);
    };

    return (
        <section className="nutrition">
            <div className="container">
                <h1 className="nutrition-title">Blog</h1>
                <div className="nutrition-content">
                    {loading ? (
                        <p>Loading data...</p>
                    ) : nutritionData.length > 0 ? (
                        nutritionData.slice(0, 4).map((item) => (
                            <div key={item.id} className="nutrition-card">
                                <div className="nutrition-header" onClick={() => toggleDropdown(item.id)}>
                                    <h2 className="nutrition-title">
                                        {item.attributes.Title || 'Untitled Blog Post'}
                                    </h2>
                                </div>
                                {openDropdown === item.id && (
                                    <div className="nutrition-dropdown">
                                        <div className="nutrition-description">
                                            <BlocksRenderer content={item.attributes.Content} />
                                        </div>
                                        <p className="nutrition-date">
                                            Published on: {new Date(item.attributes.publishedAt).toLocaleDateString()}
                                        </p>
                                    </div>
                                )}
                            </div>
                        ))
                    ) : (
                        <p>No blog posts available.</p>
                    )}
                </div>
                {nutritionData.length > 4 && (
                    <div className="more-container">
                        <a href="/all-blogs" className="more-link">More</a>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Nutrition;
