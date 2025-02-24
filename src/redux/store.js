import { configureStore } from "@reduxjs/toolkit";
import todoReducer from "./Slice";

export const store = configureStore({
  reducer: {
    todos: todoReducer,
  },
});
