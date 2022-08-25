import React,{ useEffect } from 'react';
import styled from 'styled-components';
import { useParams } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { getPostsAsync, DeletePostsAsync } from '../../redux/modules/postsSlice';
import { postLikeAsync, postUnlikeAsync } from '../../redux/modules/likeSlice';
import { useNavigate } from 'react-router-dom';
import like from "./like.png"
import unlike from "./unlike.png"


const DetailContents = () => {
    const params = useParams()
    const dispatch = useDispatch()
    const navigate = useNavigate()
    const posts = useSelector((state) => state.posts.POST)
    // const post = posts.POST.find((board) => board.postId === params.postId)
    const susccess = useSelector((state) => state.like.susccess)
   
    


 
    const onClicDelete = (e) => {
        e.preventDefault();
        dispatch(DeletePostsAsync(params.postId))
        navigate("/")
    }

    const onLike = (e) => {
        e.preventDefault();
        dispatch(postLikeAsync(params.postId))
    
    }

    const onUnlike = (e) => {
        e.preventDefault();
        dispatch(postUnlikeAsync(params.postId))
    }

    useEffect(() => {
        dispatch(getPostsAsync(params.postId))
    },[susccess])



   

    return (
       <>   
            <PeageHeader>
                <h1>항해99 갤러리</h1>        
            </PeageHeader>
            <DetailContainer>
                    <TitleDiv>
                    <h1>{posts.title}</h1><br/>
                    <em>{posts.nickname} | {posts.createAt}|조회수{posts.viewCnt} | 추천{posts.heartCnt}| 비추천{posts.unHeartCnt}</em>
                    <PostBtnBox>
                    <StyleBtn onClick={onClicDelete} >삭제</StyleBtn>
                    </PostBtnBox>
                    </TitleDiv>
                    <ContentDiv>
                    {posts?.content}
                    <Image src = {posts?.postImg} />
                    <HeartBox>
                        <LikeDiv>
                        {posts.heartCnt}
                        </LikeDiv>
                        <UnlikeDiv>
                        {posts.unHeartCnt}
                        </UnlikeDiv>
                        <LikeBtn type="button" onClick={onLike}><img src={like} alt="" width="60" height="60"/></LikeBtn>
                        <LikeBtn type="button" onClick={onUnlike}><img src={unlike} alt="" width="60" height="60"/></LikeBtn>
                    </HeartBox>
                    </ContentDiv>
            </DetailContainer>
        </> 
    );
};

export default DetailContents;


const PeageHeader = styled.div`
    width: 1000px;
    height: 30px;
    border-bottom: 2.5px solid #3b4890;
    margin: 20px auto;
    color: #3b4890;
    font-size: 25px;
`

const DetailContainer = styled.div`
     width : 1000px;
     margin: 0 auto;
`

const  TitleDiv = styled.div`
    width: 1000px;
    height: 60px;
    border-bottom: 1px solid Lightgray;
    em {
        font-size: 13px;
        cursor: pointer;
        font-style: normal
    }
`

const ContentDiv = styled.div`
    width: 1000px;
    margin: 20px auto;
`


const HeartBox = styled.div`
    width: 300px;
    height: 80px;
    padding-top: 10px;
    border: 1px solid Lightgray;
    margin: 20px auto;
    text-align: center;
`

const PostBtnBox = styled.div`
    width: 100px;
    margin: 0 auto;
    float: right;
`

const LikeBtn = styled.button`
    background-color: white;
    border-radius: 80px;
    border: 1px solid white;
`

const Image = styled.img`
    display: flex;
`
const StyleBtn = styled.button`
    width: 65px;
    height: 25px;
    background-color: #3b4890;
    border-color: #29367c;
    color: #fff
`
const LikeDiv = styled.div`
    color: #d31900;
    float : left;
    margin: 25px auto;
    margin-left: 30px;
    font-size: 25px;
    font-weight: bold;
`

const UnlikeDiv = styled.div`
    color : #29367c;
    float : right;
    margin: 25px auto;
    margin-right: 30px;
    font-size: 25px;
    font-weight: bold;
`