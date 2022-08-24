import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import comments from "../modules/commentsSlice";
import user from "../modules/userSlice"
import like from "../modules/likeSlice";
const store = configureStore({
    reducer: {
        posts,
        comments,
        user,
        like,
    }
});

export default store;