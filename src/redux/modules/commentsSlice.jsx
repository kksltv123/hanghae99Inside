import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getCommentsAsync = createAsyncThunk (
    "comments/getCommentsAsync",
    async (postId,data) => {
        console.log(postId)
        try {
            const response = await axios.get(`https://gitpher.shop/api/comments?postId=${postId}`)
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
            const response = await axios.post(`https://gitpher.shop/api/comments`,{
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
            const response = await axios.delete(`http://localhost:3001/COMMENTS/${payload}`)
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
            const response = await axios.put(`http://localhost:3001/COMMENTS/${payload.id}`,{
                id : payload.id,
                memberNickname:payload.memberNickname,
                password : payload.password,
                postId : payload.postId,
                content : payload.content
            })
            return data.fulfillWithValue(response.data)
        }catch (e) {
            return data.rejectWithValue(e)
        }
    }
)


const initialState = {
    COMMENTS : [

    ]
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
            console.log(action)
            return
        },
        [editCommentsAsync.fulfilled] : (state, action) => {
            console.log(action)
            return
        }
    }
})

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;