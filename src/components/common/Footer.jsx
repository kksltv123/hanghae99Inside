import React from 'react';
import Layout from './Layout';
import styled from 'styled-components';

const Footer = () => {
    return (
        <Layout>
            <StFooter>
                <StDl>
                    <dt>FE::</dt>
                    <dd>πκΆμ©μ€</dd>
                    <dd>πκ³ νΈμ±</dd>
                    <dd>πλ°μμ</dd>
                </StDl>
                <StDl>
                    <dt>BE::</dt>
                    <dd>β¨μ΅μ€μ°</dd>
                    <dd>β¨κΉμ¬μ</dd>
                    <dd>β¨κ°μ§μ</dd>
                </StDl>
                <Stcopy>
                    Copyright β 2022 HanghaeInside. All rights reserved.
                </Stcopy>
            </StFooter>
        </Layout>
    );
};


const StFooter = styled.footer`
    border-top: 1px solid ${(props) => props.theme.colors.mainColor};
    padding: 30px;
    width: 1100px;
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