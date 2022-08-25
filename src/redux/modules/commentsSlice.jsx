import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"
import { act } from "react-dom/test-utils"

// REACT_APP_GET_COMMENT = "https://gitpher.shop/api/comments?postId="
// REACT_APP_COMMENT = "https://gitpher.shop/api/comments"

const urlGetComment = process.env.REACT_APP_GET_COMMENT
const urlComment = process.env.REACT_APP_COMMENT

export const getCommentsAsync = createAsyncThunk (
    "comments/getCommentsAsync",
    async (postId,data) => {
        console.log(postId)
        try {
            const response = await axios.get(`${urlGetComment}${postId}`)
            return data.fulfillWithValue(response.data)
        } catch (e) {
            return data.rejectWithValue(e)
        }
    }

)

export const postCommentsAsync = createAsyncThunk (
    "comments/postCommentsAsync",
    async (payload,data) => {
        console.log(payload)
        try{
            const response = await axios.post(urlComment,{
                postId : payload.postId,
                nickname : payload.nickname,
                content : payload.content,
                password : payload.password 

            })
            console.log(response)
            return data.fulfillWithValue(response.data)
        }catch (e) {
            return data.rejectWithValue(e)
        }
        
        
    }
)

export const deleteCommentsAsync = createAsyncThunk (
    "commets/deleteCommentsAsync",
    async(payload,data) => {
        console.log(payload)
        try{
            const response = await axios.delete(`${urlComment}/${payload.id}`)
            return data.fulfillWithValue(response.data)    
        }catch (e) {
            return data.rejectWithValue(e)
        }
        
    }
)

export const editCommentsAsync = createAsyncThunk (
    "commets/editCommentsAsync",
    async(payload,data) => {
        console.log(payload)
        try{
            const response = await axios.put(`${urlComment}/${payload.id}`,{
                id : payload.id,
                nickname:payload.nickname,
                password : payload.password,
                postId : payload.postId,
                content : payload.content
            })
            console.log(response.data)
            return data.fulfillWithValue(response.data)
        }catch (e) {
            return data.rejectWithValue(e)
        }
    }
)


const initialState = {
    COMMENTS : [

    ],
    susccess : {

    }

}


export const commentsSlice = createSlice({
    name : "comments",
    initialState,
    reducers : {},
    extraReducers : {
        [getCommentsAsync.fulfilled] : (state, action) => {
            state.COMMENTS = action.payload
            return
        },
        [deleteCommentsAsync.fulfilled] : (state, action) => {
            state.susccess = action.payload
            return
        },
        [editCommentsAsync.fulfilled] : (state, action) => {
            state.susccess = action.payload
            return
        },
        [postCommentsAsync.fulfilled] : (state, action) => {
            state.susccess = action.payload
        }
    }
})

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;