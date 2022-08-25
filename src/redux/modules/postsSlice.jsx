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
    async (postId,data) => {
        console.log(postId)
        try{
            const Refreshtoken = localStorage.getItem('refreshToken')
            const Authorization = localStorage.getItem('authorization')
            const headers = {
                'Content-Type' : 'application/json',
                Authorization : `${Authorization}`,
                Refreshtoken : `${Refreshtoken}`
            }
            const response = await axios.delete(`${urlPosts}/${postId}`,{headers : headers})
            return data.fulfillWithValue(response.data.msg)
        }catch (e) {
            return data.rejectWithValue(e)
        }
        
    }
)

const initialState = {
    POST : [

    ],
    susccess : null

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
            state.susccess = action.payload
        }
    }
})

export const {} = postsSlice.actions;
export default postsSlice.reducer;