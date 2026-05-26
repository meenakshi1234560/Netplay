import { configureStore } from "@reduxjs/toolkit";
import userSliceReducer from "./userSlice";
import movieSlice from "./movieSlice";
import gptSlice from "./gptSlice";
const appstore = configureStore({
  reducer: {
    user: userSliceReducer,
    movies: movieSlice,
    gpt: gptSlice,
  },
});

export default appstore;
