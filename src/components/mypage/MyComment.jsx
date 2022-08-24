import React from 'react';

const MyComment = ({buttonToggle}) => {
    return (
        <div>
            {buttonToggle === 1 ? "댓글" : (buttonToggle === 3 ? "댓글" : null)}
        </div>
    );
};

export default MyComment;