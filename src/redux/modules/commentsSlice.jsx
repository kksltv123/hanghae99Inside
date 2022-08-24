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
            const response = await axios.delete(`https://gitpher.shop/api/comments/${payload.id}`,{
                id : payload.id,
                password : payload.password
            })
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
            const response = await axios.put(`https://gitpher.shop/api/comments/${payload.id}`,{
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
            console.log(action)
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