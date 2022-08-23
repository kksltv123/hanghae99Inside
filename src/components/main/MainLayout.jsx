import React, { useState, useEffect } from 'react';
import MainContents from './MainContents';
import MainSideBox from './MainSideBox';
import styled from 'styled-components';
import axios from 'axios';
import Pagenation from './Pagenation';
import { Link } from 'react-router-dom';

const MainLayout = () => {
    // 전체글
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get('http://localhost:3001/POST')
            setPosts(res.data);
            setLoading(false);
        }

        fetchPosts();
    }, [])

    // 개념글



    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)

    return (
        <StWrap>
            <PostsContainer>
                <h3>항해 갤러리</h3>
                <StTapDiv>
                    <StInnerDiv>
                        <StTap1>전체글</StTap1>
                        <StTap2>개념글</StTap2>
                    </StInnerDiv>
                    <Link to="/create"><StTap3>글쓰기</StTap3></Link>
                </StTapDiv>
                <StGelleryHeader>
                    <StLiTitle>제목</StLiTitle>
                    <StLiAutor>글쓴이</StLiAutor>
                    <StLiDate>작성일</StLiDate>
                    <StLi>조회</StLi>
                    <StLi>추천</StLi>
                </StGelleryHeader>
                <MainContents posts={currentPosts} loading={loading}/> 
                <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                <MainSideBox/>
            </PostsContainer>
        </StWrap>    
    )
};

export default MainLayout;

const StTapDiv = styled.div`
    display: flex;
    margin-top: 10px;
    margin-bottom: 10px;
    width: 100%;
    justify-content: space-between;
`

const StInnerDiv = styled.div`
    display: flex;
`

const StTap1 = styled.div`
    width: 100px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: #fff;
    padding: 10px;
    cursor: pointer;
`
const StTap2 = styled.div`
    width: 100px;
    text-align: center;
    padding: 10px;
    background-color: #efefef;
    cursor: pointer;
`
const StTap3 = styled.div`
    width: 100px;
    text-align: center;
    background-color: ${(props) => props.theme.colors.mainColor};
    color: #fff;
    padding: 10px;
    cursor: pointer;
`

const StGelleryHeader = styled.ul`
    display: flex;
    padding: 20px;
    border-top: 1px solid ${(props) => props.theme.colors.mainColor};
`
const StLi = styled.li`
    width: 50px;
    box-sizing: border-box;
    text-align: center;
`

const StLiTitle = styled.li`
    width: 600px;
    text-align: center;
    box-sizing: border-box;
`

const StLiAutor = styled.li`
    width: 100px;
    text-align: center;
`

const StLiDate = styled.li`
    width: 100px;
    text-align: center;
`

const StWrap = styled.div`
    display: flex;
`

const PostsContainer = styled.div`
    min-width: 1000px;
    max-width: 1200px;
    margin: 20px auto;
    h3 {
        padding: 20px;
        font-size: ${(props) => props.theme.fontsizes.subtitle2};
    }
`