import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCommentDots } from "@fortawesome/free-solid-svg-icons";
import { faImage } from "@fortawesome/free-solid-svg-icons";

const MyPosts = ({buttonToggle , posts, loading}) => {
    const navigate = useNavigate()

    if (loading) {
        return <h2>Loading...</h2>;
    }

    console.log(posts)

    return (
        <>
            <StH3>
                {buttonToggle === 1 ? "내가 올린 게시물" : (buttonToggle === 2 ? "내가 올린 게시물" : null)}
            </StH3>
            <div>
            {posts.map(post => (
                <StDiv key={post.postId} onClick={() => {navigate(`/detail/${post.postId}`)}}>
                    <StLiTitle>{post.postImg ? <FontAwesomeIcon icon={faImage} style={{color:"green"}}/> : <FontAwesomeIcon icon={faCommentDots}/>}<span>{post.title}</span></StLiTitle>
                    <StLiAuthor>{post.nickname}</StLiAuthor>
                    <StLiDate>{post.createAt.slice(0,7) + post.createAt.slice(7,10)}</StLiDate>
                    <StLiView>{post.viewCnt}</StLiView>
                    <StLiHeart>{post.heartCnt}</StLiHeart>
                </StDiv>
            ))}
            </div>
        </>
    );
};

const StH3 = styled.h3`
    font-size: ${(props) => props.theme.fontsizes.subtitle2};
    padding: 20px;
`

const StDiv= styled.div`
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
`

const StLiDate = styled.li`
    list-style: none;
    width: 100px;
    text-align: center;
`

const StLiView = styled.li`
    width: 50px;
    list-style: none;
    text-align: center;
`

const StLiHeart =styled.li`
list-style: none;
    width: 50px;
    text-align: center;
`

export default MyPosts;