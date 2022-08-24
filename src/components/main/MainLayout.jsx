import React, { useState, useEffect } from 'react';
import MainContents from './MainContents';
import MainSideBox from './MainSideBox';
import styled, { css } from 'styled-components';
import axios from 'axios';
import Pagenation from './Pagenation';
import { Link } from 'react-router-dom';
import TopContents from './TopContents';

const MainLayout = () => {
    // 전체글
    const [posts, setPosts] = useState([]);
    const [topPosts, setTopPosts] = useState([]);
    const [loading, setLoading] = useState(false);
    const [topLoading, setTopLoading] = useState(false);
    const [currentPage, setCurrentPage] = useState(1);
    const [postsPerPage] = useState(10);

    const urlPosts = process.env.REACT_APP_POSTS
    const urlTopPosts = process.env.REACT_APP_POSTS_TOP

    useEffect(() => {
        const fetchPosts = async () => {
            setLoading(true);
            const res = await axios.get(urlPosts)
            setPosts(res.data);
            setLoading(false);
        }
        const fetchTopPosts = async () => {
            setTopLoading(true);
            const res = await axios.get(urlTopPosts)
            setTopPosts(res.data);
            setTopLoading(false);
        }
        fetchPosts();
        fetchTopPosts();
    }, [])

    console.log(loading)
    console.log(topLoading)
    console.log(urlPosts)

    // Get current posts
    const indexOfLastPost = currentPage * postsPerPage;
    const indexOfFirstPost = indexOfLastPost - postsPerPage;
    const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

    // Change page
    const paginate = pageNumber => setCurrentPage(pageNumber)


    const indexOfTopLastPost = currentPage * postsPerPage;
    const indexOfTopFirstPost = indexOfTopLastPost - postsPerPage;
    const currentTopPosts = topPosts.slice(indexOfTopFirstPost, indexOfTopLastPost);

    // 개념글 전체글 버튼
    const [buttonToggle, setbuttonToggle] = useState(true)


    return (
        <StWrap>
            {buttonToggle ?
                <PostsContainer>
                    <h3>항해 전체글</h3>
                    <StTapDiv>
                        <StInnerDiv>
                            <StTap1 onClick={() => setbuttonToggle(true)} buttonToggle={buttonToggle}>전체글</StTap1>
                            <StTap2 onClick={() => setbuttonToggle(false)} buttonToggle={buttonToggle}>개념글</StTap2>
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
                    <MainContents posts={currentPosts} loading={loading} />
                    <Pagenation postsPerPage={postsPerPage} totalPosts={posts.length} paginate={paginate} />
                </PostsContainer>
                :
                <PostsContainer>
                    <h3>항해 개념글</h3>
                    <StTapDiv>
                        <StInnerDiv>
                            <StTap1 onClick={() => setbuttonToggle(true)}>전체글</StTap1>
                            <StTap2 onClick={() => setbuttonToggle(false)}>개념글</StTap2>
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
                    <TopContents topPosts={currentTopPosts} loading={topLoading} />
                    <Pagenation postsPerPage={postsPerPage} totalPosts={topPosts.length} paginate={paginate} />
                </PostsContainer>
            }
            <MainSideBox topPosts={currentTopPosts} loading={topLoading}/>
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
    background-color: ${props => (props.buttonToggle ? '#3b4890' : '#efefef')};
    color: ${props => (props.buttonToggle ? '#fff' : '#333')};
    padding: 10px;
    cursor: pointer;
`
const StTap2 = styled.div`
    width: 100px;
    text-align: center;
    padding: 10px;
    background-color: ${props => (props.buttonToggle ? '#efefef' : '#3b4890')};
    color: ${props => (props.buttonToggle ? '#333' : '#fff')};
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