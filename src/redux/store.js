import { configureStore } from "@reduxjs/toolkit";
import  profileReducer  from "../redux/features/profileSlice";

export const store = configureStore({
  reducer: {
    profile: profileReducer
  },
});
