import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

export const getCommentsAsync = createAsyncThunk (
    "comments/getCommentsAsync",
    async (postId,data) => {
        try {
            const response = await axios.get(`http://localhost:3001/COMMENTS?postId=${postId}`)
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
            const response = await axios.post(`http://localhost:3001/COMMENTS`,{
                postId : payload.postId,
                memberNickname : payload.memberNickname,
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
        }
    }
})

export const {} = commentsSlice.actions;
export default commentsSlice.reducer;