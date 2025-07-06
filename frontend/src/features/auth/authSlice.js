import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { loginUserAPI } from "./authAPI";

export const loginUser = createAsyncThunk(
  "auth/login",
  async (credentials, { rejectWithValue }) => {
    try {
      const response = await loginUserAPI(credentials);
      return response.data;
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
      localStorage.removeItem("user");
      localStorage.removeItem("token");
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
        state.user = { token: action.payload };

        localStorage.setItem("token", action.payload);

        try {
          const [, payloadBase64] = action.payload.split(".");
          const decodedPayload = JSON.parse(atob(payloadBase64));
          const email = decodedPayload.sub;
          localStorage.setItem("email", email);
        } catch (e) {
          console.warn("⚠️ Failed to decode JWT:", e);
        }
      });
  },
});

export const { logout } = authSlice.actions;
export default authSlice.reducer;
