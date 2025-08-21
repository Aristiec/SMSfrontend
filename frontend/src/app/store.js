import { configureStore } from "@reduxjs/toolkit";
import authReducer from "../features/auth/authSlice";
import assignmentsReducer from "../features/assignments/assignmentsSlice";
import libraryReducer from "../features/librarySlice";
import examReducer from "../features/examSlice";
import chatpdfReducer from "../features/chatpdf/chatpdfSlice";
export const store = configureStore({
  reducer: {
    auth: authReducer,
    assignments: assignmentsReducer,
    library: libraryReducer,
    exam: examReducer,
    chatpdf: chatpdfReducer,
  },
});
