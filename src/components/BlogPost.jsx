import React from 'react';
import { useLocation, } from 'react-router-dom';
import { BlocksRenderer } from '@strapi/blocks-react-renderer';
import '../style/BlogPost.css';

const BlogPost = () => {
    const location = useLocation();
    const { blogData } = location.state || {};

    if (!blogData) {
        return <p>No blog post found.</p>;
    }

    return (
        <div className="blog-post-container">
            {/* <Link to="/" className="back-button">Back</Link> */}
            <div className="blog-post-content">
                <h1 className="blog-post-title">{blogData.attributes.Title}</h1>
                <div className="blog-post-body">
                    {/* Render the content using BlocksRenderer */}
                    <BlocksRenderer content={blogData.attributes.Content} />
                </div>
                <p className="blog-post-date">
                    Published on: {new Date(blogData.attributes.publishedAt).toLocaleDateString()}
                </p>
            </div>
        </div>
    );
};

export default BlogPost;
