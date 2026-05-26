import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showSearch: false,
    lang: "English",
  },
  reducers: {
    showSearch: (state, action) => {
      state.showSearch = !state.showSearch;
    },
    lang: (state, action) => {
      state.lang = action.payload;
    },
  },
});

export const { showSearch, lang } = gptSlice.actions;
export default gptSlice.reducer;
