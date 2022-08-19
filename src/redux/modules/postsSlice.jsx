import { createSlice } from "@reduxjs/toolkit"

const initialState = {
    POST : [
        {
            "postId" : 1,
            "memberNickname" : "작성자",
            "title" : "여기에 제목이 들어갑니다",
            "content" : "여기에 내용이 들어갑니다",
            "posting" : "https://cdn.pixabay.com/photo/2021/11/16/15/35/electronics-6801339_960_720.jpg"
        }
    ]
}


export const postsSlice = createSlice({
    name: "posts",
    initialState,
    reducers : {},
})

export const {} = postsSlice.actions;
export default postsSlice.reducer;