import React from 'react';
import { Post } from '../types';

interface MusicPostsProps {
    posts: Post[];
}

const MusicPosts: React.FC<MusicPostsProps> = ({ posts }) => {
    // Function to filter out paragraphs containing 'Music' and remove all class attributes
    const filterContent = (content: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const paragraphs = doc.querySelectorAll('p');

        paragraphs.forEach((p) => {
            if (/Music/i.test(p.textContent || '')) {
                p.remove();
            }
        });

        // Remove all class attributes
        const allElements = doc.querySelectorAll('*');
        allElements.forEach((element) => {
            element.removeAttribute('class');
        });

        return doc.body.innerHTML;
    };

    return (
        <div className="posts-container column">
            {posts.map((post) => {
                const filteredContent = filterContent(post.content.rendered);
                return (
                    <div key={post.id} className="project-container column">
                        <div className="row">
                            <div className="split project-description column">
                                <h2 className="project-title">{post.title.rendered}</h2>
                                <div className="project-content" dangerouslySetInnerHTML={{ __html: filteredContent }} />
                            </div>
                            <div className="split project-image-container">
                                {post.featured_image && (
                                    <img
                                        src={post.featured_image}
                                        alt={post.title.rendered}
                                        className="project-image"
                                    />
                                )}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MusicPosts;
