import React from 'react';
import styled from 'styled-components';

const MainSideBox = () => {
    return (
        <SideBox>
            <LoginBox>
            로그인 해주세요
            <button>my갤로그</button>
            </LoginBox>
        </SideBox>
    );
};

export default MainSideBox;


const SideBox = styled.div`
    position: absolute;
    border: 1px solid black;
    top: 20%;
    left: 80%;
    width: 250px;
    `

const LoginBox = styled.div`
    height: 43px;
    line-height: 44px;
    font-size: 14px;
    color: black;
`