import React, { useState } from "react";
import Dropdown from "../../components/utils/Dropdown";

const tickets = [
  {
    subject: "Login Issues with Student Portal",
    category: "Technical",
    status: "Open",
    date: "7/12/2023",
    studentId: "STU001",
    studentName: "John Doe"
  },
  {
    subject: "Request for Grade Review",
    category: "Academic",
    status: "In Progress",
    date: "4/10/2023",
    studentId: "STU002",
    studentName: "Jane Smith"
  },
  {
    subject: "Bus Schedule Clarification",
    category: "Transport",
    status: "Resolved",
    date: "19/06/2023",
    studentId: "STU003",
    studentName: "Mike Johnson"
  },
  {
    subject: "Scholarship Application Status",
    category: "Finance",
    status: "Open",
    date: "12/04/2023",
    studentId: "STU004",
    studentName: "Sarah Wilson"
  },
  {
    subject: "Fee Payment Query",
    category: "Finance",
    status: "In Progress",
    date: "15/11/2023",
    studentId: "STU005",
    studentName: "David Brown"
  },
  {
    subject: "Library Access Issues",
    category: "Administrative",
    status: "Resolved",
    date: "22/09/2023",
    studentId: "STU006",
    studentName: "Emily Davis"
  }
];

const statusStyles = {
  Open: "bg-orange-100 text-orange-600",
  "In Progress": "bg-blue-100 text-blue-600",
  Resolved: "bg-green-100 text-green-600",
};

const dropdown = {
  categoryFilter: {
    placeholder: "All Categories",
    options: [
      "Academic",
      "Administrative", 
      "Technical",
      "Transport",
      "Finance",
      "Others",
    ],
  },
  statusFilter: {
    placeholder: "All Status",
    options: ["Open", "In Progress", "Resolved"],
  },
};

const Support = () => {
  const [categoryFilter, setCategoryFilter] = useState("");
  const [statusFilter, setStatusFilter] = useState("");
  const [searchTerm, setSearchTerm] = useState("");

  const handleCategoryFilter = (value) => {
    setCategoryFilter(value);
  };

  const handleStatusFilter = (value) => {
    setStatusFilter(value);
  };

  // Filter tickets based on search and filters
  const filteredTickets = tickets.filter(ticket => {
    const matchesSearch = ticket.subject.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.studentName.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         ticket.studentId.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = !categoryFilter || ticket.category === categoryFilter;
    const matchesStatus = !statusFilter || ticket.status === statusFilter;
    
    return matchesSearch && matchesCategory && matchesStatus;
  });

  return (
    <div className="mx-auto flex flex-col gap-8 bg-[#E9EEF4] font-[Inter] min-h-screen">
      <div className="flex flex-col px-4 gap-6 mt-4">
        <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather]">
            Support Management
          </h1>
        </header>

        <section className="flex flex-col gap-6">
          <div
            style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
            className="font-[Inter] bg-[#FAFCFD] rounded-[12px] flex flex-col gap-6 p-6"
          >
            <div className="flex lg:justify-between gap-2">
              <p className="lg:w-1/2 font-medium lg:text-[24px] text-[16px] leading-6 flex items-center text-[#1F1D1D]">
                All Support Tickets
              </p>
              <div className="flex gap-4 lg:w-1/2">
                <input
                  className="w-full rounded-[4px] border-1 border-[#717171] py-2 px-2 bg-[#FAFCFD] font-[400] lg:text-[16px] text-[12px] leading-0 lg:leading-6 text-[#717171]"
                  placeholder="Search tickets..."
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />

                <div className="w-full">
                  <Dropdown
                    options={dropdown.categoryFilter.options}
                    placeholder={dropdown.categoryFilter.placeholder}
                    onSelect={handleCategoryFilter}
                    selected={categoryFilter}
                  />
                </div>
                <div className="w-full">
                  <Dropdown
                    options={dropdown.statusFilter.options}
                    placeholder={dropdown.statusFilter.placeholder}
                    onSelect={handleStatusFilter}
                    selected={statusFilter}
                  />
                </div>
              </div>
            </div>

            <div className="">
              <table className="min-w-full space-y-3">
                <thead className="bg-[#F4F7FA] text-[#717171] border-b border-[#717171] py-5 font-[Inter] font-medium text-[14px] leading-4">
                  <tr>
                    <th className="text-left px-4 py-3">Student ID</th>
                    <th className="text-left px-4 py-3">Student Name</th>
                    <th className="text-left px-4 py-3">Subject</th>
                    <th className="text-left px-4 py-3">Category</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {filteredTickets.map((ticket, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#717171] last:border-b-0 font-[Inter] hover:bg-[#F4F7FA] cursor-pointer"
                    >
                      <td className="px-4 py-3 font-medium text-[14px] leading-5 text-[#1F1D1D]">
                        {ticket.studentId}
                      </td>
                      <td className="px-4 py-3 font-[Inter] font-[400] text-[14px] leading-[18px] text-[#1F1D1D]">
                        {ticket.studentName}
                      </td>
                      <td className="px-4 py-3 font-medium text-[14px] leading-5 text-[#1F1D1D]">
                        {ticket.subject}
                      </td>
                      <td className="px-4 py-3 font-[Inter] font-[400] text-[14px] leading-[18px] text-[#1F1D1D]">
                        {ticket.category}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            statusStyles[ticket.status] || ""
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-[400] text-[14px] leading-4 text-[#1F1D1D]">
                        {ticket.date}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
              
              {filteredTickets.length === 0 && (
                <div className="text-center py-8 text-[#717171]">
                  <p>No tickets found matching your criteria.</p>
                </div>
              )}
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;