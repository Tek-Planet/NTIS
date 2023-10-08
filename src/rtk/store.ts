import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./features/user/userSlice";
import newsReducer from "./features/news/newsSlice";
import dashBoardReducer from "./features/dashBoard/dashBoardSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    news: newsReducer,
    dashboard: dashBoardReducer,
  },

  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(),
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export { store };
