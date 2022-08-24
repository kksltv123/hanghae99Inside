import React from 'react';
import styled from 'styled-components';
import profile from '../../assets/img/main_img.jpg'
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

const MyHeader = () => {
    const img = profile
    const nickname = localStorage.getItem('nickname');

    return (
        <StMyHeader>
            <Layout>
                <StDiv>
                    <StImg img={img}></StImg>
                    <div>
                        <StName>{nickname}님의 갤로그입니다.</StName>
                        <Link to="/main">메인 페이지로 이동하기</Link>
                    </div>
                </StDiv>
            </Layout>
        </StMyHeader>
    );
};

const StMyHeader = styled.div`
    height: 150px;
    background-color: ${(props) => props.theme.colors.mainColor};
    display: flex;
    align-items: center;
`
const StImg = styled.div`
    width: 100px;
    height: 100px;
    border-radius: 25px;
    background-image: ${props => `url(${props.img})`};
    background-position: center;
    background-size: cover;
    margin-right: 10px;
`

const StName = styled.div`
    color: #fff;
    background-color: #000;
    font-size: ${(props) => props.theme.fontsizes.subtitle3};
    padding: 20px;
    border-radius: 20px;
`

const StDiv = styled.div`
    display: flex;
    align-items: center;
    a {
        color: #fff;
        padding: 10px 20px;
        display: block;
    }
`

export default MyHeader;