import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./slices/auth.slice";
import articlesSlice from "./slices/articles.slice";
import categorySlice from "./slices/category.slice";

const store = configureStore({
  reducer: {
    auth: authSlice,
    Articles: articlesSlice,
    Category: categorySlice,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
