import React, { useState } from 'react';
import styled from 'styled-components';
import { connect, useDispatch } from 'react-redux';
import { useParams } from "react-router-dom"


const Comment = ({comment, Click, Selected,elementIndex}) => {
    const dispatch = useDispatch()
    const [commentNum, setCommentNum] = useState(-1);
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
        if(!comments) {
            alert("내용이 비어있습니다.");
            return
        }
        if (comments.replace(black_pattern,'') ==='') {
            alert("Only spaces were entered in the comments")
        }
        const edit_comment = {
            comment_id,
            content : comments
        }
        dispatch()
        setCommentNum();
        setComments("")
        dispatch()
    }

    const commentOwner = comment.memberNickname

    const onDelete = (comment_id) => {
        if(comment.password == password) {
            dispatch()
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
                            <button commentOwner = {commentOwner} onClick = {() => setCommentNum(comment.id) }>수정</button>
                            <button commentOwner = {commentOwner} onClick = {() => setCommentNum(comment.id) }>삭제</button>
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
                            <button>삭제완료</button>
                            <button type='button' onClick={() => setCommentNum(-1)}>취소</button>
                        </div>
                    </div>
                </StMemeComment>
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