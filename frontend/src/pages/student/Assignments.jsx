import React, { useEffect, useState } from "react";
import {
  Clock,
  Ban,
  AlertCircle,
  CheckCircle,
  Eye,
  FileUp,
  AlignCenter,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
// import { fetchAssignmentsByCourseAndSem } from "../../features/auth/authAPI"; // 🔒 API disabled
import Dropdown from "../../components/utils/Dropdown";
import AssingmentLoading from "./LoadingSkeleton/AssignmentLoading";

// 🔹 Upcoming Assignments (right-side panel)
const upcomingAssignments = [
  {
    title: "Modern Economics",
    subject: "Economics 101",
    dueDate: "2/15/2024",
    dueTime: "11:59 PM",
  },
  {
    title: "Operating System",
    subject: "TCP/IP Protocol",
    dueDate: "2/20/2024",
    dueTime: "11:59 PM",
  },
  {
    title: "Physics",
    subject: "H.C Verma",
    dueDate: "2/15/2024",
    dueTime: "11:59 PM",
  },
  {
    title: "Mathematics",
    subject: "Linear Algebra",
    dueDate: "3/20/2024",
    dueTime: "11:59 PM",
  },
];

// 🔹 Mock Assignments (main list)
const mockAssignments = [
  {
    id: 1,
    title: "Algebra Homework",
    subjectName: "Math",
    description: "Solve chapter 4 problems 1-10",
    dueDate: "2024-09-30",
    submissionMode: "ONLINE",
    attempted: false,
    maxMarks: 20,
  },
  {
    id: 2,
    title: "Chemistry Lab Report",
    subjectName: "Chemistry",
    description: "Submit lab report on acids & bases",
    dueDate: "2024-08-25",
    submissionMode: "OFFLINE",
    completed: false,
    maxMarks: 15,
  },
  {
    id: 3,
    title: "History Essay",
    subjectName: "History",
    description: "Write an essay on World War II causes",
    dueDate: "2024-10-05",
    submissionMode: "ONLINE",
    attempted: true,
    maxMarks: 30,
  },
];

const Assignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [activeFilter, setActiveFilter] = useState("All");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const navigate = useNavigate();
  const [page, setPage] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [size, setSize] = useState(10);
  const courseId = 1;
  const sem = 1;
  const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  const subjectOptions = [
    "Engineering Mathematics",
    "Engineering Physics",
    "Engineering Chemistry",
    "Intro to Programming",
    "Math",
  ];

  // 🔹 Assignment status logic
  const getAssignmentStatus = (assignment) => {
    const today = new Date();
    const dueDate = new Date(assignment.dueDate);

    if (assignment.submissionMode === "OFFLINE") {
      if (assignment.completed) return "completed";
      if (dueDate < today) return "overdue";
      return "pending";
    }

    if (assignment.submissionMode === "ONLINE") {
      if (assignment.attempted) return "submitted";
      if (dueDate < today) return "overdue";
      return "pending";
    }

    return "pending";
  };

  // 🔹 Using mock data instead of API
  useEffect(() => {
    const getAssignments = async () => {
      try {
        // const data = await fetchAssignmentsByCourseAndSem(courseId, sem, page, size); // 🔒 API disabled
        const data = mockAssignments; // ✅ Use mock data
        const updated = data.map((assignment) => ({
          ...assignment,
          subject: assignment.subjectName,
          status: getAssignmentStatus(assignment),
        }));
        setAssignments(updated);
        setTotalPages(1); // since mock data doesn’t have pages
      } catch (err) {
        console.error(err);
        setError("Failed to load assignments");
      } finally {
        setLoading(false);
      }
    };
    getAssignments();
  }, [courseId, sem, page, size]);

  const handleMarkAsCompleted = (assignment) => {
    setAssignments((prev) =>
      prev.map((a) =>
        a.id === assignment.id ? { ...a, completed: true, status: "completed" } : a
      )
    );
  };

  const filteredAssignments = assignments.filter((assignment) => {
    const matchesStatus =
      activeFilter === "All" ||
      assignment.status === activeFilter.toLowerCase();

    const matchesSubject =
      selectedSubject === "All Subjects" ||
      assignment.subject === selectedSubject;

    return matchesStatus && matchesSubject;
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "overdue":
        return <Ban className="w-4 h-4 text-[#EF4444]" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 text-[#F97316]" />;
      case "submitted":
      case "completed":
        return <CheckCircle className="w-4 h-4 text-[#10B981]" />;
      default:
        return null;
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case "overdue":
        return "text-[#EF4444]";
      case "pending":
        return "text-[#F97316]";
      case "submitted":
      case "completed":
        return "text-[#10B981]";
      default:
        return "text-[#1F1D1D]";
    }
  };

  const handleOpenAssignment = (assignment) => {
    navigate(`/student/assignments/${assignment.id}`, {
      state: { assignment },
    });
  };

  const filters = ["All", "Overdue", "Pending", "Submitted", "Completed"];

  if (loading) {
    return <AssingmentLoading />;
  }

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-1 mt-4">
        {/* 🔹 Header */}
        <header className="sticky top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather]">
            Assignments
          </h1>
        </header>

        {/* 🔹 Filters & Subject Dropdown */}
        <div className="w-full mx-auto mt-3 mb-3 ">
          <div className="flex flex-wrap items-center justify-between gap-2 text-[#04203E] text-sm bg-[#FAFCFD] p-3 rounded-[12px]">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  onClick={() => setActiveFilter(filter)}
                  className={`px-4 py-2 rounded-lg font-normal transition-colors flex items-center gap-2 ${
                    activeFilter === filter
                      ? "bg-[#04203E] text-[#FAFCFD]"
                      : "bg-[#FAFCFD] text-[#1F1D1D] border border-[#1F1D1D] hover:bg-[#FAFCFD]"
                  }`}
                >
                  {filter === "Pending" && <Clock size={16} />}
                  {filter === "Overdue" && <Ban size={16} />}
                  {filter === "Submitted" && <CheckCircle size={16} />}
                  {filter === "Completed" && <CheckCircle size={16} />}
                  {filter}
                </button>
              ))}
            </div>
            <div className="w-[150px] mr-2 ">
              <Dropdown
                options={subjectOptions}
                placeholder="Subject"
                selected={selectedSubject}
                onSelect={setSelectedSubject}
              />
            </div>
          </div>
        </div>

        {/* 🔹 Main Layout */}
        <div className="grid lg:grid-cols-[1fr_357px] gap-1 mx-auto w-full">
          {/* 🔹 Left: Assignments List */}
          <div className="flex flex-col w-full">
            <div className="flex-1 overflow-y-auto max-h-[600px] space-y-4 font-[Inter] scrollbar-hide w-full">
              {filteredAssignments.length > 0 ? (
                filteredAssignments.map((assignment) => (
                  <div
                    key={assignment.id}
                    className="w-full bg-[#FAFCFD] rounded-lg shadow-sm border border-[#FAFCFD] p-6"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex-1">
                        <h3>
                          {assignment.title}{" "}
                          <span className="ml-2 px-2 py-0.5 rounded text-xs font-medium bg-[#E5E7EB] text-[#374151]">
                            {assignment.submissionMode}
                          </span>
                        </h3>
                        <p className="text-[#1F1D1D] text-[16px] font-normal mb-2">
                          {assignment.subject}
                        </p>
                        <p className="text-[#1F1D1D] text-[12px] mb-4">
                          {assignment.description}
                        </p>
                      </div>
                      <div className="flex items-center gap-2 px-3 py-1 rounded-full">
                        {getStatusIcon(assignment.status)}
                        <span
                          className={`font-medium capitalize ${getStatusColor(
                            assignment.status
                          )}`}
                        >
                          {assignment.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex items-center gap-6 text-sm text-[#1F1D1D] mb-4">
                      <div className="flex items-center gap-1">
                        <Clock
                          className={`w-4 h-4 ${
                            assignment.status === "overdue"
                              ? "text-[#EF4444]"
                              : ""
                          }`}
                        />
                        <span
                          className={
                            assignment.status === "overdue"
                              ? "text-[#EF4444]"
                              : ""
                          }
                        >
                          Due: {assignment.dueDate}
                        </span>
                      </div>
                      {assignment.maxMarks && (
                        <div>
                          <span>Max Marks: {assignment.maxMarks}</span>
                        </div>
                      )}
                    </div>

                    {assignment.status === "overdue" && (
                      <div className="my-[8px]">
                        <div className="flex rounded-[8px] gap-[8px] p-[8px] items-center bg-[#FEF2F2]">
                          <Ban size={16} className="text-[#EF4444]" />
                          <p className="font-[Inter] font-[400] text-[16px] text-[#EF4444]">
                            Late submissions are not allowed
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      {assignment.submissionMode === "OFFLINE" ? (
                        <>
                          {assignment.status === "pending" && (
                            <button
                              onClick={() =>
                                handleMarkAsCompleted(assignment)
                              }
                              className="bg-[#04203E] text-[#FAFCFD] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                            >
                              Mark as Completed
                            </button>
                          )}
                          {assignment.status === "completed" && (
                            <button
                              onClick={() => handleOpenAssignment(assignment)}
                              className="border border-[#1F1D1D] text-[#1F1D1D] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              View Details
                            </button>
                          )}
                        </>
                      ) : (
                        <>
                          {assignment.status === "pending" && (
                            <button
                              onClick={() => handleOpenAssignment(assignment)}
                              className="bg-[#04203E] text-[#FAFCFD] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                            >
                              <FileUp className="w-4 h-4" />
                              Submit Assignment
                            </button>
                          )}
                          {(assignment.status === "submitted" ||
                            assignment.status === "overdue") && (
                            <button
                              onClick={() => handleOpenAssignment(assignment)}
                              className="border border-[#1F1D1D] text-[#1F1D1D] px-4 py-2 rounded-lg font-medium flex items-center gap-2"
                            >
                              <Eye className="w-4 h-4" />
                              View Details
                            </button>
                          )}
                        </>
                      )}
                    </div>
                  </div>
                ))
              ) : (
                <div className="bg-[#FAFCFD] rounded-lg shadow-sm border border-[#FAFCFD] flex justify-center items-center w-full w-[880px] h-full min-h-[600px]">
                  <div className="flex flex-col items-center justify-center gap-3">
                    <div className="w-[72px] h-[72px] rounded-full bg-[#F5FAFF] flex flex-col items-center justify-center shadow-lg gap-3 p-4">
                      <AlignCenter size={40} color="#2196F3" />
                    </div>
                    <span className="font-inter font-[600] text-[16px] leading-[24px] text-center">
                      No Assignments Found !
                    </span>
                    <button
                      className="w-[150px] h-[40px] rounded-[8px] px-[12px] py-[8px] bg-[#04203E] flex items-center justify-center font-inter font-semibold text-[14px] leading-[24px] text-white text-center"
                      type="button"
                    >
                      Contact Admin
                    </button>
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* 🔹 Right: Upcoming Assignments */}
          <div className="w-full lg:w-[357px] flex-shrink-0 h-full mt-6 lg:mt-0">
            <div className="bg-[#FAFCFD] rounded-lg shadow-sm border border-[#FAFCFD] p-3 h-full min-h-[600px] flex flex-col justify-between">
              <div>
                <div className="flex items-center gap-2 mb-4">
                  <Clock className="w-5 h-5 text-[#1F1D1D]" />
                  <h2 className="text-[20px] font-semibold text-[#1F1D1D]">
                    Upcoming
                  </h2>
                </div>
                <div className="space-y-3 flex-1 px-1 py-1 w-[325px]">
                  {upcomingAssignments.map((assignment, index) => (
                    <div
                      key={index}
                      className="bg-[#FFF4ED] rounded-md px-4 py-4 w-full shadow-sm"
                    >
                      <div className="flex justify-between items-start">
                        <h3 className="text-sm font-semibold text-[#1F1D1D]">
                          {assignment.title}
                        </h3>
                        <div className="text-right">
                          <p className="text-xs text-[#1F1D1D] font-medium">
                            Due: {assignment.dueDate}
                          </p>
                        </div>
                      </div>
                      <div className="flex justify-between items-center mt-1">
                        <p className="text-xs text-[#1F1D1D]">
                          {assignment.subject}
                        </p>
                        <p className="text-xs text-[#1F1D1D]">
                          {assignment.dueTime}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="flex-grow" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Assignments;
