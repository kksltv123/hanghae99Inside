import React from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';
import { Link } from 'react-router-dom';

const LoginHeader = () => {
    return (
        <>
            <StLoginHeader>
                <Layout>
                    <Link to="/main"><h1>Hanghae Inside 로그인</h1></Link>
                </Layout>
            </StLoginHeader>
        </>
    );
};

const StLoginHeader = styled.div`
    background-color: ${(props) => props.theme.colors.mainColor};
    padding: 20px;
    color:#fff;
    font-size: ${(props) => props.theme.fontsizes.subtitle2};
    font-style: italic;
    h1 {
        margin-top: 30px;
        margin-left: 20px;
    }
    a {
        text-decoration: none;
        color: #fff;
    }
`

export default LoginHeader;