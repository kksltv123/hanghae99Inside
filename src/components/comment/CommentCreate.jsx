import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch } from 'react-redux';

const CommentCreate = () => {
    const dispatch = useDispatch();

    const [nickname ,setNickname] = useState()
    const [password ,setPassword] = useState()
    const [content, setContent] = useState()

    const NicknameChange = (e) => {
        e.preventDefault();
        setNickname(e.target.value)
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
        if(nickname === ""){
            alert("닉네임을 입력하세요")
            return
        }else if(password === "") {
            alert("비밀번호를 입력하세요")
            return
        }else if(content === "") {
            alert("내용을 입력하세요")
            return
        }
    }


    return (
        <CreateBox>
            <input type="tetx" placeholder ="닉네임"/>
            <input type="tetx" placeholder ="비밀번호"/>
            <input type="tetx" placeholder ="내용을 입력하세요."/>
            <button>등록</button>
        </CreateBox>
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
