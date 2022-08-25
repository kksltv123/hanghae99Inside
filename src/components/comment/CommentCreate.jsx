import React, { useState } from 'react';
import styled from 'styled-components';
import { useDispatch, useSelector} from 'react-redux';
import { useParams } from 'react-router-dom';
import { postCommentsAsync,getCommentsAsync } from '../../redux/modules/commentsSlice';

const CommentCreate = () => {
    const params = useParams();
    const dispatch = useDispatch();
    const id = Number(params.postId)
    const [nickname,setNickname] = useState("")
    const [password ,setPassword] = useState("")
    const [content, setContent] = useState("")

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
        if(setNickname === ""){
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
            nickname : nickname,
            content : content,
            password : password,
        }))
        dispatch(getCommentsAsync(id))
        setNickname("")
        setPassword("")
        setContent("")
    }


    return (
        <>
            <CreateBox>
            <form onSubmit={submitComment}>
                <NicPassDiv>
                <div>
                <NicPassinput type="tetx" placeholder ="닉네임" value={nickname} onChange={NicknameChange} />
                </div>
                <div>
                <NicPassinput type="tetx" placeholder ="비밀번호" value={password} onChange={PasswordChange} />
                </div>
                </NicPassDiv>
                <ContentDiv>
                <ContentBox>
                <Contentinput 
                type="tetx" 
                placeholder ="타인의 권리를 침해하거나 명예를 훼손하는 댓글은 운영원칙 및 관련 법률에 제재를 받을 수 있습니다."
                value={content}
                onChange={ContentChange}/>
                </ContentBox>
                </ContentDiv>
                <SubmitDiv>
                <SubmitBtn>등록</SubmitBtn>
                </SubmitDiv>
            </form>
            </CreateBox>
            
        </> 
    );
};

export default CommentCreate;

const CreateBox = styled.div`
     width : 1000px;
     height: 200px;
     border-bottom: 2.5px solid #3b4890;
     border-top: 2.5px solid #3b4890;
     background-color: #fafafa;
     margin: 20px auto;
`

const NicPassDiv = styled.div`
width: 150px;
margin: 20px auto;
float: left;
    
`
const ContentDiv = styled.div`
    float: right;
`

const NicPassinput = styled.input`
    width: 140px;
    height: 30px;
    border: 1px solid #cecdce;
    background-color: #fff;
    font-style: normal;
    margin: 10px;
`

const Contentinput = styled.input`
    width: 750px;
    height: 75px;
    padding: 4px;
    border: 1px solid #cecdce;
    background-color:  #fff;
    font-size: 15px;
    color: #333;
    line-height: 18px;
    margin: 30px;
`

const ContentBox = styled.div`
    position: relative;
`

const SubmitDiv = styled.div`
    float: right;
    margin-right: 30px;
`

const SubmitBtn = styled.button`
    width: 100px;
    height: 35px;
    background-color: #3b4890;
    border-color: #29367c;
    color: #fff
`