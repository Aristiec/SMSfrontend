import React, { useState } from "react";
import { Search, Eye } from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";
import PendingQuery from "../../components/faculty/Query/PendingQuery";
import InProgressQuery from "../../components/faculty/Query/InProgressQuery";
import StudentChat from "../../components/faculty/Query/StudentChat";

const Students = () => {
  const [selectedCategory, setSelectedCategory] = useState("All Categories");
  const [selectedStatus, setSelectedStatus] = useState("All Status");
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedTicket, setSelectedTicket] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [modalType, setModalType] = useState("pending"); // "pending" or "inProgress"
  const [showChat, setShowChat] = useState(false);

  // Sample ticket data
  const ticketsData = [
    {
      id: 1,
      subject: "Request for Grade Review",
      category: "Academic",
      status: "In Progress",
      date: "Nov 7, 2023"
    },
    {
      id: 2,
      subject: "Bus Schedule Clarification",
      category: "Transport",
      status: "Resolved",
      date: "Nov 7, 2023"
    },
    {
      id: 3,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    },
    {
      id: 4,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    },
    {
      id: 5,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    },
    {
      id: 6,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    },
    {
      id: 7,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    },
    {
      id: 8,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    },
    {
      id: 9,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    },
    {
      id: 10,
      subject: "Scholarship Application Status",
      category: "Finance",
      status: "Open",
      date: "Nov 7, 2023"
    }
  ];

  // Dropdown options
  const categoryOptions = [
    "All Categories",
    "Academic",
    "Administrative", 
    "Finance",
    "Technical",
    "Transport",
    "Other"
  ];

  const statusOptions = [
    "All Status",
    "Open",
    "In Progress",
    "Resolved"
  ];

  // Status badge styling
  const getStatusStyle = (status) => {
    switch (status) {
      case "In Progress":
        return "bg-[#E9EEF4] text-[#0077FF] px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
      case "Resolved":
        return "bg-[#ECFDF7] text-[#10B981] px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
      case "Open":
        return "bg-[#FFF4ED] text-[#F97316] px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
      default:
        return "bg-gray-100 text-gray-600 px-3 py-1 rounded-full font-[Inter] font-medium text-[12px] leading-[16px]";
    }
  };

  // Filter tickets based on selected category, status, and search query
  const filteredTickets = ticketsData.filter((ticket) => {
    const matchesCategory = selectedCategory === "All Categories" || ticket.category === selectedCategory;
    const matchesStatus = selectedStatus === "All Status" || ticket.status === selectedStatus;
    const matchesSearch = ticket.subject.toLowerCase().includes(searchQuery.toLowerCase()) ||
                         ticket.category.toLowerCase().includes(searchQuery.toLowerCase());
    
    return matchesCategory && matchesStatus && matchesSearch;
  });

  // Handle view button click
  const handleViewClick = (ticket) => {
    setSelectedTicket(ticket);
    setModalType(ticket.status === "In Progress" ? "inProgress" : "pending");
    setShowModal(true);
  };

  // Handle modal close
  const handleCloseModal = () => {
    setShowModal(false);
    setSelectedTicket(null);
    setModalType("pending");
  };

  // Handle start working
  const handleStartWorking = () => {
    // Update ticket status to "In Progress" and switch to InProgressQuery modal
    setModalType("inProgress");
    console.log("Starting work on ticket:", selectedTicket);
  };

  // Handle submit resolution
  const handleSubmitResolution = (comment) => {
    // Add logic to resolve the ticket
    console.log("Resolving ticket:", selectedTicket, "with comment:", comment);
    handleCloseModal();
    setShowChat(true); // Open chat sidebar
  };

  // Handle close chat
  const handleCloseChat = () => {
    setShowChat(false);
  };

  return (
    <section className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col">
        <header className="top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
            Student Queries
          </h1>
        </header>
      </div>
      
      {/* Content area */}
      <div className="bg-[#FAFCFD] border-[#FAFCFD] border-[12px] p-[24px] gap-[24px] rounded-[12px]">
        {/* Tickets Raised Section */}
        <div className="flex flex-row justify-between items-center mb-8">
          <h2 className="font-[Inter] font-medium text-[20px] leading-[24px] text-[#1F1D1D]">
            Tickets Raised
          </h2>
          
          {/* Search and Filters */}
          <div className="flex flex-row gap-4 items-center">
            {/* Search Box */}
            <div className="relative">
              <input
                type="text"
                placeholder="Search tickets..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-[180px] h-[48px] border border-[#E5E5E5] rounded-[8px] px-2 pr-6 py-2 font-[Inter] font-normal text-[16px] leading-[24px] text-[#1F1D1D] placeholder-[#717171] focus:outline-none focus:border-[#04203e]"
              />
              <Search className="absolute right-3 top-1/2 transform -translate-y-1/2 w-5 h-5 text-[#717171]" />
            </div>
            
            {/* Category Dropdown */}
            <div className="w-[175px]">
              <Dropdown
                options={categoryOptions}
                selected={selectedCategory}
                onSelect={(option) => setSelectedCategory(option)}
                placeholder="All Categories"
                className="rounded-tl-[12px] rounded-tr-[12px] font-[400] text-[16px] border-[#E5E5E5] px-[16px] py-[12px]"
              />
            </div>
            
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
          </div>
        </div>
        
        {/* Tickets Table */}
        <div className="bg-[#FAFCFD] rounded-[8px] ">
          {/* Table Header */}
          <div className="bg-[#F4F7FA] py-[20px] px-[2px] flex items-center justify-between border-b border-[#71717166] rounded-t-[8px]">
            <div className="flex-3">
              <span className="font-[Inter]  font-medium text-[14px] leading-[18px] text-[#717171]">
                Subject
              </span>
            </div>
            <div className="flex-2">
              <span className="font-[Inter]  font-medium text-[14px] leading-[18px] text-[#717171]">
                Category
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Status
              </span>
            </div>
            <div className="flex-1">
              <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#717171]">
                Date
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
            {filteredTickets.length > 0 ? (
              filteredTickets.map((ticket) => (
                <div 
                  key={ticket.id}
                  className="flex items-center justify-between py-[20px] px-[2px] border-b border-[#71717166] gap-3"
                >
                  <div className="flex-3">
                    <span className="font-[Inter] font-medium text-[16px] leading-[20px] text-[#1F1D1D]">
                      {ticket.subject}
                    </span>
                  </div>
                  <div className="flex-2">
                    <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                      {ticket.category}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className={getStatusStyle(ticket.status)}>
                      {ticket.status}
                    </span>
                  </div>
                  <div className="flex-1">
                    <span className="font-[Inter] font-normal text-[14px] leading-[18px] text-[#1F1D1D]">
                      {ticket.date}
                    </span>
                  </div>
                  <div className="flex-1">
                    <button 
                      onClick={() => handleViewClick(ticket)}
                      className="flex items-center gap-1 font-[Inter] font-medium text-[12px] leading-[16px] text-[#0077FF] hover:underline"
                    >
                      <Eye className="w-3 h-3" />
                      View
                    </button>
                  </div>
                </div>
              ))
            ) : (
              <div className="py-8 px-6 text-center">
                <p className="font-[Inter] text-[16px] text-[#717171]">
                  No tickets found matching your criteria
                </p>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* Modal */}
      {showModal && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 ml-[330px] mt-[62px] max-h-[100vh] overflow-y-auto pb-8">
            {modalType === "pending" ? (
              <PendingQuery
                ticket={selectedTicket}
                onClose={handleCloseModal}
                onStartWorking={handleStartWorking}
              />
            ) : (
              <InProgressQuery
                ticket={selectedTicket}
                onClose={handleCloseModal}
                onSubmit={handleSubmitResolution}
              />
            )}
          </div>
        </div>
      )}

      {/* Student Chat Sidebar */}
      {showChat && (
        <div className="fixed inset-0 z-50">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50">
            <StudentChat 
              isOpen={showChat}
              onClose={handleCloseChat}
              ticket={selectedTicket}
            />
          </div>
        </div>
      )}
    </section>
  );
};

export default Students;
