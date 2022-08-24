import React from 'react';
import Layout from '../common/Layout';
import MyComment from './MyComment';
import MyPosts from './MyPosts';
import MySideButton from './MySideButton';
import styled from 'styled-components';
import { useState } from 'react';

const MyLayout = () => {
    const [buttonToggle, setbuttonToggle] = useState(1)
    return (
        <Layout>
            <StDiv>
                <MySideButton buttonToggle={buttonToggle} setbuttonToggle={setbuttonToggle}/>
                <div>
                    <MyPosts buttonToggle={buttonToggle}/>
                    <MyComment buttonToggle={buttonToggle}/>
                </div>
            </StDiv>
        </Layout>
    );
};

const StDiv = styled.div`
    display: flex;
`

export default MyLayout;