import React from 'react';
import MainContents from './MainContents';
import MainSideBox from './MainSideBox';
import styled from 'styled-components';

const mainLayout = () => {
    
    return (
        <>
            <PostsContainer>
                <MainContents/> 
            </PostsContainer>
            <MainSideBox/>
        </>    
    )
};

export default mainLayout;

const PostsContainer = styled.div`
    width: 800px;
    max-width: 800px;
    height: 450px;
    margin: 20px auto;
    border: 1px solid black;
`