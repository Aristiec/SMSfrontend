import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { fetchExamNotificationsAPI } from "./auth/authAPI";

export const fetchExamNotifications = createAsyncThunk(
  "exam/fetchExamNotifications",
  async ({ courseId, semester, token }, { rejectWithValue }) => {
    try {
      const response = await fetchExamNotificationsAPI(
        courseId,
        semester,
        token
      );
      const updates = response.data.map((item) => ({
        title: item.title,
        message: item.description,
        time: new Date(item.createdAt).toLocaleString(),
        type: item.title.toLowerCase().includes("live") ? "live" : "normal",
      }));
      return updates;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch exam notifications"
      );
    }
  }
);

const examSlice = createSlice({
  name: "exam",
  initialState: {
    updates: [],
    loading: false,
    error: null,
  },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchExamNotifications.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchExamNotifications.fulfilled, (state, action) => {
        state.loading = false;
        state.updates = action.payload;
      })
      .addCase(fetchExamNotifications.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default examSlice.reducer;
