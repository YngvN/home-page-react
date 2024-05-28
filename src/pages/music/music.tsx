import React from "react";
import FetchPosts from "../../utility/actions/wp/wp.fetchPosts";

const Music: React.FC = () => {
    const categoryFilter = (categories: number[]) => categories.includes(5);

    return (
        <div>
            <h1>Music</h1>
            <div className="music">
                <FetchPosts categoryFilter={categoryFilter} type="music" />
            </div>
        </div>
    );
};

export default Music;
