import { configureStore } from "@reduxjs/toolkit";
import colorReducer from "./colorSlice";
import quoteReducer from "./quoteSlice";

const store = configureStore({
  reducer: {
    color: colorReducer,
    quote: quoteReducer,
  },
});

export default store;
