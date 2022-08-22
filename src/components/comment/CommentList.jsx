import React, { useEffect,useState } from 'react';
import styled from 'styled-components';
import { useSelector,useDispatch } from "react-redux";
import { getCommentsAsync } from '../../redux/modules/commentsSlice';
import { useParams } from 'react-router-dom';


const CommentList = () => {
    const  params = useParams();
    const  dispatch = useDispatch();
    const comments = useSelector((state) => state.comments)
    const editcm = useSelector((state) => state.comments.COMMENTS)
    console.log(editcm)
   

    useEffect(() => {
        dispatch(getCommentsAsync(params.postId))
    },[])

    const [password,setPassword] = useState("")
    const [editBtn, setEditBtn] = useState(false)
    const [delBtn,setDelBtn] = useState(false)
    const [idChect, setIdCheck] = useState(-1)

    const CheckPassword = (e) => {
        e.preventDefault()
        setPassword(e.target.value)
    }
    
   
    


    return (
        <CommentContainer>
            {comments.COMMENTS.map((comment,index) => {
                return (
                    <div key = {comment.id}>
                        {comment.memberNickname} |
                        ({comment.id}) |
                        {comment.content} |
                        {comment.modifiedAt}|
                        <div key ={index}>
                        <button onClick={() => {setEditBtn(!editBtn)}}>수정</button>
                        {editBtn === true ?
                        <div>
                          <input type ="text" value ={password} onChange ={CheckPassword} placeholder = "비밀번호"/>
                          <button>수정하기</button>
                        </div> : null}
                        </div>
                        <div>
                        <button onClick={() => {setDelBtn(!delBtn)}}>삭제</button>
                        {delBtn === true ? 
                        <div>
                            <input type ="text" value ={password} onChange={CheckPassword} placeholder = "비밀번호"/>
                            <button>삭제하기</button>
                        </div>
                        : null}
                        </div>
                    </div>
                )
            })}
        </CommentContainer>
    );
};

export default CommentList;

const CommentContainer = styled.div`
    width : 1000px;
     height: 300px;
     border: 1px solid black;
     margin: 0 auto;
`