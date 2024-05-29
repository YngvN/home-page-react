import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from '../../utility/actions/wp/wp.url';
import DeveloperPosts from '../../utility/actions/renders/developerPosts';
import { Post } from '../../utility/actions/types';

const Developer: React.FC = () => {
    const [posts, setPosts] = useState<Post[]>([]);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await axios.get(`${baseURL}?_embed`);
                const postsData: Post[] = response.data;

                // Combine posts with their media URLs
                const postsWithMedia = postsData.map((post) => {
                    let featured_image = post._embedded?.['wp:featuredmedia']?.[0]?.source_url || '';

                    // Extract image from content if featured_image is not available
                    if (!featured_image) {
                        const imgMatch = post.content.rendered.match(/<img [^>]*src="([^"]+)"[^>]*>/);
                        if (imgMatch && imgMatch[1]) {
                            featured_image = imgMatch[1];
                        }
                    }

                    return {
                        ...post,
                        featured_image: featured_image,
                    };
                });

                setPosts(postsWithMedia);
            } catch (err: any) {
                setError(err.message);
                console.error("Error fetching posts", err.message);
            } finally {
                setLoading(false);
            }
        };

        fetchPosts();
    }, []);

    if (loading) return <div>Loading...</div>;
    if (error) return <div>Error: {error}</div>;

    const developerPosts = posts.filter(post => post.categories.includes(4));

    return (
        <div>
            <h1 className='page-title'>Developer</h1>
            <DeveloperPosts posts={developerPosts} />
        </div>
    );
};

export default Developer;
