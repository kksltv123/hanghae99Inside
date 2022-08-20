import React, { useEffect } from 'react';
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux"
import styled from 'styled-components';
import { getPostsAsync } from '../../redux/modules/postsSlice';
import { Link } from "react-router-dom"

const MainContents = () => {
    const dispatch = useDispatch();


    const posts = useSelector((state) => state.posts)
    console.log(posts)
 

    useEffect(() => {
        dispatch(getPostsAsync())
      
    }, [])


   
    

    return (
        <>
        <div>번호 제목 글쓴이 작성일 조회 추천</div>
         <PostBox >
            {posts.POST.map((post,index) => {
                return(
                    <Link to = {`detail/${post.postId}`} key = {index}>
                        <div>
                            {post.postId}
                            {post.title}
                            {post.memberNickname}
                            {post.posting}
                        </div>
                    </Link> 
                )
            })}
         </PostBox>
        </>
    );
};

export default MainContents;

const PostBox = styled.div`
    width: 800px;
    max-width: 800px;
    height: 300px;
    border: 1px solid red;
    margin-top: 70px;
 `

// const PostDiv = styled.div`
//     width:
// `

