import { createSlice } from "@reduxjs/toolkit";

const movieSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    trailerVideos: null,
    popularVideo: null,
    upcomingVideo: null,
    topratedVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    trailerVideo: (state, action) => {
      state.trailerVideos = action.payload;
    },
    popularVideo: (state, action) => {
      state.popularVideo = action.payload;
    },
    upcomingVideo: (state, action) => {
      state.upcomingVideo = action.payload;
    },
    topRatedVideo: (state, action) => {
      state.topratedVideo = action.payload;
    },
  },
});
export const {
  addNowPlayingMovies,
  trailerVideo,
  popularVideo,
  upcomingVideo,
  topRatedVideo,
} = movieSlice.actions;

export default movieSlice.reducer;
