import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const getPostsAsync = createAsyncThunk(
    "post/getPostsAsync",
    async (payload,data) => {
        try{
            const response = await axios.get ("http://localhost:3001/POST")
           return data.fulfillWithValue(response.data)
        }catch (e) {
           return data.rejectWithValue(e)
        }
    }
)

export const DeletePostsAsync = createAsyncThunk(
    "post/DeletePostsAsync",
    async (postId,thunkAPI) => {
        const response = await axios.delete(`http://localhost:3001/POST/${postId}`)
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