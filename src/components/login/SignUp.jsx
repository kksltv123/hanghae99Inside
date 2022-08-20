import React from 'react';
import styled from 'styled-components';

const SignUp = ({SignInUpToggle}) => {
    return (
        <>
        <StValidateBox>
            <StInput
                placeholder='이메일'
            />
            <StValidateButton>중복검사</StValidateButton>
        </StValidateBox>
        <StValidateBox>
            <StInput
                placeholder='닉네임'
            />
            <StValidateButton>중복검사</StValidateButton>
        </StValidateBox>
            <StInput
                placeholder='비밀번호'
            />
            <StInput
                placeholder='비밀번호 확인'
            />
            <StButton >회원가입</StButton>
            <StButton onClick = {SignInUpToggle}>취소</StButton>
        </>
    );
};

const StInput = styled.input`
    display: block;
    width: 400px;
    height: 40px;
    box-sizing: border-box;
    background-color: #efefef;
    border: none;
    margin-bottom: 10px;
`

const StButton = styled.button`
    display: block;
    width: 400px;
    height: 40px;
    border: none;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: #fff;
    margin-bottom: 10px;
    cursor: pointer;
`
const StValidateBox = styled.div`
    display: flex;
    align-items: center;
    input {
        width: 350px
    }
`
const StValidateButton = styled.button`
    border: none;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: #fff;
    width: 50px;
    font-size: 10px;
    height: 40px;
    padding: 0;
    margin-bottom: 10px;
    cursor: pointer;
`


export default SignUp;