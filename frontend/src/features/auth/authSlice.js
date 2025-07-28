import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI, fetchProfileByEmail } from "./authAPI";

// Thunk to login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginUserAPI(credentials);
      const token = response.data.token || response.data;
      const userName = credentials.userName;
      // Store only userName and token
      const user = { userName, token };
      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("userName", userName);
      return user;
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
    setUser: (state, action) => {
      state.user = action.payload;
    },
    logout(state) {
      state.user = null;
      localStorage.removeItem("token");
      localStorage.removeItem("email");
      localStorage.removeItem("studentId");
      localStorage.removeItem("courseId");
      localStorage.removeItem("sem");
      localStorage.removeItem("studentCode");
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

export const { logout, setUser } = authSlice.actions;
export default authSlice.reducer;
