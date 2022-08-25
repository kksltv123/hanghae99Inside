import React, { useEffect } from 'react';
import Layout from '../common/Layout';
import MyComment from './MyComment';
import MyPosts from './MyPosts';
import MySideButton from './MySideButton';
import styled from 'styled-components';
import { useState } from 'react';
import axios from 'axios';

const MyLayout = () => {
    const [buttonToggle, setbuttonToggle] = useState(1)
    const [loading, setLoading] = useState(false);
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const Authorization = localStorage.getItem('authorization');
        const fetchPosts = async () => {   
            setLoading(true);
            const res = await axios.get("https://gitpher.shop/api/myinfo",{
                headers:{
                    'Content-Type': 'application/json',
                    Authorization: `${Authorization}`,
                }
            })
            setPosts(res.data);
            setLoading(false);
        }
        fetchPosts();
    }, [])


    return (
        <Layout>
            <StDiv>
                <MySideButton buttonToggle={buttonToggle} setbuttonToggle={setbuttonToggle}/>
                <div>
                    <MyPosts buttonToggle={buttonToggle} loading={loading} posts={posts} />
                    {/* <MyComment buttonToggle={buttonToggle}/> */}
                </div>
            </StDiv>
        </Layout>
    );
};

const StDiv = styled.div`
    display: flex;
`

export default MyLayout;