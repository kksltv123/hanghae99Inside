import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';
import axios from 'axios';
import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { __logout } from '../../redux/modules/userSlice';

const Header = () => {
    const navigate = useNavigate();
    const nickname = localStorage.getItem('nickname');
    const isLogin = localStorage.getItem('isLogin');
    const success = useSelector((state) => state.user.success)
    const [ logout, setLogout ] = useState(success)
    const dispatch = useDispatch()

    console.log(isLogin)
    // console.log(success)
    console.log(logout)


    // 로그아웃 토큰 지우기
    const logOut = () => {
        const logoutM = window.confirm("정말 로그아웃 하실건가요?")
        if(logoutM === true) {
            dispatch(__logout());
            setLogout(success)
            console.log(success)
            window.localStorage.clear();
        } else { return }
    }

    return (
        <>
            <StTopHeader>
                <StTitle>Hanghae Inside</StTitle>
                <StInput />
                {isLogin ?
                    <StDiv>
                        <p>{nickname}님 어서오세요.</p>
                        <StButton onClick={logOut}>로그아웃</StButton>
                    </StDiv>
                    :
                    <>
                        <StButtonLogin onClick={() => { navigate("/login") }}>로그인</StButtonLogin>
                    </>

                }
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
const StDiv = styled.div`
    margin-left: 100px;
    display: flex;
    align-items: center;
`

const StButton = styled.button`
    color: #fff;
    background-color: ${(props) => props.theme.colors.mainColor};
    border: none;
    padding: 10px 15px;
    border-radius: 10px;
    cursor: pointer;
    margin-left: 10px;
`

const StButtonLogin = styled.button`
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