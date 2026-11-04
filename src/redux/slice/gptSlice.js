import { createSlice } from "@reduxjs/toolkit";

const gptSlice = createSlice({
  name: "gpt",
  initialState: {
    showGptSearchView: false,
    gptMovieResults: null,
    gptMovieNames: null,
  },
  reducers: {
    toggleGptSearchView: (state) => {
      state.showGptSearchView = !state.showGptSearchView;
    },
    addGptMovieResults: (state, action) => {
      const { movieNames, movieDetails } = action.payload;
      state.gptMovieNames = movieNames;
      state.gptMovieResults = movieDetails;
    },
  },
});

export const { toggleGptSearchView, addGptMovieResults } = gptSlice.actions;
export default gptSlice.reducer;
