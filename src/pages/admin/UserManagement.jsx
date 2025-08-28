import React, { useState } from "react";
import { Search, Plus } from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";
import CreateUserForm from "../../components/admin/forms/CreateUserForm";
import EditUserForm from "../../components/admin/forms/EditUserForm";
import CreateRoleForm from "../../components/admin/forms/CreateRoleForm";
import EditRoleForm from "../../components/admin/forms/EditRoleForm";

const UserManagement = () => {
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [selectedRole, setSelectedRole] = useState("All Roles");
  const [searchQuery, setSearchQuery] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const [activeTab, setActiveTab] = useState("users"); // Add tab state
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isEditFormOpen, setIsEditFormOpen] = useState(false);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [editingUser, setEditingUser] = useState(null);
  const [deletingUser, setDeletingUser] = useState(null);
  
  // Role form states
  const [isRoleFormOpen, setIsRoleFormOpen] = useState(false);
  const [isEditRoleFormOpen, setIsEditRoleFormOpen] = useState(false);
  const [editingRole, setEditingRole] = useState(null);
  
  const itemsPerPage = 8;

  const handleOpenForm = () => {
    if (activeTab === "users") {
      setIsFormOpen(true);
    } else {
      setIsRoleFormOpen(true);
    }
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  const handleNavigateToRoles = () => {
    setActiveTab("roles");
  };

  const handleOpenEditForm = (user) => {
    setEditingUser(user);
    setIsEditFormOpen(true);
  };

  const handleCloseEditForm = () => {
    setIsEditFormOpen(false);
    setEditingUser(null);
  };

  const handleOpenDeleteModal = (user) => {
    setDeletingUser(user);
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
    setDeletingUser(null);
  };

  // Role form handlers
  const handleOpenRoleForm = () => {
    setIsRoleFormOpen(true);
  };

  const handleCloseRoleForm = () => {
    setIsRoleFormOpen(false);
  };

  const handleOpenEditRoleForm = (role) => {
    setEditingRole(role);
    setIsEditRoleFormOpen(true);
  };

  const handleCloseEditRoleForm = () => {
    setIsEditRoleFormOpen(false);
    setEditingRole(null);
  };

  // Initial roles data
  const [rolesData, setRolesData] = useState([
    {
      id: 1,
      roleName: "STUDENT",
      description: "Can view own profile and view live updates",
      assignedUsers: 463
    },
    {
      id: 2,
      roleName: "FACULTY",
      description: "Manage Students and schedule exams",
      assignedUsers: 54
    },
    {
      id: 3,
      roleName: "ADMIN",
      description: "Full system access",
      assignedUsers: 3
    }
  ]);
  const [usersData, setUsersData] = useState([
    {
      id: 1,
      name: "Asha Singh",
      email: "ashasingh@subguniversity.artetic.edu.in",
      username: "asha2003",
      mobile: "9685573864",
      roles: ["Admin", "Faculty"],
      status: "Active"
    },
    {
      id: 2,
      name: "Rahul Kumar",
      email: "rahulkumar@subguniversity.artetic.edu.in",
      username: "rahul2003",
      mobile: "9685573865",
      roles: ["Admin"],
      status: "Blocked"
    },
    {
      id: 3,
      name: "Priya Sharma",
      email: "priyasharma@subguniversity.artetic.edu.in",
      username: "priya2003",
      mobile: "9685573866",
      roles: ["Faculty"],
      status: "Active"
    },
    {
      id: 4,
      name: "Amit Patel",
      email: "amitpatel@subguniversity.artetic.edu.in",
      username: "amit2003",
      mobile: "9685573867",
      roles: ["Student"],
      status: "Active"
    },
    {
      id: 5,
      name: "Neha Gupta",
      email: "nehagupta@subguniversity.artetic.edu.in",
      username: "neha2003",
      mobile: "9685573868",
      roles: ["Student"],
      status: "Active"
    },
    {
      id: 6,
      name: "Suresh Reddy",
      email: "sureshreddy@subguniversity.artetic.edu.in",
      username: "suresh2003",
      mobile: "9685573869",
      roles: ["Faculty", "HOD"],
      status: "Active"
    },
    {
      id: 7,
      name: "Kavya Nair",
      email: "kavyanair@subguniversity.artetic.edu.in",
      username: "kavya2003",
      mobile: "9685573870",
      roles: ["Student", "Monitor"],
      status: "Active"
    },
    {
      id: 8,
      name: "Ravi Agarwal",
      email: "raviagarwal@subguniversity.artetic.edu.in",
      username: "ravi2003",
      mobile: "9685573871",
      roles: ["Admin"],
      status: "Active"
    },
    {
      id: 9,
      name: "Shruti Joshi",
      email: "shrutijoshi@subguniversity.artetic.edu.in",
      username: "shruti2003",
      mobile: "9685573872",
      roles: ["Faculty"],
      status: "Blocked"
    },
    {
      id: 10,
      name: "Anil Verma",
      email: "anilverma@subguniversity.artetic.edu.in",
      username: "anil2003",
      mobile: "9685573873",
      roles: ["Student"],
      status: "Active"
    },
    {
      id: 11,
      name: "Pooja Mishra",
      email: "poojamishra@subguniversity.artetic.edu.in",
      username: "pooja2003",
      mobile: "9685573874",
      roles: ["Faculty", "Coordinator"],
      status: "Active"
    },
    {
      id: 12,
      name: "Vikram Singh",
      email: "vikramsingh@subguniversity.artetic.edu.in",
      username: "vikram2003",
      mobile: "9685573875",
      roles: ["Student", "Prefect"],
      status: "Active"
    },
    {
      id: 13,
      name: "Meera Kapoor",
      email: "meerakapoor@subguniversity.artetic.edu.in",
      username: "meera2003",
      mobile: "9685573876",
      roles: ["Admin", "Principal"],
      status: "Active"
    },
    {
      id: 14,
      name: "Sanjay Yadav",
      email: "sanjayyadav@subguniversity.artetic.edu.in",
      username: "sanjay2003",
      mobile: "9685573877",
      roles: ["Faculty"],
      status: "Active"
    },
    {
      id: 15,
      name: "Deepika Roy",
      email: "deepikaroy@subguniversity.artetic.edu.in",
      username: "deepika2003",
      mobile: "9685573878",
      roles: ["Student"],
      status: "Blocked"
    },
    {
      id: 16,
      name: "Manish Dubey",
      email: "manishdubey@subguniversity.artetic.edu.in",
      username: "manish2003",
      mobile: "9685573879",
      roles: ["Faculty", "Librarian"],
      status: "Active"
    },
    {
      id: 17,
      name: "Anjali Chopra",
      email: "anjalichopra@subguniversity.artetic.edu.in",
      username: "anjali2003",
      mobile: "9685573880",
      roles: ["Student", "Class Representative"],
      status: "Active"
    },
    {
      id: 18,
      name: "Rajesh Kumar",
      email: "rajeshkumar@subguniversity.artetic.edu.in",
      username: "rajesh2003",
      mobile: "9685573881",
      roles: ["Admin"],
      status: "Active"
    },
    {
      id: 19,
      name: "Swati Bhatt",
      email: "swatibhatt@subguniversity.artetic.edu.in",
      username: "swati2003",
      mobile: "9685573882",
      roles: ["Faculty", "Sports Coordinator"],
      status: "Active"
    },
    {
      id: 20,
      name: "Kiran Jain",
      email: "kiranjain@subguniversity.artetic.edu.in",
      username: "kiran2003",
      mobile: "9685573883",
      roles: ["Student"],
      status: "Active"
    },
    {
      id: 21,
      name: "Rohit Mehta",
      email: "rohitmehta@subguniversity.artetic.edu.in",
      username: "rohit2003",
      mobile: "9685573884",
      roles: ["Faculty", "Department Head"],
      status: "Active"
    },
    {
      id: 22,
      name: "Nisha Tiwari",
      email: "nishatiwari@subguniversity.artetic.edu.in",
      username: "nisha2003",
      mobile: "9685573885",
      roles: ["Student", "Student Council"],
      status: "Active"
    },
    {
      id: 23,
      name: "Ashok Pandey",
      email: "ashokpandey@subguniversity.artetic.edu.in",
      username: "ashok2003",
      mobile: "9685573886",
      roles: ["Admin", "Registrar"],
      status: "Active"
    },
    {
      id: 24,
      name: "Reema Shah",
      email: "reemashah@subguniversity.artetic.edu.in",
      username: "reema2003",
      mobile: "9685573887",
      roles: ["Faculty", "Counselor"],
      status: "Blocked"
    },
    {
      id: 25,
      name: "Arjun Das",
      email: "arjundas@subguniversity.artetic.edu.in",
      username: "arjun2003",
      mobile: "9685573888",
      roles: ["Student"],
      status: "Active"
    },
    {
      id: 26,
      name: "Sunita Rao",
      email: "sunitarao@subguniversity.artetic.edu.in",
      username: "sunita2003",
      mobile: "9685573889",
      roles: ["Faculty"],
      status: "Active"
    },
    {
      id: 27,
      name: "Gaurav Saxena",
      email: "gauravsaxena@subguniversity.artetic.edu.in",
      username: "gaurav2003",
      mobile: "9685573890",
      roles: ["Student", "Tech Lead"],
      status: "Active"
    },
    {
      id: 28,
      name: "Priyanka Sinha",
      email: "priyankasinha@subguniversity.artetic.edu.in",
      username: "priyanka2003",
      mobile: "9685573891",
      roles: ["Admin"],
      status: "Active"
    },
    {
      id: 29,
      name: "Varun Malhotra",
      email: "varunmalhotra@subguniversity.artetic.edu.in",
      username: "varun2003",
      mobile: "9685573892",
      roles: ["Faculty", "Research Head"],
      status: "Active"
    },
    {
      id: 30,
      name: "Sneha Bansal",
      email: "snehabansal@subguniversity.artetic.edu.in",
      username: "sneha2003",
      mobile: "9685573893",
      roles: ["Student"],
      status: "Blocked"
    }
  ]);

  // Function to handle adding new user
  const handleAddUser = (newUser) => {
    setUsersData(prev => [newUser, ...prev]);
    setCurrentPage(1);
  };

  // Function to handle editing user
  const handleEditUser = (updatedUser) => {
    setUsersData(prev => 
      prev.map(user => 
        user.id === updatedUser.id ? updatedUser : user
      )
    );
  };

  // Function to handle deleting user
  const handleDeleteUser = () => {
    if (deletingUser) {
      setUsersData(prev => 
        prev.filter(user => user.id !== deletingUser.id)
      );
      handleCloseDeleteModal();
    }
  };

  // Function to handle adding new role
  const handleAddRole = (newRole) => {
    setRolesData(prev => [newRole, ...prev]);
  };

  // Function to handle editing role
  const handleEditRole = (updatedRole) => {
    setRolesData(prev => 
      prev.map(role => 
        role.id === updatedRole.id ? updatedRole : role
      )
    );
  };

  // Function to handle removing role
  const handleRemoveRole = (roleId) => {
    setRolesData(prev => prev.filter(role => role.id !== roleId));
  };

  // Function to handle blocking/unblocking user
  const handleBlockUser = (user) => {
    setUsersData(prev => 
      prev.map(u => 
        u.id === user.id 
          ? { ...u, status: u.status === "Active" ? "Blocked" : "Active" }
          : u
      )
    );
  };

  // Dropdown options
  const statusOptions = [
    "All Status",
    "Active",
    "Blocked"
  ];

  const roleOptions = [
    "All Roles",
    "Admin",
    "Faculty",
    "Student"
  ];

  // Status badge styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "Active":
        return "bg-[#ECFDF7] text-[#10B981] px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
      case "Blocked":
        return "bg-[#FEF2F2] text-[#EF4444] px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
      default:
        return "bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
    }
  };

  // Role badge styling
  const getRoleStyle = (role) => {
    const baseClass = "px-2 py-1 rounded-[4px] font-[Inter] font-medium text-[10px] leading-[12px] mr-1";
    
    if (role === "Admin") {
      return `bg-[#E9EEF4] text-[#0077FF] ${baseClass}`;
    } else if (role === "Faculty" || role === "HOD" || role === "Coordinator" || role === "Librarian" || 
               role === "Department Head" || role === "Sports Coordinator" || role === "Counselor" || 
               role === "Research Head") {
      return `bg-[#6133CD1A] text-[#6133CD] ${baseClass}`;
    } else {
      // Default for Student and other roles
      return `bg-[#DCFCE7] text-[#16A34A] ${baseClass}`;
    }
  };

  // Filter users based on selected filters and search query
  const filteredUsers = usersData.filter((user) => {
    const matchesStatus = selectedStatus === "All Status" || user.status === selectedStatus;
    const matchesRole = selectedRole === "All Roles" || user.roles.includes(selectedRole);
    const matchesSearch = user.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.email.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         user.username.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesStatus && matchesRole && matchesSearch;
  });

  // Pagination calculations
  const totalPages = Math.ceil(filteredUsers.length / itemsPerPage);
  const startIndex = (currentPage - 1) * itemsPerPage;
  const endIndex = startIndex + itemsPerPage;
  const currentUsers = filteredUsers.slice(startIndex, endIndex);

  // Reset to page 1 when filters change
  React.useEffect(() => {
    setCurrentPage(1);
  }, [selectedStatus, selectedRole, searchQuery]);

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
  const handleEditClick = (user) => {
    handleOpenEditForm(user);
  };

  // Handle delete button click
  const handleDeleteClick = (user) => {
    handleOpenDeleteModal(user);
  };

  return (
    <section className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col">
        <header className="top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
            User Management & Roles
          </h1>
          <button onClick={handleOpenForm} className="flex items-center gap-2 bg-[#FAFCFD] text-[#04203E] px-4 py-2 rounded-[8px] font-[Inter] font-medium text-[14px] hover:bg-[#E9EEF4] transition-colors">
            <Plus className="w-4 h-4" />
            {activeTab === "users" ? "Create User" : "Create Role"}
          </button>
        </header>
      </div>
      
      {/* Content area */}
      <div className="bg-[#FAFCFD] border-[#FAFCFD] border-[12px] p-[24px] gap-[24px] rounded-[12px]">
        {/* Tabs */}
        <div className="flex border-b border-[#E5E5E5] mb-6">
          <button 
            onClick={() => setActiveTab("users")}
            className={`px-4 py-2 font-[Inter] font-medium text-[14px] ${
              activeTab === "users" 
                ? "text-[#1F1D1D] border-b-2 border-[#04203E]" 
                : "text-[#717171] hover:text-[#1F1D1D]"
            }`}
          >
            Users
          </button>
          <button 
            onClick={() => setActiveTab("roles")}
            className={`px-4 py-2 font-[Inter] font-medium text-[14px] ${
              activeTab === "roles" 
                ? "text-[#1F1D1D] border-b-2 border-[#04203E]" 
                : "text-[#717171] hover:text-[#1F1D1D]"
            }`}
          >
            Roles
          </button>
        </div>

        {/* Conditional Content Based on Active Tab */}
        {activeTab === "users" ? (
          <>
            {/* Search and Filters Section */}
            <div className="flex flex-row justify-between items-center mb-8">
              {/* Search Box - Left side */}
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#717171]" />
                <input
                  type="text"
                  placeholder="Search by name, email or username"
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

                {/* Role Dropdown */}
                <div className="w-[150px]">
                  <Dropdown
                    options={roleOptions}
                    selected={selectedRole}
                    onSelect={(option) => setSelectedRole(option)}
                    placeholder="All Roles"
                    className="rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
                  />
                </div>
              </div>
            </div>
            
            {/* Users Table */}
            <div className="bg-[#FAFCFD] rounded-[8px]">
              {/* Table Header */}
              <div className="bg-[#F4F7FA] py-[20px] px-[2px] flex items-center justify-between border-b border-[#71717166] rounded-t-[8px]">
                <div className="flex-3">
                  <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                    Name
                  </span>
                </div>
                <div className="flex-2">
                  <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                    Username
                  </span>
                </div>
                <div className="flex-1">
                  <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                    Mobile
                  </span>
                </div>
                <div className="flex-2">
                  <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                    Roles
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
                {currentUsers.length > 0 ? (
                  currentUsers.map((user) => (
                    <div 
                      key={user.id}
                      className="flex items-center justify-between py-[20px] px-[2px] border-b border-[#71717166] gap-3"
                    >
                      <div className="flex-3">
                        <div className="flex flex-col">
                          <span className="font-[Inter] font-medium text-[16px] leading-[20px] text-[#1F1D1D]">
                            {user.name}
                          </span>
                          <span className="font-[Inter] font-normal text-[12px] leading-[16px] text-[#717171]">
                            {user.email}
                          </span>
                        </div>
                      </div>
                      <div className="flex-2">
                        <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                          {user.username}
                        </span>
                      </div>
                      <div className="flex-1">
                        <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                          {user.mobile}
                        </span>
                      </div>
                      <div className="flex-2">
                        <div className="flex flex-wrap">
                          {user.roles.map((role, index) => (
                            <span key={index} className={getRoleStyle(role)}>
                              {role}
                            </span>
                          ))}
                        </div>
                      </div>
                      <div className="flex-1">
                        <span className={getStatusStyle(user.status)}>
                          {user.status}
                        </span>
                      </div>
                      <div className="flex-1 flex gap-3">
                        <button 
                          onClick={() => handleEditClick(user)}
                          className="flex items-center gap-1 font-[Inter] font-medium text-[14px] leading-[16px] text-[#0077FF] hover:underline"
                        >
                          <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M18.5 2.50001C18.8978 2.10218 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10218 21.5 2.50001C21.8978 2.89784 22.1213 3.43739 22.1213 4.00001C22.1213 4.56262 21.8978 5.10218 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          </svg>
                        </button>
                        <button 
                          onClick={() => handleBlockUser(user)}
                          className={`px-3 py-1 border rounded-md font-[Inter] font-medium text-[12px] leading-[16px] transition-colors ${
                            user.status === "Active" 
                              ? "bg-[#FEF2F2] border-[#EF4444] text-[#EF4444] hover:bg-[#FEE2E2]"
                              : "bg-[#ECFDF7] border-[#10B981] text-[#10B981] hover:bg-[#D1FAE5]"
                          }`}
                        >
                          {user.status === "Active" ? "Block" : "Unblock"}
                        </button>
                      </div>
                    </div>
                  ))
                ) : (
                  <div className="py-8 px-6 text-center">
                    <p className="font-[Inter] text-[16px] text-[#717171]">
                      No users found matching your criteria
                    </p>
                  </div>
                )}
              </div>
            </div>

            {/* Pagination */}
            <div className="flex justify-between items-center mt-6">
              <span className="font-[Inter] text-[14px] text-[#717171]">
                Showing {startIndex + 1} to {Math.min(endIndex, filteredUsers.length)} of {filteredUsers.length} courses
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
          </>
        ) : (
          <>
            {/* Role Management Header */}
            <div className="mb-8">
              <h2 className="font-[Inter] font-medium text-[18px] leading-[22px] text-[#1F1D1D]">
                Role Management
              </h2>
            </div>
            
            {/* Roles Table */}
            <div className="bg-[#FAFCFD] rounded-[8px]">
              {/* Table Header */}
              <div className="bg-[#F4F7FA] py-[20px] px-[2px] flex items-center justify-between border-b border-[#71717166] rounded-t-[8px]">
                <div className="flex-2">
                  <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                    Role Name
                  </span>
                </div>
                <div className="flex-3">
                  <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                    Description
                  </span>
                </div>
                <div className="flex-1">
                  <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                    Assigned Users
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
                {rolesData.map((role) => (
                  <div 
                    key={role.id}
                    className="flex items-center justify-between py-[20px] px-[2px] border-b border-[#71717166] gap-3"
                  >
                    <div className="flex-2">
                      <span className="font-[Inter] font-medium text-[16px] leading-[20px] text-[#1F1D1D]">
                        {role.roleName}
                      </span>
                    </div>
                    <div className="flex-3">
                      <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                        {role.description}
                      </span>
                    </div>
                    <div className="flex-1">
                      <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                        {role.assignedUsers}
                      </span>
                    </div>
                    <div className="flex-1 flex gap-3">
                      <button 
                        onClick={() => handleOpenEditRoleForm(role)}
                        className="flex items-center gap-1 font-[Inter] font-medium text-[14px] leading-[16px] text-[#0077FF] hover:underline"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M11 4H4C3.46957 4 2.96086 4.21071 2.58579 4.58579C2.21071 4.96086 2 5.46957 2 6V20C2 20.5304 2.21071 21.0391 2.58579 21.4142C2.96086 21.7893 3.46957 22 4 22H18C18.5304 22 19.0391 21.7893 19.4142 21.4142C19.7893 21.0391 20 20.5304 20 20V13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M18.5 2.50001C18.8978 2.10218 19.4374 1.87869 20 1.87869C20.5626 1.87869 21.1022 2.10218 21.5 2.50001C21.8978 2.89784 22.1213 3.43739 22.1213 4.00001C22.1213 4.56262 21.8978 5.10218 21.5 5.50001L12 15L8 16L9 12L18.5 2.50001Z" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                      <button 
                        onClick={() => handleRemoveRole(role.id)}
                        className="flex items-center gap-1 font-[Inter] font-medium text-[14px] leading-[16px] text-[#EF4444] hover:underline"
                      >
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                          <path d="M3 6h18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6m3 0V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="10" y1="11" x2="10" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                          <line x1="14" y1="11" x2="14" y2="17" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Roles Pagination */}
            <div className="flex justify-between items-center mt-6">
              <span className="font-[Inter] text-[14px] text-[#717171]">
                Showing 3 of 12 courses
              </span>
              <div className="flex gap-2 items-center">
                <button 
                  className="px-3 py-2 border border-[#E5E5E5] rounded-[6px] font-[Inter] text-[14px] text-[#717171] hover:bg-[#F4F7FA] cursor-pointer transition-colors"
                >
                  Previous
                </button>
                
                <button 
                  className="px-3 py-2 border border-[#E5E5E5] rounded-[6px] font-[Inter] text-[14px] text-[#717171] hover:bg-[#F4F7FA] cursor-pointer transition-colors"
                >
                  Next
                </button>
              </div>
            </div>
          </>
        )}
      </div>

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
                  <svg className="w-6 h-6 text-[#DC2626]" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12 2L1 21h22L12 2zm0 3.99L19.53 19H4.47L12 5.99zM11 16h2v2h-2v-2zm0-6h2v4h-2v-4z"/>
                  </svg>
                </div>
                <h3 className="font-[Inter] font-semibold text-[18px] text-[#1F1D1D]">Block User</h3>
              </div>

              {/* Content */}
              <div className="mb-6">
                <p className="font-[Inter] text-[14px] text-[#717171] mb-3">
                  Are you sure you want to block '{deletingUser?.name}'?
                </p>
                <p className="font-[Inter] text-[12px] text-[#DC2626] font-medium">
                  This user will no longer be able to access the system.
                </p>
              </div>

              {/* Action Button */}
              <div className="flex justify-end">
                <button
                  onClick={handleDeleteUser}
                  className="px-6 py-2 bg-[#DC2626] text-white rounded-[6px] font-[Inter] text-[14px] font-medium hover:bg-[#B91C1C] transition-colors"
                >
                  Block
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Add User Modal Overlay */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" onClick={handleCloseForm}>
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2">
            <CreateUserForm 
              isOpen={isFormOpen}
              onClose={handleCloseForm}
              onSubmit={handleAddUser}
              onNavigateToRoles={handleNavigateToRoles}
            />
          </div>
        </div>
      )}

      {/* Edit User Modal Overlay */}
      {isEditFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" onClick={handleCloseEditForm}>
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2">
            <EditUserForm 
              isOpen={isEditFormOpen}
              onClose={handleCloseEditForm}
              onSubmit={handleEditUser}
              user={editingUser}
            />
          </div>
        </div>
      )}

      {/* Add Role Modal Overlay */}
      {isRoleFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" onClick={handleCloseRoleForm}>
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2">
            <CreateRoleForm 
              isOpen={isRoleFormOpen}
              onClose={handleCloseRoleForm}
              onSubmit={handleAddRole}
            />
          </div>
        </div>
      )}

      {/* Edit Role Modal Overlay */}
      {isEditRoleFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto" onClick={handleCloseEditRoleForm}>
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 flex items-center justify-center min-h-screen px-4 max-sm:py-2 max-sm:px-2">
            <EditRoleForm 
              isOpen={isEditRoleFormOpen}
              onClose={handleCloseEditRoleForm}
              onSubmit={handleEditRole}
              role={editingRole}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default UserManagement;
