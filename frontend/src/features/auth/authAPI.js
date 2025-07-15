import api from "../../Services/api.js";

export const loginUserAPI = (credentials) =>
  api.post("/auth/login", credentials);
export const fetchProfileByEmail = (email, token) =>
  api.get(`/student/email/${email}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const fetchSubjectsByCourseId = (courseId) =>
  api.get(`/subjects/course/${courseId}/subjects`);

export const fetchAssignments = async (page = 0, size = 10) => {
  const response = await api.get(
    `/assignments/all/paginated?page=${page}&size=${size}&sortBy=id&sortDir=asc`
  );
  return response.data;
};
export const fetchAssignmentById = async (id) => {
  const response = await api.get(`/assignments/${id}`);
  return response.data;
};

export const fetchDailyTimetableByDay = async (day) => {
  const response = await api.get(`/timetable/by-day`, {
    params: { day: day.toUpperCase() },
  });
  return response.data;
};

export const fetchAssignmentsByCourseAndSem = async (
  courseId,
  sem,
  page = 0,
  size = 6
) => {
  const response = await api.get(`/assignments/by-course-sem`, {
    params: {
      courseId,
      sem,
      page: page,
      size,
    },
  });
  return response.data;
};

export const submitAssignmentOnline = async (
  assignmentId,
  studentId,
  answer
) => {
  if (!studentId) throw new Error("Student ID is missing");
  return await api.post(
    `/submission/submit-online`,
    {
      file: "string",
    },
    {
      params: {
        assignmentId,
        studentId,
        answer,
      },
    }
  );
};

export const fetchExams = async () => {
  const response = await api.get(`/exams/get`);
  return response.data;
};

export const fetchLibrarySummary = async (studentId) => {
  const response = await api.get(
    `/library/borrow/student/${studentId}/library-summary`
  );
  return response.data;
};

export const fetchIssuedBooks = async (studentId) => {
  const response = await api.get(`/library/borrow/student/${studentId}/issued`);
  return response.data;
};

export const searchBooks = async (keyword) => {
  const response = await api.get(`/library/books/search`, {
    params: { keyword },
  });
  return response.data;
};
export const fetchBookById = (id, token) =>
  api.get(`/library/book/${id}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
export const getAllBooks = async () => {
  const response = await api.get(`/library/books/all`);
  return response.data;
};
