import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { baseURL } from './wp.url';
import { Post } from '../types';
import DeveloperPosts from '../renders/developerPosts';
import MusicPosts from '../renders/musicPosts';
const FetchPosts: React.FC<{ categoryFilter: (categories: number[]) => boolean, type: 'developer' | 'music' }> = ({ categoryFilter, type }) => {
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

    const filteredPosts = posts.filter(post => categoryFilter(post.categories));

    return (
        <div>
            {type === 'developer' && <DeveloperPosts posts={filteredPosts} />}
            {type === 'music' && <MusicPosts posts={filteredPosts} />}
        </div>
    );
};

export default FetchPosts;
