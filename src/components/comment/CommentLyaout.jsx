import React from 'react';
import CommentList from "./CommentList"
import CommentCreate from './CommentCreate';

const CommentLyaout = () => {
    return (
        <>
            <CommentList/>
            <CommentCreate/>
        </>
    );
};

export default CommentLyaout;