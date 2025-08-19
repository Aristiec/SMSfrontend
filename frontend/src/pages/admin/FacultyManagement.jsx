import React, { useState } from "react";
import { Search, Plus, Edit, Mail, Phone, Clock, GraduationCap, Calendar } from "lucide-react";
import Dropdown from "../../components/admin/utils/Dropdown";
import FacultyPhoto from "../../assets/Facult_photo_admin.png";
import AddFaculty from "../../components/admin/forms/AddFaculty";
import EditFaculty from "../../components/admin/forms/EditFaculty";

const FacultyManagement = () => {
  const [selectedDepartment, setSelectedDepartment] = useState("All Departments");
  const [selectedPosition, setSelectedPosition] = useState("All Positions");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [sortBy, setSortBy] = useState("Sort A-Z");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [editingFaculty, setEditingFaculty] = useState(null);
  const itemsPerPage = 6; // 6 cards per page to match the Figma design

  // Sample faculty data based on the Figma design
  const [facultyData, setFacultyData] = useState([
    {
      id: 1,
      name: "Dr. Emily Rodriguez",
      employeeId: "F00001",
      position: "Assistant Professor",
      department: "Mathematics",
      email: "emily.rodriguez@university.edu",
      phone: "+91 9999999999",
      joinDate: "Since Jan 2018",
      courses: ["Calculus", "Linear Algebra", "Discrete Mathematics"],
      profileCompletion: 100,
      availability: "Mon - Wed - Fri 10:00 AM - 04:00 PM",
      status: "Active"
    },
    {
      id: 2,
      name: "Dr. Michael Chen",
      employeeId: "F00002",
      position: "Associate Professor",
      department: "Computer Science",
      email: "michael.chen@university.edu",
      phone: "+91 9999999998",
      joinDate: "Since Mar 2016",
      courses: ["Data Structures", "Algorithms", "Machine Learning"],
      profileCompletion: 95,
      availability: "Tue - Thu - Sat 09:00 AM - 05:00 PM",
      status: "Active"
    },
    {
      id: 3,
      name: "Dr. Sarah Johnson",
      employeeId: "F00003",
      position: "Professor",
      department: "Physics",
      email: "sarah.johnson@university.edu",
      phone: "+91 9999999997",
      joinDate: "Since Sep 2014",
      courses: ["Quantum Physics", "Thermodynamics", "Optics"],
      profileCompletion: 88,
      availability: "Mon - Wed - Fri 11:00 AM - 03:00 PM",
      status: "Active"
    },
    {
      id: 4,
      name: "Dr. David Wilson",
      employeeId: "F00004",
      position: "Assistant Professor",
      department: "Chemistry",
      email: "david.wilson@university.edu",
      phone: "+91 9999999996",
      joinDate: "Since Jan 2019",
      courses: ["Organic Chemistry", "Inorganic Chemistry"],
      profileCompletion: 92,
      availability: "Tue - Thu 10:00 AM - 04:00 PM",
      status: "Inactive"
    },
    {
      id: 5,
      name: "Dr. Lisa Anderson",
      employeeId: "F00005",
      position: "Associate Professor",
      department: "Biology",
      email: "lisa.anderson@university.edu",
      phone: "+91 9999999995",
      joinDate: "Since Aug 2017",
      courses: ["Genetics", "Molecular Biology", "Biochemistry"],
      profileCompletion: 100,
      availability: "Mon - Wed - Fri 09:00 AM - 05:00 PM",
      status: "Active"
    },
    {
      id: 6,
      name: "Dr. Robert Martinez",
      employeeId: "F00006",
      position: "Assistant Professor",
      department: "English",
      email: "robert.martinez@university.edu",
      phone: "+91 9999999994",
      joinDate: "Since Feb 2020",
      courses: ["Literature", "Creative Writing", "Grammar"],
      profileCompletion: 85,
      availability: "Tue - Thu - Sat 11:00 AM - 03:00 PM",
      status: "Active"
    },
    {
      id: 7,
      name: "Dr. Jennifer Taylor",
      employeeId: "F00007",
      position: "Professor",
      department: "History",
      email: "jennifer.taylor@university.edu",
      phone: "+91 9999999993",
      joinDate: "Since Dec 2013",
      courses: ["World History", "Ancient Civilizations"],
      profileCompletion: 90,
      availability: "Mon - Wed 10:00 AM - 04:00 PM",
      status: "Active"
    },
    {
      id: 8,
      name: "Dr. James Brown",
      employeeId: "F00008",
      position: "Assistant Professor",
      department: "Economics",
      email: "james.brown@university.edu",
      phone: "+91 9999999992",
      joinDate: "Since May 2018",
      courses: ["Microeconomics", "Macroeconomics"],
      profileCompletion: 78,
      availability: "Tue - Thu 09:00 AM - 05:00 PM",
      status: "Inactive"
    }
  ]);

  // Form handlers
  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleOpenEditForm = (faculty) => {
    setEditingFaculty(faculty);
    setIsEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
    setEditingFaculty(null);
  };

  // Function to handle adding new faculty
  const handleAddFaculty = (newFaculty) => {
    setFacultyData(prev => [newFaculty, ...prev]); // Add new faculty at the beginning
    setCurrentPage(1); // Reset to first page to show the new faculty
  };

  // Function to handle editing faculty
  const handleEditFaculty = (updatedFaculty) => {
    setFacultyData(prev => 
      prev.map(faculty => 
        faculty.id === updatedFaculty.id ? updatedFaculty : faculty
      )
    );
  };

  // Dropdown options
  const departmentOptions = [
    "All Departments",
    "Mathematics",
    "Computer Science",
    "Physics",
    "Chemistry",
    "Biology",
    "English",
    "History",
    "Economics"
  ];

  const positionOptions = [
    "All Positions",
    "Assistant Professor",
    "Associate Professor",
    "Professor"
  ];

  const statusOptions = [
    "All Status",
    "Active",
    "Inactive"
  ];

  const sortOptions = [
    "Sort A-Z",
    "Sort Z-A",
    "Newest First",
    "Oldest First"
  ];

  // Filter and sort faculty based on selected filters and search query
  const filteredFaculty = facultyData.filter((faculty) => {
    const matchesDepartment = selectedDepartment === "All Departments" || faculty.department === selectedDepartment;
    const matchesPosition = selectedPosition === "All Positions" || faculty.position === selectedPosition;
    const matchesStatus = selectedStatus === "All Status" || faculty.status === selectedStatus;
    const matchesSearch = faculty.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faculty.employeeId.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         faculty.department.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesDepartment && matchesPosition && matchesStatus && matchesSearch;
  }).sort((a, b) => {
    switch (sortBy) {
      case "Sort Z-A":
        return b.name.localeCompare(a.name);
      case "Newest First":
        return new Date(b.joinDate.split(' ')[2]) - new Date(a.joinDate.split(' ')[2]);
      case "Oldest First":
        return new Date(a.joinDate.split(' ')[2]) - new Date(b.joinDate.split(' ')[2]);
      default: // Sort A-Z
        return a.name.localeCompare(b.name);
    }
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredFaculty.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentFaculty = filteredFaculty.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedDepartment, selectedPosition, selectedStatus, searchQuery, sortBy]);

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

  return (
    <section className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col">
        <header className="top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
            Faculty Management
          </h1>
          <button 
            onClick={handleOpenForm}
            className="flex items-center gap-2 bg-[#FAFCFD] text-[#04203E] px-4 py-2 rounded-[8px] font-[Inter] font-medium text-[14px] hover:bg-[#E9EEF4] transition-colors">
            <Plus className="w-4 h-4" />
            Add Faculty
          </button>
        </header>
      </div>
      
      {/* Content area */}
      <div className="bg-[#FAFCFD] border-[#FAFCFD] border-[12px] p-[24px] gap-[24px] rounded-[12px]">
        {/* Search and Filters Section */}
        <div className="flex flex-row justify-between items-center mb-8">
          {/* Search Box - Left side */}
          <div className="relative ">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-4 h-4 text-[#717171]" />
            <input
              type="text"
              placeholder="Search by name, email or ID"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-[300px] rounded-[8px] border border-[#71717166] bg-[#FAFCFD] px-9 py-2 text-[14px] text-[#1F1D1D] placeholder-[#717171] font-[Inter] font-normal leading-[20px] focus:outline-none focus:border-[#0077FF] focus:ring-1 focus:ring-[#0077FF]"
            />
          </div>
          
          {/* Filters - Right side */}
          <div className="flex flex-row gap-4 items-center">
            {/* Department Dropdown */}
            <div className="w-[160px]">
              <Dropdown
                options={departmentOptions}
                selected={selectedDepartment}
                onSelect={(option) => setSelectedDepartment(option)}
                placeholder="All Departments"
                className="rounded-tl-[12px] rounded-tr-[12px] rounded-[12px] font-[400] text-[16px] border-[#E5E5E5]  py-[12px]"
              />
            </div>

            {/* Position Dropdown */}
            <div className="w-[150px]">
              <Dropdown
                options={positionOptions}
                selected={selectedPosition}
                onSelect={(option) => setSelectedPosition(option)}
                placeholder="All Positions"
                className="rounded-tl-[12px] rounded-tr-[12px] rounded-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>

            {/* Status Dropdown */}
            <div className="w-[150px]">
              <Dropdown
                options={statusOptions}
                selected={selectedStatus}
                onSelect={(option) => setSelectedStatus(option)}
                placeholder="All Status"
                className="rounded-tl-[12px] rounded-tr-[12px] rounded-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>

            {/* Sort Dropdown */}
            <div className="w-[150px]">
              <Dropdown
                options={sortOptions}
                selected={sortBy}
                onSelect={(option) => setSortBy(option)}
                placeholder="Sort A-Z"
                className="rounded-tl-[12px] rounded-tr-[12px] rounded-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
          </div>
        </div>
        
        {/* Faculty Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
          {currentFaculty.length > 0 ? (
            currentFaculty.map((faculty) => (
              <div 
                key={faculty.id} 
                className="bg-white rounded-[8px] border border-[#71717166] p-[24px] gap-[24px] shadow-[0px_4px_8px_0px_#0000001F] hover:shadow-lg transition-shadow"
                style={{ gap: '24px' }}
              >
                {/* Faculty Header */}
                <div className="flex items-start gap-3 mb-6">
                  <div className="w-12 h-12 rounded-full overflow-hidden flex-shrink-0">
                    <img 
                      src={FacultyPhoto} 
                      alt={faculty.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-[Inter] font-semibold text-[16px] text-[#1F1D1D] mb-1">
                      {faculty.name}
                    </h3>
                    <p className="font-[Inter] text-[12px] text-[#717171]">
                      {faculty.employeeId}
                    </p>
                  </div>
                </div>

                {/* Position with Icon */}
                <div className="flex items-center gap-2 mb-4">
                  <GraduationCap className="w-4 h-4 text-[#1F1D1D]" />
                  <span className="font-[Inter] font-normal text-[14px] leading-[20px] text-[#1F1D1D]">
                    {faculty.position}
                  </span>
                </div>

                {/* Department */}
                <div className="mb-4">
                  <span className="bg-[#E9EEF4] text-[#0077FF] px-3 py-1 rounded font-[Inter] font-normal text-[12px] leading-[20px]">
                    {faculty.department}
                  </span>
                </div>

                {/* Experience and Join Date */}
                <div className="flex items-center justify-between mb-4">
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#717171]" />
                    <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                      5 yrs exp
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Calendar className="w-4 h-4 text-[#717171]" />
                    <span className="font-[Inter] font-normal text-[12px] leading-[20px] text-[#717171]">
                      {faculty.joinDate}
                    </span>
                  </div>
                </div>

                {/* Courses */}
                <div className="mb-6">
                  <h4 className="font-[Inter] font-medium text-[12px] text-[#1F1D1D] mb-3">Courses</h4>
                  <div className="flex flex-wrap gap-2">
                    {faculty.courses.map((course, index) => (
                      <span 
                        key={index} 
                        className="bg-[#E9EEF4] text-[#717171] px-2 py-1 rounded font-[Inter] font-normal text-[12px] leading-[16px]"
                      >
                        {course}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Profile Completion */}
                <div className="mb-6">
                  <div className="flex justify-between items-center mb-2">
                    <span className="font-[Inter] text-[12px] text-[#1F1D1D]">Profile Completion</span>
                    <span className="font-[Inter] text-[12px] font-medium text-[#1F1D1D]">{faculty.profileCompletion}%</span>
                  </div>
                  <div className="w-full bg-[#E5E5E5] rounded-full h-2">
                    <div 
                      className="bg-[#0077FF] h-2 rounded-full transition-all duration-300" 
                      style={{ width: `${faculty.profileCompletion}%` }}
                    ></div>
                  </div>
                </div>

                {/* Contact Info */}
                <div className="space-y-3 mb-6">
                  <div className="flex items-center gap-2">
                    <Phone className="w-4 h-4 text-[#717171]" />
                    <span className="font-[Inter] text-[12px] text-[#717171]">
                      {faculty.phone}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Mail className="w-4 h-4 text-[#717171]" />
                    <span className="font-[Inter] text-[12px] text-[#717171] truncate">
                      {faculty.email}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="w-4 h-4 text-[#717171]" />
                    <span className="font-[Inter] text-[12px] text-[#717171]">
                      {faculty.availability}
                    </span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="flex gap-[10px]">
                  <button 
                    onClick={() => handleOpenEditForm(faculty)}
                    className="flex items-center justify-center gap-[10px] px-[32px] py-[8px] bg-white text-[#0077FF] rounded-[8px] border border-[#71717166] font-[Inter] text-[12px] hover:bg-[#F0F9FF] transition-all duration-300 ease-out flex-1">
                    <Edit className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center gap-[10px] px-[32px] py-[8px] bg-white text-[#717171] rounded-[8px] border border-[#71717166] font-[Inter] text-[12px] hover:bg-[#ECFDF7] transition-all duration-300 ease-out flex-1">
                    <Mail className="w-4 h-4" />
                  </button>
                  <button className="flex items-center justify-center gap-[10px] px-[32px] py-[8px] bg-white text-[#EF4444] rounded-[8px] border border-[#71717166] font-[Inter] text-[12px] hover:bg-[#FEF2F2] transition-all duration-300 ease-out flex-1">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                  </button>
                </div>
              </div>
            ))
          ) : (
            <div className="col-span-full py-8 px-6 text-center">
              <p className="font-[Inter] text-[16px] text-[#717171]">
                No faculty found matching your criteria
              </p>
            </div>
          )}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center">
          <span className="font-[Inter] text-[14px] text-[#717171]">
            Showing {startIndex + 1} to {Math.min(endIndex, filteredFaculty.length)} of {filteredFaculty.length} faculty
          </span>
          <div className="flex gap-2 items-center">
            <button 
              onClick={handlePreviousPage}
              disabled={currentPage === 1}
              className={`px-3 py-2 border border-[#E5E5E5] rounded-[6px] font-[Inter] text-[14px] transition-colors ${
                currentPage === 1 
                  ? 'text-[#B0B0B0] cursor-not-allowed' 
                  : 'text-[#717171] hover:bg-[#F4F7FA] cursor-pointer'
              }`}
            >
              Previous
            </button>
            
            <button 
              onClick={handleNextPage}
              disabled={currentPage === totalPages}
              className={`px-3 py-2 border border-[#E5E5E5] rounded-[6px] font-[Inter] text-[14px] transition-colors ${
                currentPage === totalPages 
                  ? 'text-[#B0B0B0] cursor-not-allowed' 
                  : 'text-[#717171] hover:bg-[#F4F7FA] cursor-pointer'
              }`}
            >
              Next
            </button>
          </div>
        </div>
      </div>

      {/* Add Faculty Modal Overlay */}
      {isFormOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={handleCloseForm}
        >
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div 
            className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <AddFaculty 
              isOpen={isFormOpen} 
              onClose={handleCloseForm} 
              onAddFaculty={handleAddFaculty}
            />
          </div>
        </div>
      )}

      {/* Edit Faculty Modal Overlay */}
      {isEditFormOpen && (
        <div 
          className="fixed inset-0 z-50 overflow-y-auto"
          onClick={handleCloseEditForm}
        >
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div 
            className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2"
            onClick={(e) => e.stopPropagation()}
          >
            <EditFaculty 
              isOpen={isEditFormOpen} 
              onClose={handleCloseEditForm} 
              onUpdateFaculty={handleEditFaculty}
              facultyData={editingFaculty}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default FacultyManagement;
