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
