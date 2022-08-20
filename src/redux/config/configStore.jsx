import { configureStore } from "@reduxjs/toolkit";
import posts from "../modules/postsSlice";
import comments from "../modules/commentsSlice";

const store = configureStore({
    reducer: {
        posts,
        comments,
    }
});

export default store;