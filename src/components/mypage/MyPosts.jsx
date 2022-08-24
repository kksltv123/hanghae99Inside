import React from 'react';

const MyPosts = ({buttonToggle}) => {
    return (
        <div>
            {buttonToggle === 1 ? "게시물" : (buttonToggle === 2 ? "게시물" : null)}
        </div>
    );
};

export default MyPosts;