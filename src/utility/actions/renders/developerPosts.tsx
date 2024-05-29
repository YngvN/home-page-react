import React from 'react';
import { Post } from '../types';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGithub } from '@fortawesome/free-brands-svg-icons';

interface DeveloperPostsProps {
    posts: Post[];
}

const DeveloperPosts: React.FC<DeveloperPostsProps> = ({ posts }) => {
    const filterContent = (content: string) => {
        const parser = new DOMParser();
        const doc = parser.parseFromString(content, 'text/html');
        const paragraphs = doc.querySelectorAll('p');
        let containerLink = '';
        let githubLink = '';

        paragraphs.forEach((p) => {
            const anchorTags = p.querySelectorAll('a');
            anchorTags.forEach((a) => {
                const href = a.getAttribute('href');
                if (href) {
                    if (/github\.com/i.test(href)) {
                        githubLink = href;
                    } else {
                        containerLink = href;
                    }
                    a.remove();
                }
            });

            if (/Developer/i.test(p.textContent || '')) {
                p.remove();
            }
        });

        const allElements = doc.querySelectorAll('*');
        allElements.forEach((element) => {
            element.removeAttribute('class');
        });

        return {
            content: doc.body.innerHTML,
            containerLink,
            githubLink
        };
    };

    const normalizeURL = (url: string) => {
        if (url.startsWith('http')) {
            return url;
        }
        return `https://${url}`;
    };

    return (
        <div className="developer-posts column">
            {posts.map((post) => {
                const { content, containerLink, githubLink } = filterContent(post.content.rendered);
                return (
                    <div
                        key={post.id}
                        className="project-container"
                    >
                        <div className='project-description column project-child'>
                            <h2 className="project-title">{post.title.rendered}</h2>
                            <div className="project-content" dangerouslySetInnerHTML={{ __html: content }} />
                        </div>
                        <div className='developer-links row'>
                            {post.featured_image && (
                                <img

                                    src={post.featured_image}
                                    alt={post.title.rendered}
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        if (containerLink) {
                                            window.open(normalizeURL(containerLink), '_blank');
                                        }
                                    }}
                                    className="project-image"
                                    style={{ cursor: containerLink ? 'pointer' : 'default' }}
                                />
                            )}
                            {githubLink && (
                                <a
                                    className='btn-github btn'
                                    onClick={(e) => {
                                        e.stopPropagation();
                                        window.open(normalizeURL(githubLink), '_blank');
                                    }}
                                    aria-label='Link to Github'
                                >
                                    <FontAwesomeIcon icon={faGithub} size="2x" />
                                </a>
                            )}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default DeveloperPosts;
