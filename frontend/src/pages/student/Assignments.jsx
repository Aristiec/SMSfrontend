import React, { useEffect, useState } from "react";
import {
  Clock,
  Ban,
  AlertCircle,
  CheckCircle,
  Eye,
  FileUp,
} from "lucide-react";
import { useNavigate } from "react-router-dom";
import { fetchAssignmentsByCourseAndSem } from "../../features/auth/authAPI";
import { useSelector } from "react-redux";
import Dropdown from "../../components/utils/Dropdown";

const upcomingAssignments = [
  {
    title: "Modern Economics",
    subject: "Economics 101",
    dueDate: "2/15/2024",
    dueTime: "11:59 PM",
  },
  {
    title: "Modern Economics",
    subject: "Economics 101",
    dueDate: "2/15/2024",
    dueTime: "11:59 PM",
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
  const { user } = useSelector((state) => state.auth);
  const courseId = user?.courseId;
  const sem = user?.sem || 1;
   const [selectedSubject, setSelectedSubject] = useState("All Subjects");

  //  dropdown for subject 
  const subjectOptions = [
    "Engineering Mathematics",
    "Engineering Physics",
    "Engineering Chemistry",
    "Intro to Programming",
    "Math",
  ]

  console.log("CourseID:", courseId, "Sem:", sem);
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

  useEffect(() => {
    const getAssignments = async () => {
      if (!courseId || !sem) return;
      try {
        const data = await fetchAssignmentsByCourseAndSem(
          courseId,
          sem,
          page,
          size
        );
        const updated = data.content.map((assignment) => ({
          ...assignment,
          subject: assignment.subjectName,
          status: getAssignmentStatus(assignment),
        }));
        setAssignments(updated);
        setTotalPages(data.totalPages || 1);
      } catch (err) {
        console.error(err);
        setError("Failed to load assignments");
      } finally {
        setLoading(false);
      }
    };
    getAssignments();
  }, [courseId, sem, page, size]);
  const handleMarkAsCompleted = async (assignment) => {
    try {
      // Call your API
      await fetch(
        "https://ebaf0b43591f.ngrok-free.app/api/v1/submission/submit-offline",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
            // If needed, add token here
          },
          body: JSON.stringify({
            assignmentId: assignment.id,
            studentId: user?.id, // adjust if different
          }),
        }
      );

      // Update status locally
      setAssignments((prev) =>
        prev.map((a) =>
          a.id === assignment.id ? { ...a, completed: true } : a
        )
      );
    } catch (err) {
      console.error("Error marking as completed:", err);
    }
  };

  const filteredAssignments = assignments.filter((assignment) => {
    if (activeFilter === "All") return true;
    return assignment.status === activeFilter.toLowerCase();
  });

  const getStatusIcon = (status) => {
    switch (status) {
      case "overdue":
        return <Ban className="w-4 h-4 text-[#EF4444]" />;
      case "pending":
        return <AlertCircle className="w-4 h-4 text-[#F97316]" />;
      case "submitted":
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

  const filters = ["All", "Overdue", "Pending", "Submitted"];
  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-[#E9EEF4]">
        <p className="text-[#04203E] text-lg font-semibold animate-pulse">
          Loading assignments...
        </p>
      </div>
    );
  }

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      {/* Header */}
      <div className="flex flex-col px-4 gap-1 mt-4">
        <header className=" sticky top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full max-w-7xl h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather]">
            Assignments
          </h1>
        </header>

        {/* Filters */}
        <div className="w-full max-w-7xl mx-auto mt-3 mb-3 ">
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
                {filter}
              </button>
            ))}
          </div>
          {/* dropdowm  */}
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

        {/* Main Content */}
        <div className="grid lg:grid-cols-[1fr_357px] gap-1 max-w-7xl mx-auto w-full">
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
                          <span
                            className="ml-2 px-2 py-0.5 rounded text-xs font-medium 
    bg-[#E5E7EB] text-[#374151]"
                          >
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
                      <div
                        className={`flex items-center gap-2 px-3 py-1 rounded-full`}
                      >
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
                          <p className="font-[Inter] font-[400] text-[16px] leading-[0] text-center text-[#EF4444]">
                            Late submissions are not allowed
                          </p>
                        </div>
                      </div>
                    )}

                    <div className="flex gap-3">
                      {assignment.submissionMode === "OFFLINE" ? (
                        <>
                          {assignment.status === "pending" && (
                            <button className="bg-[#04203E] text-[#FAFCFD] px-4 py-2 rounded-lg font-medium  flex items-center gap-2">
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
                              className="bg-[#04203E] text-[#FAFCFD] px-4 py-2 rounded-lg font-medium  flex items-center gap-2"
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
                <div className="bg-[#FAFCFD] rounded-lg shadow-sm border border-[#FAFCFD] flex justify-center items-center w-[880px] h-full min-h-[600px]">
                  <p className="text-[#04203E] text-lg font-semibold animate-pulse">
                    {loading
                      ? "Loading assignments..."
                      : "No assignments found."}
                  </p>
                </div>
              )}
            </div>
            {filteredAssignments.length > 0 && (
              <div className="flex justify-center mt-2">
                <div className="flex items-center gap-2 px-4 py-2">
                  {/* Previous Button */}
                  <button
                    onClick={() => setPage((prev) => Math.max(prev - 1, 0))}
                    disabled={page === 0}
                    className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
                      page === 0
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-[#04203E] text-white hover:bg-[#02172c]"
                    }`}
                  >
                    Previous
                  </button>

                  {/* Page Numbers */}
                  {Array.from({ length: totalPages }, (_, index) => (
                    <button
                      key={index}
                      onClick={() => setPage(index)}
                      className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
                        page === index
                          ? "bg-[#04203E] text-white"
                          : "text-[#04203E] hover:bg-[#E9EEF4]"
                      }`}
                    >
                      {index + 1}
                    </button>
                  ))}

                  {/* Next Button */}
                  <button
                    onClick={() =>
                      setPage((prev) => Math.min(prev + 1, totalPages - 1))
                    }
                    disabled={page === totalPages - 1}
                    className={`px-3 py-1.5 rounded-md font-medium text-sm transition-all ${
                      page === totalPages - 1
                        ? "bg-gray-200 text-gray-500 cursor-not-allowed"
                        : "bg-[#04203E] text-white hover:bg-[#02172c]"
                    }`}
                  >
                    Next
                  </button>
                  <div className="flex items-center gap-2">
                    <label
                      htmlFor="pageSize"
                      className="text-sm text-[#04203E]"
                    >
                      Page size:
                    </label>
                    <select
                      id="pageSize"
                      value={size}
                      onChange={(e) => {
                        setSize(parseInt(e.target.value, 10));
                        setPage(0); // reset to first page when page size changes
                      }}
                      className="border border-[#04203E] rounded px-2 py-1 text-sm"
                    >
                      <option value={2}>2</option>
                      <option value={4}>4</option>
                      <option value={6}>6</option>
                      <option value={10}>10</option>
                    </select>
                  </div>
                </div>
              </div>
            )}
          </div>

          {/* Right Section: Sidebar */}
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
