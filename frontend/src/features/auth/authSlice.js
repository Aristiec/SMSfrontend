import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI, fetchProfileByEmail } from "./authAPI";

// Thunk to login
export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginUserAPI(credentials);
      const token = response.data;

      // ✅ Use email directly from the login form
      const email = credentials.userName;

      // Get student profile by email
      const profileResponse = await fetchProfileByEmail(email, token);
      const { id, course, studentCode } = profileResponse.data;
      const courseId = course?.id;
      const sem = profileResponse.data.sem || 1;

      const user = {
        token,
        email,
        studentId: id,
        courseId,
        sem,
        studentCode,
      };

      localStorage.setItem("user", JSON.stringify(user));
      localStorage.setItem("token", token);
      localStorage.setItem("email", email);
      localStorage.setItem("studentId", id);
      localStorage.setItem("courseId", courseId);
      localStorage.setItem("sem", sem);
      localStorage.setItem("studentCode", studentCode);

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
