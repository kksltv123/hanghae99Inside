import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import comments from "../modules/commentsSlice";
import user from "../modules/userSlice"
import create from "../modules/createSlice";

const store = configureStore({
    reducer: {
        posts,
        comments,
        user,
        create
    }
});

export default store;