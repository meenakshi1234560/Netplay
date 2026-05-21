import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSlice from "./movieSlice";
const appstore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSlice,
  },
});

export default appstore;
