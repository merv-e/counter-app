import { configureStore } from "@reduxjs/toolkit";
import authSliceReducer from "../features/authenticationSlice/authSlice";
import counterSliceReducer from "../features/counterSlice/counterSlice";

const store = configureStore({
  reducer: {
    counter: counterSliceReducer,
    auth: authSliceReducer,
  },
});

export default store