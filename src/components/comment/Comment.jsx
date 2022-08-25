import React, { useState,useEffect } from 'react';
import styled from 'styled-components';
import {  useDispatch,useSelector } from 'react-redux';
import { useParams } from "react-router-dom"
import { deleteCommentsAsync,editCommentsAsync, getCommentsAsync } from '../../redux/modules/commentsSlice';

const Comment = ({comment, Click, Selected,elementIndex}) => {
    const dispatch = useDispatch()
    const [commentNum, setCommentNum] = useState(-1);
    const [editNum, setEditNum] = useState(-1)
    const [comments, setComments] = useState("")
    const [password, setPassword] = useState("")

    const params = useParams()
    const black_pattern = /^s+|\s+$/g;
    const susccess = useSelector((state) => state.comments.susccess)
    

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
        const edit_comments = {
            id : comment.id,
            nickname:comment.nickname,
            password : comment.password,
            postId : comment.postId,
            content : comments
        }
        dispatch(editCommentsAsync(edit_comments))
        setEditNum();
        setComments("")
    }

     useEffect(() => {
        dispatch(getCommentsAsync(params.postId))
    },[susccess])

    const commentowner = comment.nickname

    const onDelete = (comment_id) => {
        if(comment.password === password) {
            dispatch(deleteCommentsAsync({
                id : comment.id,
                password : password
            }))
        }else {
            alert("비밀번호가 틀립니다")
        }
        dispatch(getCommentsAsync(params.postId))
    }

     return (
        <>  
            <CommentBox>
            <UserBox>
                <NicSpan>
                <EmTag>
                {comment.nickname}
                 ({comment.createdAt})
                 </EmTag>
                 </NicSpan>
                 {comment.content}
            </UserBox>
            <DelBox>
            {commentNum !== comment.id ? (
                    <div>
                        
                        <div>
                            {/* <button  commentowner = {commentowner} onClick = {() => setCommentNum(comment.id) } >수정</button> */}
                            <StyleBtn commentowner = {commentowner} onClick = {() => setCommentNum(comment.id) }>삭제</StyleBtn>
                        </div>
                    </div>
            ) : (
                    <div>
                        <PassInput 
                        type= "text" 
                        placeholder = "비밀번호" 
                        maxLength={30} 
                        value ={password}
                        onChange = {passwordChangeHandler}/>
                        <DeleteDoneDiv>
                            <StyleBtn onClick={onDelete}>삭제완료</StyleBtn>
                            <StyleBtn type='button' onClick={() => setCommentNum(-1)}>취소</StyleBtn>
                        </DeleteDoneDiv>
                    </div>
            )}
            </DelBox>
            <EditBtn>
            {editNum !== comment.id ? (
                <div>
                    <StyleBtn  commentowner = {commentowner} onClick = {() => setEditNum(comment.id) } >수정</StyleBtn>
                </div>
            ):(
            <div>
                <div>
                    <PassInput
                    type = "text"
                    placeholder = "비밀번호"
                    maxLength = {30}
                    value = {password}
                    onChange = {passwordChangeHandler}/>
                    <EditInput
                    type= "text"
                    placeholder = "수정할 내용을 입력해 주세요"
                    maxLength = {30}
                    value = {comments}
                    onChange ={commetChangeHandler}/>
                </div>
                <EditDoneDIv>
                    <StyleBtn onClick={onEditComment}>수정완료</StyleBtn>
                    <StyleBtn type='button' onClick={() => setEditNum(-1)}>취소</StyleBtn>
                </EditDoneDIv>
            </div>   
            )}
            </EditBtn>
        </CommentBox> 
            
         
        </>
    );
};

export default Comment;

const CommentBox = styled.div`
    flex-direction: column;
    height: 50px;
    border-bottom: 1px solid Lightgray;
    border-top: 1px solid Lightgray;
    margin: 10px auto;
`

const UserBox = styled.div`
    float: left;
    max-width: 900px;
`

const DelBox = styled.div`
    float: right;
`
const EditBtn = styled.div`
    float: right;
`

const NicSpan = styled.span`
    font-size: 14px;
    color: #777;
    vertical-align: top;
`
const EmTag = styled.em`
    max-width: 80px;
    padding-right: 50px;
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    vertical-align: top;
    font-style: normal;
`

const EditDoneDIv = styled.div`
    overflow: hidden;
    position: absolute;
    width: 130px;
    height: 25px;
    margin: 0 233px;
`
const DeleteDoneDiv = styled.div`
     overflow: hidden;
    position: absolute;
    width: 130px;
    height: 25px;
    margin: 0 15px;
`


const StyleBtn = styled.button`
    width: 65px;
    height: 25px;
    background-color: #3b4890;
    border-color: #29367c;
    color: #fff
`

const PassInput = styled.input`
    width: 129px;
    height: 20px;
    line-height: 34px;
    padding: 0 5px;
    background: #fff;
    font-size: 14px;
    border: 3px solid #3b4890 ;
`

const EditInput = styled.input`
    width: 200px;
    height: 20px;
    line-height: 34px;
    padding: 0 5px;
    background: #fff;
    font-size: 14px;
    border: 3px solid #3b4890
`