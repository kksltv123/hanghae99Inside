import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const TopContents = ({ topPosts, topLoading }) => {
    const navigate = useNavigate();

    if (topLoading) {
        return <h2>Loading...</h2>;
    }

    return (
        <div>
            {topPosts.map(post => (
                <StDiv key={post.postId} onClick={() => { navigate(`/detail/${post.id}`) }}>
                    <StLiTitle>{post.postImg ? <FontAwesomeIcon icon={faImage} style={{ color: "green" }} /> : <FontAwesomeIcon icon={faCommentDots} />}<span>{post.title}</span></StLiTitle>
                    <StLiAuthor>{post.nickname}</StLiAuthor>
                    <StLiDate>{post.createAt.slice(0, 7) + post.createAt.slice(7, 10)}</StLiDate>
                    <StLiView>{post.viewCnt}</StLiView>
                    <StLiHeart>{post.heartCnt}</StLiHeart>
                </StDiv>
            ))}
        </div>
    )
};

const StDiv = styled.div`
    padding: 40px 20px;
    border-bottom: 1px solid #efefef;
    display: flex;
    cursor: pointer;
    &:first-child {
        border-top: 1px solid #efefef;
}
`

const StLiTitle = styled.div`
    list-style: none;
    width: 600px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    span {
        margin-left: 10px;
    }
    svg {
        color: #cdcdcd;
    }
`

const StLiAuthor = styled.li`
    list-style: none;
    width: 100px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const StLiDate = styled.li`
    list-style: none;
    width: 100px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const StLiView = styled.li`
    width: 50px;
    list-style: none;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

const StLiHeart = styled.li`
list-style: none;
    width: 50px;
    text-align: center;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
`

export default TopContents;