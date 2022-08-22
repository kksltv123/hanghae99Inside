import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { postCommentsAsync } from '../../redux/modules/commentsSlice';

const CommentCreate = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const id = Number(params.postId)
    const [memberNickname ,setMemberNickname] = useState("")
    const [password ,setPassword] = useState("")
    const [content, setContent] = useState("")

    const NicknameChange = (e) => {
        e.preventDefault();
        setMemberNickname(e.target.value)
    }

    const PasswordChange = (e) => {
        e.preventDefault();
        setPassword(e.target.value)
    }

    const ContentChange = (e) => {
        e.preventDefault();
        setContent(e.target.value)
    }

    const submitComment = (e) => {
        e.preventDefault();
        if(memberNickname === ""){
            alert("닉네임을 입력하세요")
            return
        }else if(password === "") {
            alert("비밀번호를 입력하세요")
            return
        }else if(content === "") {
            alert("내용을 입력하세요")
            return
        }
        dispatch(postCommentsAsync({
            postId : id,
            memberNickname : memberNickname,
            content : content,
            password : password,
        }))
        setMemberNickname("")
        setPassword("")
        setContent("")
    }


    return (
        <>
            <CreateBox>
            <form onSubmit={submitComment}>
                <input 
                type="tetx" 
                placeholder ="닉네임"
                value={memberNickname}
                onChange={NicknameChange}
                />
                <input 
                type="tetx" 
                placeholder ="비밀번호"
                value={password}
                onChange={PasswordChange}
                />
                <input 
                type="tetx" 
                placeholder ="내용을 입력하세요."
                value={content}
                onChange={ContentChange}/>
                <button>등록</button>
            </form>
            </CreateBox>
            
        </> 
    );
};

export default CommentCreate;

const CreateBox = styled.div`
     width : 1000px;
     height: 300px;
     border: 1px solid black;
     background-color: #fafafa;
     margin: 20px auto;
`
