import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI, fetchProfileByEmail } from "./authAPI";

// Thunk to login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginUserAPI(credentials);
      const token = response.data;

      // Decode email from token
      const [, payloadBase64] = token.split(".");
      const decodedPayload = JSON.parse(atob(payloadBase64));
      const email = decodedPayload.sub;

      // Get student profile by email
      const profileResponse = await fetchProfileByEmail(email, token);
      const { id, course } = profileResponse.data;
      const courseId = course?.id;
      const sem = profileResponse.data.sem || 1;
      // Save everything in localStorage
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("studentId", id);
      localStorage.setItem("courseId", courseId);
      localStorage.setItem("sem", sem);
      return {
        token,
        email,
        studentId: id,
        courseId,
        sem,
      };
    } catch (err) {
      return rejectWithValue(err.response?.data?.message || "Login failed");
    }
  }
);

const authSlice = createSlice({
  name: "auth",
  initialState: {
    user: null,
    loading: false,
    error: null,
  },
  reducers: {
    logout(state) {
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("studentId");
      localStorage.removeItem("courseId");
      localStorage.removeItem("sem");
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(loginUser.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(loginUser.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(loginUser.fulfilled, (state, action) => {
        state.loading = false;
        state.user = action.payload; // { token, email, studentId, courseId, sem }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
