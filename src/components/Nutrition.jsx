import React, { useEffect, useState } from 'react';
import '../style/Nutrition.css';
import { fetchNutritionData } from '../service/blogApiervice.js';
import { Link } from 'react-router-dom';

const Nutrition = () => {
    const [nutritionData, setNutritionData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNutritionData = async () => {
            try {
                const data = await fetchNutritionData();
                console.log("Fetched data:", data);

                if (data && data.data) {
                    const sortedData = data.data.sort((a, b) => new Date(b.attributes.publishedAt) - new Date(a.attributes.publishedAt));
                    setNutritionData(sortedData);
                } else {
                    setNutritionData([]);
                }
            } catch (error) {
                console.error("Error fetching nutrition data:", error);
                setNutritionData([]);
            } finally {
                setLoading(false);
            }
        };

        getNutritionData();
    }, []);

    const renderContentSnippet = (content) => {
        if (typeof content === 'string') {
            const maxLength = 150;
            const snippet = content.length > maxLength ? content.slice(0, maxLength) + '...' : content;
            return <p>{snippet}</p>;
        } else {
            const firstBlock = content[0] ? content[0].children[0].text.slice(0, 150) + '...' : '';
            return <p>{firstBlock}</p>;
        }
    };

    return (
        <section className="nutrition">
            <div className="container">
                <h1 className="nutrition-title">Blog</h1>
                <div className="nutrition-content">
                    {loading ? (
                        <p>Loading data...</p>
                    ) : nutritionData.length > 0 ? (
                        nutritionData.slice(0, 3).map((item) => (
                            <div
                                key={item.id}
                                className="nutrition-card"
                                style={{ cursor: 'pointer' }}
                            >
                                <Link
                                    to={`/blog/${item.id}`}
                                    state={{ blogData: item }} // Pass blogData via state
                                    className="nutrition-link"
                                >
                                    <div className="nutrition-header">
                                        <h2 className="nutrition-title">
                                            {item.attributes.Title || 'Untitled Blog Post'}
                                        </h2>
                                    </div>
                                    <div className="nutrition-description">
                                        {renderContentSnippet(item.attributes.Content)}
                                    </div>
                                    <p className="nutrition-date">
                                        Published on: {new Date(item.attributes.publishedAt).toLocaleDateString()}
                                    </p>
                                </Link>
                            </div>
                        ))
                    ) : (
                        <p>No blog posts available.</p>
                    )}
                </div>
                {nutritionData.length > 3 && (
                    <div className="more-container">
                        <Link to="/all-blogs" className="more-link">More Blogs</Link>
                    </div>
                )}
            </div>
        </section>
    );
};

export default Nutrition;
