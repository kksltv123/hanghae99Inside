import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"



export const postLikeAsync = createAsyncThunk(
    "like/postLikeAsync",
    async(payload,data) => {
        console.log(payload)
        try{
            const response = await axios.post(`api/pots/like/${payload}`)
            return data.fulfillWithValue(response.data)
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
            const response = await axios.post(`api/pots/dislike/${payload}`)
            return data.fulfillWithValue(response.data)
        }catch (e) {
            return data.rejectWithValue
        }
    } 
)

const initialState = {}

export const likeSlice = createSlice({
    name:"like",
    initialState,
    reducer: {},
    extraReducers: {}
})

export const {} =likeSlice.actions;
export default likeSlice.reducer;