import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';

const Header = () => {
    const navigate = useNavigate();

    return (
        <>
            <StTopHeader>
                <StTitle>Hanghae Inside</StTitle>
                <StInput/>
                <StButton onClick={() => {navigate("/login")}}>로그인</StButton>
            </StTopHeader>
            <StBottomHeader>
                <Layout>
                    <StUl>
                        <li>항해 갤러리</li>
                        <li>항해 미니갤</li>
                        <li>항해 갤로그</li>
                        <li>항해 뉴스</li>
                        <li>항해 게임</li>
                        <li>이벤트</li>
                    </StUl>
                </Layout>
            </StBottomHeader>
        </>
    );
};

const StTopHeader = styled.div`
    max-width: 1200px;
    min-width: 800px;
    display: flex;
    margin: 0 auto;
    padding: 20px;
    align-items: center;
`
const StInput = styled.input`
    border: 2px solid ${(props) => props.theme.colors.mainColor};
    width: 350px;
    padding: 10px;
    margin-left: 100px;
`

const StButton = styled.button`
    color: #fff;
    background-color: ${(props) => props.theme.colors.mainColor};
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 100px;
`

const StTitle = styled.h1`
    font-size: ${(props) => props.theme.fontsizes.subtitle};
    color: #000;
    font-style: italic;
`

const StBottomHeader = styled.div`
    background-color: ${(props) => props.theme.colors.mainColor};
    padding: 20px;
    color: #fff;
`

const StUl = styled.ul`
    display: flex;
    justify-content: space-between;
    width: 800px;
`

export default Header;