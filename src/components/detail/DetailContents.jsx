import React,{ useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync, DeletePostsAsync } from '../../redux/modules/postsSlice';
import { useNavigate } from 'react-router-dom';

const DetailContents = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const posts = useSelector((state) => state.posts)
    const post = posts.POST.find((board) => board.postId == params.postId)
    
    useEffect(() => {
        dispatch(getPostsAsync())
    },[])

    const onClicDelete = (e) => {
        e.preventDefault();
        dispatch(DeletePostsAsync(post.id))
        navigate("/")
    }
   

    return (
       <> 
            <PeageHeader>
                    항해99 갤러리
                    <hr/>
            </PeageHeader>
            <DetailContainer>
                    <h3>{post?.title}</h3>
                    {post?.memberNickname} | {post?.createdAt} | 조회수{post?.viewCnt} | 추천{post?.heartCnt}
                    <hr/>
                    {post?.content}
                    <img src = {post?.posting} width= "100" height="100" alt =""/>
                    <HeartBox>
                        <button>개념</button>
                        <button>비추</button>
                    </HeartBox>
            </DetailContainer>
            <PostBtnBox>
                    <button
                    onClick={onClicDelete}
                    >삭제</button>
            </PostBtnBox>
        </> 
    );
};

export default DetailContents;

const DetailContainer = styled.div`
     width : 1000px;
     height: 450px;
     border: 1px solid black;
     margin: 0 auto;
`


const PeageHeader = styled.div`
    width: 1000px;
    height: 30px;
    border: 1px solid blue;
    margin: 10px auto;
`

const HeartBox = styled.div`
    width: 250px;
    height: 80px;
    border: 1px solid red;
    margin: 200px auto;
`

const PostBtnBox = styled.div`
    width: 100px;
    height: 23px;
    border: 1px solid red;
    margin: 10px auto;
    margin-right: 100px;
`