import { createSlice } from "@reduxjs/toolkit";

const searchSlices = createSlice({
  name: "search",
  initialState: {},
  reducers: {
    cacheResults: (state, action) => {
      return { ...action.payload, ...state };
    },
  },
});

export const { cacheResults } = searchSlices.actions;

export default searchSlices.reducer;
