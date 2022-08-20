import React, { useEffect } from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from "react-redux";
import { getCommentsAsync } from '../../redux/modules/commentsSlice';
import { useParams } from 'react-router-dom';

const CommentList = () => {
    const  params = useParams();
    const  dispatch = useDispatch();
    const comments = useSelector((state) => state.comments)
    console.log(comments)
    useEffect(() => {
        dispatch(getCommentsAsync(params.postId))
    },[])



    return (
        <CommentContainer>
            {comments.COMMENTS.map((comment,index) => {
                return (
                    <div key = {comment.commentId}>
                        {comment.memberNickname} |
                        ({comment.commentId}) |
                        {comment.content} |
                        {comment.modifiedAt}|
                    </div>
                )
            })}
        </CommentContainer>
    );
};

export default CommentList;

const CommentContainer = styled.div`
    width : 1000px;
     height: 300px;
     border: 1px solid black;
     margin: 0 auto;
`