import React, { useState } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"
import { deleteCommentsAsync,editCommentsAsync, getCommentsAsync } from '../../redux/modules/commentsSlice';

const Comment = ({comment, Click, Selected,elementIndex}) => {
    const dispatch = useDispatch()
    const [commentNum, setCommentNum] = useState(-1);
    const [editNum, setEditNum] = useState(-1)
    const [comments, setComments] = useState("")
    const [password, setPassword] = useState("")
    const { postId } = useParams()
    const black_pattern = /^s+|\s+$/g;
    

    const commetChangeHandler = (e) => {
        const value = e.target.value;
        setComments(value)
    }

    const passwordChangeHandler = (e) => {
        const value = e.target.value;
        setPassword(value)
    }

    const onEditComment = (comment_id) => {
        
       if(password !== comment.password) {
            alert("비밀번호가 틀립니다")
            return
       }else if(comments === '') {
            alert("내용을 입력해 주세요")
            return
       }else if (comments.replace(black_pattern,'') ==='') {
        alert("Only spaces were entered in the comments")
        return
        }
        
        dispatch(editCommentsAsync({
            id : comment.id,
            memberNickname:comment.memberNickname,
            password : comment.password,
            postId : comment.postId,
            content : comments
        }))
        setEditNum();
        setComments("")
        dispatch(getCommentsAsync(postId))
    }

    const commentowner = comment.memberNickname

    const onDelete = (comment_id) => {
        if(comment.password === password) {
            dispatch(deleteCommentsAsync(comment.id))
        }else {
            alert("비밀번호가 틀립니다")
        }
        
    }

     return (
        <>
            {commentNum !== comment.id ? (
                <StMemeComment>
                    <div>
                        <div>
                            {comment.memberNickname}
                            ({comment.id})
                            {comment.content}
                        </div>
                        <div>
                            {/* <button  commentowner = {commentowner} onClick = {() => setCommentNum(comment.id) } >수정</button> */}
                            <button commentowner = {commentowner} onClick = {() => setCommentNum(comment.id) }>삭제</button>
                        </div>
                    </div>
                </StMemeComment>
            ) : (
                <StMemeComment>
                    <div>
                        <input 
                        type= "text" 
                        placeholder = "비밀번호" 
                        maxLength={30} 
                        value ={password}
                        onChange = {passwordChangeHandler}/>
                        <div>
                            <button onClick={onDelete}>삭제완료</button>
                            <button type='button' onClick={() => setCommentNum(-1)}>취소</button>
                        </div>
                    </div>
                </StMemeComment>
            )}
            {editNum !== comment.id ? (
                <div>
                    <button  commentowner = {commentowner} onClick = {() => setEditNum(comment.id) } >수정</button>
                </div>
            ):(
            <div>
                <div>
                    <input
                    type = "text"
                    placeholder = "비밀번호"
                    maxLength = {30}
                    value = {password}
                    onChange = {passwordChangeHandler}/>
                    <input
                    type= "text"
                    placeholder = "수정할 내용을 입력해 주세요"
                    maxLength = {30}
                    value = {comments}
                    onChange ={commetChangeHandler}/>
                </div>
                <div>
                    <button onClick={onEditComment}>수정완료</button>
                    <button type='button' onClick={() => setEditNum(-1)}>취소</button>
                </div>
            </div>   
            )}
         
        </>
    );
};

export default Comment;

const StMemeComment = styled.div`
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-bottom: 1px solid #efefef;
    div {
        display: flex;
        justify-content: space-between;
        margin-bottom: 5px;
    }
`