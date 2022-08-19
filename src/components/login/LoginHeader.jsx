import React from 'react';
import styled from 'styled-components';
import Layout from '../common/Layout';

const LoginHeader = () => {
    return (
        <>
            <StLoginHeader>
                <Layout>
                    <h1>Hanghae Inside 로그인</h1>
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
`

export default LoginHeader;