import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import comments from "../modules/commentsSlice";
import user from "../modules/userSlice"

const store = configureStore({
    reducer: {
        posts,
        comments,
        user
    }
});

export default store;