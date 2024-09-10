import React from 'react';
import { useParams } from 'react-router-dom'; // Hook to access URL parameters

const BlogPost = () => {
    // Extract the dynamic ID from the URL
    const { id } = useParams();

    return (
        <div>
            <h1>Blog Post {id}</h1>
            <p>This is the content of blog post with ID: {id}.</p>
            {/* You can expand this to fetch data based on the ID */}
        </div>
    );
};

export default BlogPost;