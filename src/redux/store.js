import { configureStore } from "@reduxjs/toolkit";
import userReducer from "./slice/userSlice";
import moviesReducer from "./slice/moviesSlice";
import gptReducer from "./slice/gptSlice";
import configReducer from "./slice/configSlice";

const store = configureStore({
  reducer: {
    user: userReducer,
    movies: moviesReducer,
    gpt: gptReducer,
    config: configReducer,
  },
});

export default store;
