// import React from 'react';
// import { Post } from '../types';

// interface MusicPostsProps {
//     posts: Post[];
// }

// const MusicPosts: React.FC<MusicPostsProps> = ({ posts }) => {
//     // Function to filter out paragraphs containing 'Music' and remove all class attributes
//     const filterContent = (content: string) => {
//         const parser = new DOMParser();
//         const doc = parser.parseFromString(content, 'text/html');
//         const paragraphs = doc.querySelectorAll('p');

//         paragraphs.forEach((p) => {
//             if (/Music/i.test(p.textContent || '')) {
//                 p.remove();
//             }
//         });

//         // Remove all class attributes
//         const allElements = doc.querySelectorAll('*');
//         allElements.forEach((element) => {
//             element.removeAttribute('class');
//         });

//         return doc.body.innerHTML;
//     };

//     return (
//         <div className="music-posts column">
//             {posts.map((post) => {
//                 const filteredContent = filterContent(post.content.rendered);
//                 return (
//                     <div key={post.id} className="project-container">

//                         <div className="project-description project-child column">
//                             <h2 className="project-title">{post.title.rendered}</h2>
//                             <div className="project-content" dangerouslySetInnerHTML={{ __html: filteredContent }} />
//                         </div>
//                         <div className="project-image-container  project-child">
//                             {post.featured_image && (
//                                 <img
//                                     src={post.featured_image}
//                                     alt={post.title.rendered}
//                                     className="project-image"
//                                 />
//                             )}
//                         </div>
//                     </div>

//                 );
//             })}
//         </div>
//     );
// };

// export default MusicPosts;

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

        // Collect <figure> and <iframe> elements and remove them from their original positions
        const figuresAndIframes = doc.querySelectorAll('figure');
        const externalElements: string[] = [];
        figuresAndIframes.forEach((element) => {
            externalElements.push((element as HTMLElement).outerHTML);
            element.remove();
        });

        return { filteredHtml: doc.body.innerHTML, externalElements };
    };

    return (
        <div className="music-posts column">
            {posts.map((post) => {
                const { filteredHtml, externalElements } = filterContent(post.content.rendered);
                return (
                    <div key={post.id} className="project-container container">
                        <div className="project-description project-child column">
                            <h2 className="project-title">{post.title.rendered}</h2>
                            <div className="project-content column" dangerouslySetInnerHTML={{ __html: filteredHtml }} />
                        </div>
                        <div className="project-external-content">
                            {externalElements.map((elementHtml, index) => (
                                <div key={index} className="project-child" dangerouslySetInnerHTML={{ __html: elementHtml }} />
                            ))}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default MusicPosts;
