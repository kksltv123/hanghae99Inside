import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from "react-redux";
import { getCommentsAsync } from '../../redux/modules/commentsSlice';
import { useParams } from 'react-router-dom';
import Comment from "./Comment"


const CommentList = () => {
    const  params = useParams();
    const  dispatch = useDispatch();
    const comments = useSelector((state) => state.comments.COMMENTS)
    const editcm = useSelector((state) => state.comments.COMMENTS)
    const susccess = useSelector((state) => state.comments.susccess)
   

    useEffect(() => {
        dispatch(getCommentsAsync(params.postId))
    },[dispatch,susccess])

    const [buttonSlelect, setButtonSelect] = useState(true)

    const Click = (i) => {
        const newArr = Array(comments.length).fill(false);
        newArr[i] = true
        setButtonSelect(newArr)
    }
    
    


    return (
        <CommentContainer>
            {comments.map((comment,index) => {
                return (
                    <Comment 
                    key = {index}
                    comment = {comment}
                    Click = {Click}
                    Selected = {buttonSlelect[index]}
                    elementIndex = {index}
                    />
                        
   
                )
            })}
        </CommentContainer>
    );
 }

export default CommentList;

const CommentContainer = styled.div`
    width : 1000px;
     border-bottom: 2.5px solid #3b4890;
     border-top: 2.5px solid #3b4890;
     margin: 0 auto;
`