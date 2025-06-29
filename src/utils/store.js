import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlices";
import searchSlices from "./searchSlices";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlices,
  },
});

export default store;
