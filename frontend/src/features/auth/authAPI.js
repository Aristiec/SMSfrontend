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

export const fetchBookById = async (id, token) => {
  console.log("API Call: GET /library/books/", id);
  return await api.get(`/library/book/${id}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const getAllBooks = async () => {
  const response = await api.get(`/library/books/all`);
  return response.data;
};

export const fetchBorrowActivity = async (studentId) => {
  const response = await api.get(
    `/library/borrow/student/${studentId}/activity`
  );
  return response.data;
};

export const addBookToWishlist = async (studentId, bookId, token) => {
  return await api.post(
    `/library/wishlist/${studentId}/book/${bookId}`,
    {},
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
};

export const fetchWishlist = async (studentId, token) => {
  return await api.get(`/library/wishlist/${studentId}`, {
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const removeBookFromWishlist = async (studentId, bookId, token) => {
  return await api.delete(`/library/wishlist/${studentId}/book/${bookId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchRoomDetailById = async (studentId, token) => {
  const response = await api.get(
    `/room-allocations/room-details/student/${studentId}`,
    {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    }
  );
  return response.data;
};

export const fetchHostelDetailById = async (studentId, token) => {
  const response = await api.get(`/hostel/student/${studentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const submitMaintenanceRequest = async (studentId, data, token) => {
  return await api.post(`/maintenance-request/submit/${studentId}`, data, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchPreviousMaintenanceRequests = async (studentId, token) => {
  return await api.get(`/maintenance-request/student/prev-requests`, {
    params: { studentId },
    headers: { Authorization: `Bearer ${token}` },
  });
};

export const fetchStudentAmenities = async (studentId, token) => {
  return await api.get(`/room-allocations/students/${studentId}/amenities`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
};

export const fetchHostelStaffByStudentId = async (studentId, token) => {
  const response = await api.get(`/hostel-staff/important/${studentId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchEmergencyContacts = async (token) => {
  const response = await api.get(`/contacts/emergency`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
  return response.data;
};

export const fetchAnnouncementsByStudentId = async (studentId) => {
  const response = await api.get(`/announcements/student/${studentId}`);
  return response.data;
};

export const fetchAttendanceStats = (studentId) =>
  api.get(`/attendance/overall?studentId=${studentId}`);

export const fetchSubjectwiseAttendance = (studentId) =>
  api.get(`/attendance/subjectwise?studentId=${studentId}`);

export const getSupportTicketsByStudentId = (studentId) =>
  api.get(`/student-support/student/${studentId}`);

export const fetchTransportAssignment = (studentCode, token) =>
  api.get(`/transport/assignments/student/${studentCode}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });

export const fetchDriverByVehicle = (vehicleId, token) =>
  api.get(`/transport/drivers/vehicle/${vehicleId}`, {
    headers: {
      Authorization: `Bearer ${token}`,
    },
  });
