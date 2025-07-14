import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import {
  fetchAssignmentsByCourseAndSem,
  submitAssignmentOnline,
} from "../auth/authAPI";

// Fetch all assignments
export const fetchAssignments = createAsyncThunk(
  "assignments/fetchAssignments",
  async ({ courseId, sem, page, size }) => {
    const data = await fetchAssignmentsByCourseAndSem(
      courseId,
      sem,
      page,
      size
    );
    return data.content;
  }
);

// Submit assignment and update backend
export const submitAssignment = createAsyncThunk(
  "assignments/submitAssignment",
  async ({ assignmentId, studentId, answer }) => {
    const response = await submitAssignmentOnline(
      assignmentId,
      studentId,
      answer
    );
    return { assignmentId, submittedAt: response.submittedAt };
  }
);

const assignmentsSlice = createSlice({
  name: "assignments",
  initialState: {
    list: [],
    loading: false,
    error: null,
  },
  reducers: {
    markAssignmentSubmitted(state, action) {
      const { assignmentId } = action.payload;
      const assignment = state.list.find((a) => a.id === assignmentId);
      if (assignment) {
        assignment.status = "submitted";
        assignment.attempted = true;
      }
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(fetchAssignments.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(fetchAssignments.fulfilled, (state, action) => {
        state.loading = false;
        state.list = action.payload;
      })
      .addCase(fetchAssignments.rejected, (state, action) => {
        state.loading = false;
        state.error = action.error.message;
      })
      .addCase(submitAssignment.fulfilled, (state, action) => {
        const { assignmentId } = action.payload;
        const assignment = state.list.find((a) => a.id === assignmentId);
        if (assignment) {
          assignment.status = "submitted";
          assignment.attempted = true;
        }
      });
  },
});

export const { markAssignmentSubmitted } = assignmentsSlice.actions;
export default assignmentsSlice.reducer;
