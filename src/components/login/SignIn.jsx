import React from 'react';
import styled from 'styled-components';

const SignIn = ({SignInUpToggle}) => {
    return (
        <>
            <StInput
                placeholder='이메일'
            />
            <StInput
                placeholder='비밀번호'
            />
            <StButton>로그인</StButton>
            <StButton onClick={SignInUpToggle}>회원가입</StButton>
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

export default SignIn;