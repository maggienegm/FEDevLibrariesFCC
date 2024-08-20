import { createSlice } from "@reduxjs/toolkit";
import { generateRandomColor } from "../utils";

const randomColor = generateRandomColor();

const initialState = {
  value: randomColor,
};

export const colorSlice = createSlice({
  name: "color",
  initialState,
  reducers: {
    getColor(state) {
      state.value = generateRandomColor();
    },
  },
});

export const { getColor } = colorSlice.actions;

export default colorSlice.reducer;
