import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect } from 'react';
import SideTopContents from './SideTopContents';

const MainSideBox = ({topPosts, loading}) => {
    const isLogin = localStorage.getItem('isLogin');
    const nickname = localStorage.getItem('nickname');
    const success = useSelector((state) => state.user.success)

    useEffect(() => {
        const getStatus = () => {
            localStorage.getItem('isLogin');
        }
        getStatus()
    }, [success]);


    const sliceTopPosts = topPosts.slice(0, 8);




    return (
       <> 
        <SideBox>
            <LoginBox>
                {isLogin ? <p>{nickname}님 환영합니다.</p>
                :<Link to="/login">로그인 해주세요</Link>    
                }
            </LoginBox>
            <MyBox>
                {isLogin ? <Link to="/mypage"><button>my갤로그</button></Link>
                :null
                }
            </MyBox>
        </SideBox>
        <BestPost>
            <SideTopContents topPosts={sliceTopPosts} loading={loading}/>
        </BestPost>
        </> 
    );
};

export default MainSideBox;


const SideBox = styled.div`
    position: fixed;
    border: 1px solid black;
    top: 20%;
    left: 80%;
    width: 240px;
    padding: 10px;
    background-color: rgba(0,0,128,0.1);
    backdrop-filter: blur(2px);
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.colors.mainColor};
    button {
        background-color: ${(props) => props.theme.colors.mainColor};
        color: #fff;
        border: none;
        cursor: pointer;
        padding: 8px;
        border-radius: 10px;
    }
`

const LoginBox = styled.div`
    height: 43px;
    line-height: 44px;
    font-size: 14px;
    cursor: pointer;
    a {
        color: ${(props) => props.theme.colors.mainColor};
        text-decoration: none;
    }
`

const MyBox = styled.div`
    height: 36px;
    line-height: 36px;
    clear: both;
`

const  BestPost = styled.div`
    position: fixed;
    border: 1px solid black;
    top: 21%;
    left: 80%;
    width: 240px;
    margin-top: 100px;
    background-color: #fff;
    border-radius: 10px;
    padding: 10px;
    border: 1px solid ${(props) => props.theme.colors.mainColor};
`