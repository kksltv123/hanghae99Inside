import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const urlPosts = process.env.REACT_APP_POSTS

export const getPostsAsync = createAsyncThunk(
    "post/getPostsAsync",
    async (payload,data) => {
        try{
            const response = await axios.get (`${urlPosts}/${payload}`)
           return data.fulfillWithValue(response.data)
        }catch (e) {
           return data.rejectWithValue(e)
        }
    }
)

export const DeletePostsAsync = createAsyncThunk(
    "post/DeletePostsAsync",
    async (postId,thunkAPI) => {
        const response = await axios.delete(`${urlPosts}/${postId}`)
        console.log(response) 
    }
)

const initialState = {
    POST : [

    ]
}


export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers : {},
    extraReducers: {
        [getPostsAsync.fulfilled] : (state, action) => {
            state.POST = action.payload
        },
        [DeletePostsAsync.fulfilled] : (state, action) => {
            console.log(action)
        }
    }
})

export const {} = postsSlice.actions;
export default postsSlice.reducer;