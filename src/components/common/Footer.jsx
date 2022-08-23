import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Layout>
            <StFooter>
                <StDl>
                    <dt>FE::</dt>
                    <dd>🌟권용준</dd>
                    <dd>🌟고호성</dd>
                    <dd>🌟박수원</dd>
                </StDl>
                <StDl>
                    <dt>BE::</dt>
                    <dd>✨최준우</dd>
                    <dd>✨김재영</dd>
                    <dd>✨강지영</dd>
                </StDl>
                <Stcopy>
                    Copyright ⓒ 2022 HanghaeInside. All rights reserved.
                </Stcopy>
            </StFooter>
        </Layout>
    );
};


const StFooter = styled.footer`
    border-top: 1px solid ${(props) => props.theme.colors.mainColor};
    padding: 30px;
    width: 1200px;
    display: flex;
    flex-direction: column;
`

const StDl = styled.dl`
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
`

const Stcopy = styled.div`
    display: flex;
    justify-content: center;
`

export default Footer;