import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";
import AddCourse from "../../components/admin/AddCourse";
import EditCourse from "../../components/admin/EditCourse";

const Courses = () => {
  const [selectedDuration, setSelectedDuration] = useState("All Duration");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedSystem, setSelectedSystem] = useState("All System");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingCourse, setEditingCourse] = useState(null);
  const [deletingCourse, setDeletingCourse] = useState(null);
  const itemsPerPage = 8;

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleOpenEditForm = (course) => {
    setEditingCourse(course);
    setIsEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
    setEditingCourse(null);
  };

  const handleOpenDeleteModal = (course) => {
    setDeletingCourse(course);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingCourse(null);
  };

  // Initial courses data
  const [coursesData, setCoursesData] = useState([
    {
      id: 1,
      courseName: "Bachelor of Computer Applications",
      courseCode: "BCA",
      duration: "3 years",
      totalFees: "₹ 150,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 2,
      courseName: "Masters of Computer Applications",
      courseCode: "MCA",
      duration: "2 years",
      totalFees: "₹ 180,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 3,
      courseName: "Masters of Business Administrator",
      courseCode: "MBA",
      duration: "2 years",
      totalFees: "₹ 200,000",
      system: "Semester",
      status: "Inactive",
    },
    {
      id: 4,
      courseName: "Diploma in Digital Marketing",
      courseCode: "DDM",
      duration: "1 years",
      totalFees: "₹ 75,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 5,
      courseName: "Bachelor of Business Administration",
      courseCode: "BBA",
      duration: "3 years",
      totalFees: "₹ 165,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 6,
      courseName: "Bachelor of Commerce",
      courseCode: "B.Com",
      duration: "3 years",
      totalFees: "₹ 120,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 7,
      courseName: "Masters of Commerce",
      courseCode: "M.Com",
      duration: "2 years",
      totalFees: "₹ 140,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 8,
      courseName: "Bachelor of Arts",
      courseCode: "BA",
      duration: "3 years",
      totalFees: "₹ 90,000",
      system: "Annual",
      status: "Inactive",
    },
    {
      id: 9,
      courseName: "Masters of Arts",
      courseCode: "MA",
      duration: "2 years",
      totalFees: "₹ 110,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 10,
      courseName: "Bachelor of Science in Computer Science",
      courseCode: "BSc CS",
      duration: "3 years",
      totalFees: "₹ 155,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 11,
      courseName: "Masters of Science in Computer Science",
      courseCode: "MSc CS",
      duration: "2 years",
      totalFees: "₹ 175,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 12,
      courseName: "Diploma in Web Development",
      courseCode: "DWD",
      duration: "1 years",
      totalFees: "₹ 65,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 13,
      courseName: "Certificate in Data Science",
      courseCode: "CDS",
      duration: "1 years",
      totalFees: "₹ 85,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 14,
      courseName: "Bachelor of Technology",
      courseCode: "B.Tech",
      duration: "4 years",
      totalFees: "₹ 250,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 15,
      courseName: "Masters of Technology",
      courseCode: "M.Tech",
      duration: "2 years",
      totalFees: "₹ 220,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 16,
      courseName: "Diploma in Graphic Design",
      courseCode: "DGD",
      duration: "1 years",
      totalFees: "₹ 55,000",
      system: "Annual",
      status: "Inactive",
    },
    {
      id: 17,
      courseName: "Bachelor of Fine Arts",
      courseCode: "BFA",
      duration: "3 years",
      totalFees: "₹ 135,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 18,
      courseName: "Masters of Fine Arts",
      courseCode: "MFA",
      duration: "2 years",
      totalFees: "₹ 160,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 19,
      courseName: "Diploma in Mobile App Development",
      courseCode: "DMAD",
      duration: "1 years",
      totalFees: "₹ 70,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 20,
      courseName: "Certificate in Machine Learning",
      courseCode: "CML",
      duration: "1 years",
      totalFees: "₹ 95,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 21,
      courseName: "Bachelor of Education",
      courseCode: "B.Ed",
      duration: "2 years",
      totalFees: "₹ 100,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 22,
      courseName: "Masters of Education",
      courseCode: "M.Ed",
      duration: "2 years",
      totalFees: "₹ 125,000",
      system: "Annual",
      status: "Inactive",
    },
    {
      id: 23,
      courseName: "Diploma in Hotel Management",
      courseCode: "DHM",
      duration: "1 years",
      totalFees: "₹ 80,000",
      system: "Annual",
      status: "Active",
    },
    {
      id: 24,
      courseName: "Bachelor of Hotel Management",
      courseCode: "BHM",
      duration: "3 years",
      totalFees: "₹ 180,000",
      system: "Semester",
      status: "Active",
    },
    {
      id: 25,
      courseName: "Certificate in Digital Photography",
      courseCode: "CDP",
      duration: "1 years",
      totalFees: "₹ 45,000",
      system: "Annual",
      status: "Active",
    },
  ]);

  // Function to handle adding new course
  const handleAddCourse = (newCourse) => {
    setCoursesData((prev) => [newCourse, ...prev]); // Add new course at the beginning
    setCurrentPage(1); // Reset to first page to show the new course
  };

  // Function to handle editing course
  const handleEditCourse = (updatedCourse) => {
    setCoursesData((prev) =>
      prev.map((course) =>
        course.id === updatedCourse.id ? updatedCourse : course
      )
    );
  };

  // Function to handle deleting course
  const handleDeleteCourse = () => {
    if (deletingCourse) {
      setCoursesData((prev) =>
        prev.filter((course) => course.id !== deletingCourse.id)
      );
      handleCloseDeleteModal();
    }
  };

  // Dropdown options
  const durationOptions = [
    "All Duration",
    "1 years",
    "2 years",
    "3 years",
    "4 years",
  ];

  const statusOptions = ["All Status", "Active", "Inactive"];

  const systemOptions = ["All System", "Semester", "Annual"];

  // Status badge styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#ECFDF7] text-[#10B981] px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
      case "Inactive":
        return "bg-[#FFF4ED] text-[#F97316] px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
      default:
        return "bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
    }
  };

  // Filter courses based on selected filters and search query
  const filteredCourses = coursesData.filter((course) => {
    const matchesDuration =
      selectedDuration === "All Duration" ||
      course.duration === selectedDuration;
    const matchesStatus =
      selectedStatus === "All Status" || course.status === selectedStatus;
    const matchesSystem =
      selectedSystem === "All System" || course.system === selectedSystem;
    const matchesSearch =
      course.courseName.toLowerCase().includes(searchQuery.toLowerCase()) ||
      course.courseCode.toLowerCase().includes(searchQuery.toLowerCase());

    return matchesDuration && matchesStatus && matchesSystem && matchesSearch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredCourses.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentCourses = filteredCourses.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedDuration, selectedStatus, selectedSystem, searchQuery]);

  // Pagination handlers
  const handlePreviousPage = () => {
    if (currentPage > 1) {
      setCurrentPage(currentPage - 1);
    }
  };

  const handleNextPage = () => {
    if (currentPage < totalPages) {
      setCurrentPage(currentPage + 1);
    }
  };

  // Handle edit button click
  const handleEditClick = (course) => {
    handleOpenEditForm(course);
  };

  // Handle delete button click
  const handleDeleteClick = (course) => {
    handleOpenDeleteModal(course);
  };

  return (
    <section className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col">
        <header className="top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
            Courses
          </h1>
          <button
            onClick={handleOpenForm}
            className="flex items-center gap-2 bg-[#FAFCFD] text-[#04203E] px-4 py-2 rounded-[8px] font-[Inter] font-medium text-[14px] hover:bg-[#E9EEF4] transition-colors"
          >
            <Plus className="w-4 h-4" />
            Add Course
          </button>
        </header>
      </div>

      {/* Content area */}
      <div className="bg-[#FAFCFD] border-[#FAFCFD] border-[12px] p-[24px] gap-[24px] rounded-[12px]">
        {/* Search and Filters Section */}
        <div className="flex flex-row justify-between items-center mb-8">
          {/* Search Box - Left side */}
          <div className="relative">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#717171]" />

            <input
              type="text"
              placeholder="Search courses by name or code..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[320px] h-[48px] border border-[#E5E5E5] rounded-[8px] pl-12 pr-4 py-3 font-[Inter] font-normal text-[14px] leading-[20px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>

          {/* Filters - Right side */}
          <div className="flex flex-row gap-4 items-center">
            {/* Status Dropdown */}
            <div className="w-[150px]">
              <Dropdown
                options={statusOptions}
                selected={selectedStatus}
                onSelect={(option) => setSelectedStatus(option)}
                placeholder="All Status"
                className="rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>

            {/* System Dropdown */}
            <div className="w-[150px]">
              <Dropdown
                options={systemOptions}
                selected={selectedSystem}
                onSelect={(option) => setSelectedSystem(option)}
                placeholder="All System"
                className="rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
          </div>
        </div>

        {/* Courses Table */}
        <div className="bg-[#FAFCFD] rounded-[8px]">
          {/* Table Header */}
          <div className="bg-[#F4F7FA] py-[20px] px-[2px] flex items-center justify-between border-b border-[#71717166] rounded-t-[8px]">
            <div className="flex-3">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Course Name
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Course Code
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Duration
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Total Fees
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                System
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Status
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Actions
              </span>
            </div>
          </div>

          {/* Table Content */}
          <div>
            {currentCourses.length > 0 ? (
              currentCourses.map((course) => (
                <div
                  key={course.id}
                  className="flex items-center justify-between py-[20px] px-[2px] border-b border-[#71717166] gap-3"
                >
                  <div className="flex-3">
                    <span className="font-[Inter] font-medium text-[16px] leading-[20px] text-[#1F1D1D]">
                      {course.courseName}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                      {course.courseCode}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                      {course.duration}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                      {course.totalFees}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                      {course.system}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className={getStatusStyle(course.status)}>
                      {course.status}
                    </span>
                  </div>
                  <div className="flex-1 flex gap-3">
                    <button
                      onClick={() => handleEditClick(course)}
                      className="flex items-center gap-1 font-[Inter] font-medium text-[14px] leading-[16px] text-[#0077FF] hover:underline"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M18.5 2.50001C18.8978 2.10218 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10218 21.5 2.50001C21.8978 2.89784 22.1213 3.43739 22.1213 4.00001C22.1213 4.56262 21.8978 5.10218 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                    <button
                      onClick={() => handleDeleteClick(course)}
                      className="flex items-center gap-1 font-[Inter] font-medium text-[14px] leading-[16px] text-[#EF4444] hover:underline"
                    >
                      <svg
                        width="16"
                        height="16"
                        viewBox="0 0 24 24"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                      >
                        <path
                          d="M3 6H5H21"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                        <path
                          d="M8 6V4C8 3.46957 8.21071 2.96086 8.58579 2.58579C8.96086 2.21071 9.46957 2 10 2H14C14.5304 2 15.0391 2.21071 15.4142 2.58579C15.7893 2.96086 16 3.46957 16 4V6M19 6V20C19 20.5304 18.7893 21.0391 18.4142 21.4142C18.0391 21.7893 17.5304 22 17 22H7C6.46957 22 5.96086 21.7893 5.58579 21.4142C5.21071 21.0391 5 20.5304 5 20V6H19Z"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 px-6 text-center">
                <p className="font-[Inter] text-[16px] text-[#717171]">
                  No courses found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <span className="font-[Inter] text-[14px] text-[#717171]">
            Showing {startIndex + 1} to{" "}
            {Math.min(endIndex, filteredCourses.length)} of{" "}
            {filteredCourses.length} courses
          </span>
          <div className="flex gap-2 items-center">
            <button
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 border border-[#E5E5E5] rounded-[6px] font-[Inter] text-[14px] transition-colors ${
                currentPage === 1
                  ? "text-[#B0B0B0] cursor-not-allowed"
                  : "text-[#717171] hover:bg-[#F4F7FA] cursor-pointer"
              }`}
            >
              Previous
            </button>

            <button
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 border border-[#E5E5E5] rounded-[6px] font-[Inter] text-[14px] transition-colors ${
                currentPage === totalPages
                  ? "text-[#B0B0B0] cursor-not-allowed"
                  : "text-[#717171] hover:bg-[#F4F7FA] cursor-pointer"
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Course Modal Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 flex items-center justify-center min-h-screen  px-4 max-sm:py-2 max-sm:px-2">
            <AddCourse
              isOpen={isFormOpen}
              onClose={handleCloseForm}
              onAddCourse={handleAddCourse}
            />
          </div>
        </div>
      )}

      {/* Edit Course Modal Overlay */}
      {isEditFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2">
            <EditCourse
              isOpen={isEditFormOpen}
              onClose={handleCloseEditForm}
              onEditCourse={handleEditCourse}
              courseData={editingCourse}
            />
          </div>
        </div>
      )}

      {/* Delete Confirmation Modal */}
      {isDeleteModalOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 flex items-center justify-center min-h-screen px-4">
            <div className="relative w-[400px] max-w-[90vw] bg-[#FFFFFF] rounded-[8px] p-[24px] shadow-lg">
              {/* Close Button */}
              <button
                onClick={handleCloseDeleteModal}
                className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 text-[20px] leading-none"
              >
                ×
              </button>

              {/* Warning Icon and Title */}
              <div className="flex items-center gap-3 mb-4">
                <div className="w-8 h-8 flex items-center justify-center">
                  <svg
                    className="w-6 h-6 text-[#DC2626]"
                    fill="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z" />
                  </svg>
                </div>
                <h3 className="font-[Inter] font-semibold text-[18px] text-[#1F1D1D]">
                  Remove Course
                </h3>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="font-[Inter] text-[14px] text-[#717171] mb-3">
                  Are you sure you want to remove '{deletingCourse?.courseName}'
                  course?
                </p>
                <p className="font-[Inter] text-[12px] text-[#DC2626] font-medium">
                  This action cannot be undone.
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleDeleteCourse}
                  className="px-6 py-2 bg-[#DC2626] text-white rounded-[6px] font-[Inter] text-[14px] font-medium hover:bg-[#B91C1C] transition-colors"
                >
                  Remove
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

export default Courses;
