import React from 'react';
import styled from 'styled-components';

const MainSideBox = () => {
    return (
       <> 
        <SideBox>
            <LoginBox>
            로그인 해주세요
            </LoginBox>
            <MyBox>
            <button>my갤로그</button>
            </MyBox>
        </SideBox>
        <BestPost>
            개념글
        </BestPost>
        </> 
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

const MyBox = styled.div`
    height: 36px;
    line-height: 36px;
    text-align: center;
    clear: both;
`

const  BestPost = styled.div`
    position: absolute;
    border: 1px solid black;
    top: 20%;
    left: 80%;
    width: 250px;
    margin-top: 100px;
`