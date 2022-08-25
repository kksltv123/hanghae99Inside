import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const postLikeAsync = createAsyncThunk(
    "like/postLikeAsync",
    async(payload,data) => {
        console.log(payload)
        try{
            const Refreshtoken = localStorage.getItem('refreshToken')
            const Authorization = localStorage.getItem('authorization')
            const headers = {
                'Content-Type' : 'application/json',
                Authorization : `${Authorization}`,
                Refreshtoken : `${Refreshtoken}`
            }
            const response = await axios.post(`https://gitpher.shop/api/posts/like/${payload}`,{},{headers : headers})
            console.log(response)
            return data.fulfillWithValue(response.data.postId)
        }catch (e) {
            return data.rejectWithValue
        }
    }
)

export const postUnlikeAsync = createAsyncThunk (
    "like/postUnlikeAsync",
    async(payload,data) => {
        console.log(payload)
        try{
            const Refreshtoken = localStorage.getItem('refreshToken')
            const Authorization = localStorage.getItem('authorization')
            const headers = {
                'Content-Type' : 'application/json',
                Authorization : `${Authorization}`,
                Refreshtoken : `${Refreshtoken}`
            }
            const response = await axios.post(`https://gitpher.shop/api/posts/dislike/${payload}`,{},{headers :headers})
            return data.fulfillWithValue(response.data)
        }catch (e) {
            return data.rejectWithValue
        }
    } 
)

const initialState = {
    susccess : {

    }
}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducer: {},
    extraReducers: {
        [postLikeAsync.fulfilled] : (state, action) => {
            console.log(action.payload)
            state.susccess = action.payload
            return
        },
        [postUnlikeAsync.fulfilled] : (state, action) => {
            state.susccess = action.payload
            return
        }
    }
})

export const {} =likeSlice.actions;
export default likeSlice.reducer;