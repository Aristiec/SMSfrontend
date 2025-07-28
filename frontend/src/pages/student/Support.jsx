import React, { useState, useEffect } from "react";
import { Paperclip, FileUp, File } from "lucide-react";
import Dropdown from "../../components/utils/Dropdown";
import { getSupportTicketsByStudentId } from "../../features/auth/authAPI";
import axios from "axios";

const tickets = [
  {
    subject: "Login Issues with Student Portal",
    category: "Technical",
    status: "Open",
    date: "7/12/2023",
  },
  {
    subject: "Request for Grade Review",
    category: "Academic",
    status: "In Progress",
    date: "4/10/2023",
  },
  {
    subject: "Bus Schedule Clarification",
    category: "Transport",
    status: "Resolved",
    date: "19/06/2023",
  },
  {
    subject: "Scholarship Application Status",
    category: "Finance",
    status: "Open",
    date: "12/04/2023",
  },
];

const statusStyles = {
  Open: "bg-orange-100 text-orange-600",
  "In Progress": "bg-blue-100 text-blue-600",
  Resolved: "bg-green-100 text-green-600",
};

const dropdown = {
  sendTo: {
    placeholder: "Select Category",
    options: ["Admin", "Transport", "Faculty"],
  },
  category: {
    placeholder: "Select Category",
    options: [
      "Academic",
      "Administrative",
      "Technical",
      "Transport",
      "Finance",
      "Others",
    ],
  },
  myTicketDropdown1: {
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
  myTicketDropdown2: {
    placeholder: "All Status",
    options: ["Open", "In Progress", "Resolved"],
  },
};

const Support = () => {
  const [sendTo, setSendTo] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [status, setStatus] = useState("");
  const [ticketCategory, setTicketCategory] = useState("");
  const [subject, setSubject] = useState("");
  const [selectedFile, setSelectedFile] = useState(null);
  const [tickets, setTickets] = useState([]);

  const studentId = localStorage.getItem("studentId");
  const handleClick = () => {
    setSendTo("");
    setCategory("");
    setMessage("");
    setSubject("");
    setSelectedFile(null);
  };
  const handleSelect = () => {
    console.log("Filter applied");
  };
  const handleSubmit = async () => {
    try {
      if (!sendTo || !category || !subject || !message) {
        alert("Please fill in all fields");
        return;
      }

      const formData = new FormData();
      formData.append("sendTo", sendTo.toUpperCase());
      formData.append("category", category.toUpperCase());
      formData.append("subject", subject);
      formData.append("description", message);

      if (selectedFile) {
        formData.append("file", selectedFile);
      }

      console.log("Submitting FormData:", formData);

      const response = await axios.post(
        `https://9fc889467b12.ngrok-free.app/api/v1/student-support/submit/${studentId}`,
        formData,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
          withCredentials: true,
        }
      );

      console.log("Ticket submitted:", response.data);
      alert("Support ticket submitted successfully!");

      handleClick();
      fetchTickets();
    } catch (error) {
      console.error("Failed to submit ticket:", error);
      alert("Failed to submit support ticket");
    }
  };

  const fetchTickets = async () => {
    try {
      const response = await getSupportTicketsByStudentId(studentId);
      console.log("Fetched tickets:", response.data);
      setTickets(response.data);
    } catch (error) {
      console.error("Error fetching tickets:", error);
    }
  };

  useEffect(() => {
    fetchTickets();
  }, []);
  return (
    <div className="mx-auto flex flex-col gap-8 bg-[#E9EEF4]  font-[Inter] min-h-screen">
      <div className="flex flex-col px-4 gap-6 mt-4">
        <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full  h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather]">
            Student Support
          </h1>
        </header>
        <section className="flex flex-col gap-6">
          <div
            style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
            className="bg-[#FAFCFD] rounded-[12px] flex flex-col gap-6 p-6"
          >
            <p className="font-medium text-[#1F1D1D] leading-6 tracking-[0] text-[20px]">
              Create Support Ticket
            </p>

            <div className="flex justify-between">
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="font-[Inter] font-medium text-[12px] leading-4 tracking-[0] text-[#1F1D1D] flex items-center">
                  Send To
                </label>
                <Dropdown
                  options={dropdown.sendTo.options}
                  placeholder={dropdown.sendTo.placeholder}
                  onSelect={(value) => {
                    console.log("Selected sendTo:", value);
                    setSendTo(value);
                  }}
                  selected={sendTo}
                />
              </div>
              <div className="flex flex-col gap-2 w-[45%]">
                <label className="font-[Inter] font-medium text-[12px] leading-4 tracking-[0] text-[#1F1D1D] flex items-center">
                  Category
                </label>
                <Dropdown
                  options={dropdown.category.options}
                  onSelect={(value) => {
                    console.log("Selected category:", value);
                    setCategory(value);
                  }}
                  selected={category}
                  placeholder={dropdown.category.placeholder}
                />
              </div>
            </div>

            <div className="flex flex-col gap-2 items-start justify-center">
              <p className="font-[Inter] font-medium text-[12px] leading-4 flex items-centertext-[#1F1D1D] px-1">
                Subject
              </p>
              <input
                type="text"
                value={subject}
                onChange={(e) => setSubject(e.target.value)}
                placeholder="Brief summary of your request"
                className="border-[0.4px] p-3 w-full rounded-[8px]"
              />
            </div>

            <div className="flex flex-col gap-2">
              <label className="font-[Inter] font-medium text-[12px] leading-4 flex items-center text-[#1F1D1D]">
                Description
              </label>
              <textarea
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                className="border-[0.4px] text-4 font-[Inter] font-[400] resize-none leading-6 border-[#717171] px-3 py-3 w-full rounded-[8px]  bg-[#F4F7FA] placeholder:text-[#717171]"
                rows={5}
                placeholder="Please provide details about your request"
              />
              <button className="flex gap-2 items-center relative w-auto">
                <input
                  type="file"
                  multiple
                  accept=".pdf"
                  onChange={(e) => {
                    const file = e.target.files[0];
                    setSelectedFile(file);
                    e.target.value = null;
                  }}
                  className={`absolute inset-0 w-[15%]  opacity-0 z-10
                           pointer-events-auto cursor-pointer
                        `}
                />
                <Paperclip size={18} />{" "}
                <p className="font-medium text-[14px]">Attach Files</p>
              </button>
              {selectedFile && (
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[8px] rounded-[8px] p-[8px] bg-[#CFDCEB]">
                    <File />
                    <p className="font-[400] text-[13.6px] leading-[24px] tracking-[0] flex items-center text-[#04203E]">
                      {selectedFile?.name}
                    </p>
                  </div>
                </div>
              )}
            </div>

            <div className="flex justify-end gap-3 rounded-[8px]">
              <button
                onClick={handleSubmit}
                className="bg-[#04203E] flex gap-3 rounded-[8px] px-3 py-2 cursor-pointer"
              >
                <FileUp color="#FAFCFD" />
                <p className="text-[#FAFCFD] fony-[Inter] font-[400] text-[14px] leading-6 text-center">
                  Submit Ticket
                </p>
              </button>
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
            className="font-[Inter] bg-[#FAFCFD] rounded-[12px] flex flex-col gap-6 p-6 "
          >
            <div className="flex lg:justify-between gap-2">
              <p className="lg:w-1/2 font-medium lg:text-[24px] text-[12px]  leading-6 flex items-center text-[#1F1D1D] ">
                My Tickets
              </p>
              <div className="flex gap-4 lg:w-1/2 ">
                <input
                  className="w-full  rounded-[4px] border-1 border-[#717171] py-2 px-2 bg-[#FAFCFD] font-[400] lg:text-[16px] text-[12px] leading-0 lg:leading-6 text-[#717171]"
                  placeholder="Search tickets..."
                />

                <div className="w-full">
                  <Dropdown
                    options={dropdown.myTicketDropdown1.options}
                    placeholder={dropdown.myTicketDropdown1.placeholder}
                    onSelect={handleSelect}
                  />
                </div>
                <div className="w-full">
                  <Dropdown
                    options={dropdown.myTicketDropdown2.options}
                    placeholder={dropdown.myTicketDropdown2.placeholder}
                    onSelect={handleSelect}
                  />
                </div>
              </div>
            </div>

            <div className=" ">
              <table className="min-w-full space-y-3">
                <thead className="bg-[#F4F7FA] text-[#717171]  border-b border-[#717171] py-5 font-[Inter] font-medium text-[14px] leading-4 ">
                  <tr>
                    <th className="text-left px-4 py-3">Subject</th>
                    <th className="text-left px-4 py-3">Category</th>
                    <th className="text-left px-4 py-3">Status</th>
                    <th className="text-left px-4 py-3">Date</th>
                  </tr>
                </thead>
                <tbody className="text-gray-700">
                  {tickets.map((ticket, index) => (
                    <tr
                      key={index}
                      className="border-b border-[#717171] last:border-b-0 font-[Inter]"
                    >
                      <td className="px-4 py-3 font-medium text-[16px] leading-5 text-[#1F1D1D]">
                        {ticket.subject || "-"}{" "}
                      </td>
                      <td className="px-4 py-3 font-[Inter] font-[400] text-[14px] leading-[18px]  text-[#1F1D1D] ">
                        {ticket.category || "-"}
                      </td>
                      <td className="px-4 py-3">
                        <span
                          className={`px-2 py-1 rounded-full text-xs font-medium ${
                            statusStyles[ticket.status?.toUpperCase()] || ""
                          }`}
                        >
                          {ticket.status}
                        </span>
                      </td>
                      <td className="px-4 py-3 font-[400] text-[14px] leading-4 text-[#1F1D1D]">
                        {new Date(ticket.submittedAt).toLocaleDateString()}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Support;
