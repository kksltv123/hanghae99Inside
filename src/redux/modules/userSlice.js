import { createSlice, createAsyncThunk } from "@reduxjs/toolkit"
import axios from "axios"

const initialState = {
    success : false,
    error : null
}

const urlLogin = process.env.REACT_APP_LOGIN
const urlLogout = process.env.REACT_APP_LOGOUT

export const __loginDB = createAsyncThunk(
    "user/__loginDB",
    async(data, thunkAPI) => {
        try{
            const response = await axios.post(urlLogin, data);
            if(response.data.msg === true){
                localStorage.setItem('authorization', response.headers.authorization);
                localStorage.setItem('refreshToken', response.headers.refreshtoken);
                localStorage.setItem('nickname', response.data.nickname);
                localStorage.setItem('isLogin', true);
                console.log(response.data.msg)
                return thunkAPI.fulfillWithValue(response.data.msg)
            }
        } catch(error) {
            window.alert("아이디 또는 비밀번호를 확인해 주세요")
            return thunkAPI.rejectWithValue(error);
        }
    }
)

export const __logout = createAsyncThunk(
    "user/__logout",
    async(data, thunkAPI) => {
        try {
            const RefreshToken = localStorage.getItem('refreshToken');
            const Authorization = localStorage.getItem('authorization');
            const headers = {
                'Content-Type': 'application/json',
                Authorization: `${Authorization}`,
                Refreshtoken: `${RefreshToken}`
            }
            const response = await axios.delete(urlLogout, {
                headers : headers
            })
            thunkAPI.fulfillWithValue(response.data.memberId)
        }catch (error) {
            thunkAPI.rejectWithValue(error)
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
        },
        [__loginDB.rejected]: (state, action) => {
            state.error = action.payload;
        },
        [__logout.fulfilled]: (state, action) => {
            state.success = action.payload;
        },
        [__logout.rejected]: (state, action) => {
            state.error = action.payload;
        },

    }
})

export const {} = userSlice.actions;
export default userSlice.reducer;