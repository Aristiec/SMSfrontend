import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import assignmentsReducer from "../features/assignments/assignmentsSlice";

export const store = configureStore({
  reducer: {
    auth: authReducer,
    assignments: assignmentsReducer,
  },
});
