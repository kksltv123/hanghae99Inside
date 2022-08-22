import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    success : null,
    isLogin : false,
    error : null
}

export const __loginDB = createAsyncThunk(
    "user/__loginDB",
    async(data, thunkAPI) => {
        try{
            const response = await axios.post('http://54.180.153.149/api/login', data);
            if(response.data.success === false){
                window.alert(response.data.error.message)
                return thunkAPI.rejectWithValue();
            }else{
                console.log(response.headers)
                localStorage.setItem('authorization', response.headers.authorization);
                localStorage.setItem('refreshToken', response.headers.refreshtoken);
                localStorage.setItem('nickname', response.data.nickname);
                localStorage.setItem('isLogin', true);
                return thunkAPI.fulfillWithValue(response.data)
            }

        } catch(error) {
            return thunkAPI.rejectWithValue(error);
        }
    }
)




export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : {
        [__loginDB.fulfilled]: (state, action) => {
            state.success = action.payload;
            state.isLogin = true
        },
        [__loginDB.rejected]: (state, action) => {
            state.isLogin = false;
            state.error = action.payload;
        },
    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;