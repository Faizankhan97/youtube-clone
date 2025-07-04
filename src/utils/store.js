import { configureStore } from "@reduxjs/toolkit";
import appSlice from "./appSlices";
import searchSlices from "./searchSlices";
import chatSlices from "./chatSlice";

const store = configureStore({
  reducer: {
    app: appSlice,
    search: searchSlices,
    chat: chatSlices
  },
});

export default store;
