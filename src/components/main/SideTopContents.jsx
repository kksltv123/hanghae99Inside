import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const SideTopContents = ({topPosts, topLoading}) => {
    const [slide, setSlide] = useState(0);

    if(topLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <>
            <StDiv>
                <StH3>개념글</StH3>
                {slide ? <button onClick={() => setSlide(0)}>보기</button> : <button onClick={() => setSlide(1)}>닫기</button>}
            </StDiv>
            <StUl slide={slide}>
                {topPosts.map((topPost) => (
                    <Link to={`/detail/${topPost.postId}`} key={topPost.postId}><StLi>🔥{topPost.title}</StLi></Link>
                ))}
            </StUl>
        </>
    );
};
const StDiv = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    button {
        padding: 0 10px;
        border: none;
        margin: 0;
        display: block;
        margin-bottom: 10px;
        cursor: pointer;
        background-color: ${(props) => props.theme.colors.mainColor};
        color: #fff;
    }
`

const StH3 = styled.h3`
    margin-bottom: 10px;
`

const StUl = styled.ul`
    a {
        display: ${props => (props.slide === 0 ? 'block' : 'none')};
        text-decoration: none;
    }
`

const StLi = styled.li`
    padding: 8px 0px;
    cursor: pointer;
    color: #333;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    &:hover {
        color: ${(props) => props.theme.colors.mainColor};
    }
`

export default SideTopContents;