import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  addBookToWishlist,
  fetchBookById,
  fetchBorrowActivity,
  fetchWishlist,
  removeBookFromWishlist,
} from "./auth/authAPI";

export const getBorrowActivity = createAsyncThunk(
  "library/fetchBorrowActivity",
  async (studentId, { rejectWithValue }) => {
    try {
      const data = await fetchBorrowActivity(studentId);
      return data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch activity"
      );
    }
  }
);

export const getBookById = createAsyncThunk(
  "library/fetchBookById",
  async ({ id, token }, { rejectWithValue }) => {
    try {
      const response = await fetchBookById(id, token);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch book"
      );
    }
  }
);
export const addToWishlist = createAsyncThunk(
  "library/addToWishlist",
  async ({ studentId, bookId, token }, { rejectWithValue }) => {
    try {
      const response = await addBookToWishlist(studentId, bookId, token);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to add to wishlist"
      );
    }
  }
);
export const getWishlist = createAsyncThunk(
  "library/fetchWishlist",
  async ({ studentId, token }, { rejectWithValue }) => {
    try {
      const response = await fetchWishlist(studentId, token);
      return response.data;
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to fetch wishlist"
      );
    }
  }
);

export const removeFromWishlist = createAsyncThunk(
  "library/removeFromWishlist",
  async ({ studentId, bookId, token }, { rejectWithValue }) => {
    try {
      const response = await removeBookFromWishlist(studentId, bookId, token);
      return { bookId }; // return ID so you can filter it in reducer
    } catch (err) {
      return rejectWithValue(
        err.response?.data?.message || "Failed to remove from wishlist"
      );
    }
  }
);

const librarySlice = createSlice({
  name: "library",
  initialState: {
    bookDetails: null,
    activity: [],
    wishlist: [],
    loading: false,
    error: null,
  },

  reducers: {
    clearBookDetails: (state) => {
      state.bookDetails = null;
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(getBorrowActivity.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBorrowActivity.fulfilled, (state, action) => {
        state.loading = false;
        state.activity = action.payload;
      })
      .addCase(getBorrowActivity.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getBookById.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getBookById.fulfilled, (state, action) => {
        state.loading = false;
        state.bookDetails = action.payload;
      })
      .addCase(getBookById.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(addToWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(addToWishlist.fulfilled, (state) => {
        state.loading = false;
        // Optionally update wishlist state here if you store it
      })
      .addCase(addToWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(getWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(getWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = action.payload;
      })
      .addCase(getWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      })
      .addCase(removeFromWishlist.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(removeFromWishlist.fulfilled, (state, action) => {
        state.loading = false;
        state.wishlist = state.wishlist.filter(
          (b) => b.bookId !== action.payload.bookId
        );
      })
      .addCase(removeFromWishlist.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export const { clearBookDetails } = librarySlice.actions;
export default librarySlice.reducer;
