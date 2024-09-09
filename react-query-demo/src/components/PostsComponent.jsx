import React from 'react';
import { useQuery } from '@tanstack/react-query';

// Function to fetch posts data from the JSONPlaceholder API
const fetchPosts = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/posts');
    if (!response.ok) {
        throw new Error('Failed to fetch posts');
    }
    return response.json();
};

const PostsComponent = () => {
    // Configuring the useQuery hook with the expected options
    const { data, error, isLoading, isError, refetch } = useQuery({
        queryKey: ['posts'],
        queryFn: fetchPosts,
        staleTime: 30000, // Data is considered fresh for 30 seconds
        cacheTime: 60000, // Unused data stays in cache for 60 seconds
        refetchOnWindowFocus: false, // Prevents refetching when the window regains focus
        keepPreviousData: true, // Keeps previous data during a new fetch
    });

    if (isLoading) {
        return <div>Loading posts...</div>;
    }

    if (isError) {
        return <div>Error: {error.message}</div>;
    }

    return (
        <div>
            <h2>Posts</h2>
            {/* Button to manually trigger a refetch of the data */}
            <button onClick={() => refetch()}>Refresh Posts</button>
            <ul>
                {data.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ul>
        </div>
    );
};

export default PostsComponent;