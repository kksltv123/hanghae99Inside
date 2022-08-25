import React from "react";
import 'quill/dist/quill.bubble.css';
import styled from "styled-components";
import palette from "../../lib/styles/palette";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const EditorBlock = styled.form`
  /* 페이지 위아래 여백 지정 */
  padding-top: 5rem;
  padding-bottom: 5rem;
  display: flex;
  flex-direction: column;
`;

const TitleInput = styled.input`
  outline: none;
  border: none;
  font-size: 3rem;
  padding-bottom: 0.5rem;
  border-bottom: 1px solid ${palette.gray[4]};
  margin-bottom: 2rem;
  width: 100%;
`;



const Editor = () => {

const navigate = useNavigate()

const onSubmitHandler = async (e) => {
  e.preventDefault();
  const form = document.getElementById('form');

  const formData = new FormData(form);
  try {
      const Refreshtoken = localStorage.getItem('refreshToken');
      const Authorization = localStorage.getItem('authorization');
      const headers = {
          'Content-Type': 'application/json',
          Authorization: `${Authorization}`,
          Refreshtoken: `${Refreshtoken}`
      }
      const res = await axios.post('https://gitpher.shop/api/posts', formData, {headers: headers} )
      console.log(res)
  } catch (err) {
      console.log(err);
  }
  navigate('/main');
}

  return (
    <EditorBlock id="form" onSubmit={onSubmitHandler}>
      <TitleInput placeholder="제목을 입력하세요." name="title"/>
      <StFileBox>
        <StInputName placeholder="첨부파일"/>
        <StLabel htmlFor="file">파일찾기</StLabel>
        <ImgInput type="file" name="postImg" placeholder="첨부파일" id="file"/>
      </StFileBox>
      <TextInput name="content"></TextInput>
      <StButton>제출</StButton>
    </EditorBlock>
  );
};
const StInputName = styled.input`
  display: inline-block;
  height: 40px;
  padding: 0 10px;
  vertical-align: middle;
  border: 1px solid #dddddd;
  width: 89%;
  color: #999999;
`

const StLabel = styled.label`
  display: inline-block;
  line-height: 40px;
  padding: 0px 10px;
  color: #fff;
  vertical-align: middle;
  background-color: #999999;
  cursor: pointer;
  height: 40px;
  margin-left: 10px;
`
const ImgInput = styled.input`
  width: 0;
  height: 0;
  padding: 0;
  overflow: hidden;
  border: 0;
`


const StFileBox = styled.div`
  margin-bottom: 30px;
`

const StButton = styled.button`
  width: 100px;
  padding: 10px 0px;
  background-color: ${(props) => props.theme.colors.mainColor};
  border: none;
  color: #fff;
  font-size: 18px;
  margin-top: 20px;
  margin-left: 90%;
  cursor: pointer;
`

const TextInput = styled.textarea`
  height: 300px;
  resize: none;
`


export default Editor;