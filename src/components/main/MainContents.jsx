import React from 'react';
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"


const MainContents = () => {
    const posts = useSelector((state) => state.posts)
    const navigate = useNavigate();
    console.log(posts)

    return (
        <div>
            <button onClick={() => {navigate("/create")}}>게시물 작성</button>
           확인 
        </div>
    );
};

export default MainContents;