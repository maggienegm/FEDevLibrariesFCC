import { createSlice } from "@reduxjs/toolkit";
import quotes from "../data/quotes";

const randomIndex = Math.floor(Math.random() * quotes.length);
const randomQuote = quotes[randomIndex];

const initialState = {
  value: randomQuote,
};

const generateNewQuote = () => {
  const randomIndex = Math.floor(Math.random() * quotes.length);
  return quotes[randomIndex];
};

export const quoteSlice = createSlice({
  name: "quote",
  initialState,
  reducers: {
    getQuote(state) {
      const randomQuote = generateNewQuote();
      state.value = randomQuote;
    },
  },
});

export const { getQuote } = quoteSlice.actions;

export default quoteSlice.reducer;
