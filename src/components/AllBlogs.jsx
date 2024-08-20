import React, { useEffect, useState } from 'react';
import '../style/AllBlogs.css';
import { fetchNutritionData } from '../service/blogApiervice.js';
import { Link } from 'react-router-dom';

const AllBlogs = () => {
    const [nutritionData, setNutritionData] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const getNutritionData = async () => {
            try {
                const data = await fetchNutritionData();


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
        <section className="all-blogs">
            <div className="container">
                <h1 className="all-blogs-title">All Blog Posts</h1>
                <div className="all-blogs-content">
                    {loading ? (
                        <p>Loading data...</p>
                    ) : nutritionData.length > 0 ? (
                        nutritionData.map((item) => (
                            <Link
                                key={item.id}
                                to={`/blog/${item.id}`}
                                state={{ blogData: item }} // Pass blogData via state
                                className="all-blogs-card"
                            >
                                <div className="all-blogs-header">
                                    <h2 className="all-blogs-title">
                                        {item.attributes.Title || 'Untitled Blog Post'}
                                    </h2>
                                </div>
                                <div className="all-blogs-description">
                                    {renderContentSnippet(item.attributes.Content)}
                                </div>
                                <p className="all-blogs-date">
                                    Published on: {new Date(item.attributes.publishedAt).toLocaleDateString()}
                                </p>
                            </Link>
                        ))
                    ) : (
                        <p>No blog posts available.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default AllBlogs;
