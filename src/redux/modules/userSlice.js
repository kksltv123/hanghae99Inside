import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    success : null,
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

export const __logout = createAsyncThunk(
    "user/__logout",
    async(data, thunkAPI) => {
            const RefreshToken = localStorage.getItem('refreshToken');
            const Authorization = localStorage.getItem('authorization');
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `${Authorization}`,
                Refreshtoken: `${RefreshToken}`
            }
            const response = await axios.delete('http://54.180.153.149/api/logout', {
                headers : headers
            })
            thunkAPI.fulfillWithValue(response.data)
        }
    
)




export const userSlice = createSlice({
    name : "user",
    initialState,
    reducers : {},
    extraReducers : {
        [__loginDB.fulfilled]: (state, action) => {
            state.success = action.payload;
        },
        [__loginDB.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [__logout.fulfilled]: (state, action) => {
            state.success = action.payload;
        },

    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;