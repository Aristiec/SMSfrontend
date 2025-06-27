import React, { useState } from "react";
import { Paperclip, FileUp } from "lucide-react";

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

const Support = () => {
  const [sendTo, setSendTo] = useState("");
  const [category, setCategory] = useState("");
  const [message, setMessage] = useState("");
  const [status,setStatus] = useState("");
  const [ticketCategory, setTicketCategory] = useState("");

  return (
    <div className="bg-[#E9EEF4] p-4 font-[Inter] min-h-screen space-y-6">
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
            <div className="flex flex-col gap-2 w-[40%]">
              <label className="font-[Inter] font-medium text-[12px] leading-4 tracking-[0] text-[#1F1D1D] flex items-center">
                Send To
              </label>
              <select
                value={sendTo}
                onChange={(e) => setSendTo(e.target.value)}
                className="rounded-[4px] border-1 px-2 py-3 border-[#717171]"
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="admin">Admin</option>
                <option value="faculty">Faculty</option>
                <option value="transport">Transport</option>
              </select>
            </div>
            <div className="flex flex-col gap-2 w-[40%]">
              <label className="font-[Inter] font-medium text-[12px] leading-4 tracking-[0] text-[#1F1D1D] flex items-center">
                Category
              </label>
              <select
                value={category}
                onChange={(e) => setCategory(e.target.value)}
                className="rounded-[4px] border-1 px-2 py-3 border-[#717171]"
              >
                <option value="" disabled hidden>
                  Select Category
                </option>
                <option value="academic">Academic</option>
                <option value="administrative">Administrative</option>
                <option value="finance">Finance</option>
                <option value="technical">Technical</option>
                <option value="transport">Transport</option>
                <option value="other">Other</option>
              </select>
            </div>
          </div>

          <div className="flex flex-col gap-2 items-start justify-center">
            <p className="font-[Inter] font-medium text-[12px] leading-4 flex items-centertext-[#1F1D1D] px-1">
              Subject
            </p>
            <input
              type="text"
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
            <div className="flex gap-2 items-center">
              <Paperclip size={18} />{" "}
              <p className="font-medium text-[14px">Attach Files</p>
            </div>
          </div>

          <div className="flex justify-end ">
            <button className="bg-[#04203E] flex gap-3 rounded-[8px] px-2 py-3 cursor-pointer">
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
          <div className="flex">
            <p className="w-1/2 font-medium text-[24px] leading-6 flex items-center text-[#1F1D1D] ">
              My Tickets
            </p>
            <div className="flex gap-4">
              <input
                className="rounded-[4px] border-1 border-[#717171] py-2 px-3 bg-[#FAFCFD] font-[400] text-[16px] leading-6 text-[#717171]"
                placeholder="Search tickets..."
              />
              <div>
                <select
                  value={ticketCategory}
                  onChange={(e) => setTicketCategory(e.target.value)}
                  className="rounded-[4px] border-1 px-3 py-3 border-[#717171] text-[16px] font-[400] leading-6 flex justify-between items-center "
                >
                  <option value="" disabled hidden>
                    All Categories
                  </option>
                  <option value="academic">Academic</option>
                  <option value="administrative">Administrative</option>
                  <option value="finance">Finance</option>
                  <option value="technical">Technical</option>
                  <option value="transport">Transport</option>
                  <option value="other">Other</option>
                </select>
              </div>
              <div>
                <select
                  value={status}
                  onChange={(e) => setStatus(e.target.value)}
                  className="rounded-[4px] border-1 px-3 py-3 border-[#717171] text-[16px] font-[400] leading-6 flex justify-between items-center "
                >
                  <option value="" disabled hidden>
                    All Categories
                  </option>
                  <option value="open">Open</option>
                  <option value="inProgress">In Progress</option>
                  <option value="resolved">Resolved</option>
                </select>
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
                  <tr key={index} className="border-b border-[#717171] last:border-b-0 font-[Inter]">
                    <td className="px-4 py-3 font-medium text-[16px] leading-5 text-[#1F1D1D]">{ticket.subject}</td>
                    <td className="px-4 py-3 font-[Inter] font-[400] text-[14px] leading-[18px]  text-[#1F1D1D] ">{ticket.category}</td>
                    <td className="px-4 py-3">
                      <span
                        className={`px-2 py-1 rounded-full text-xs font-medium ${
                          statusStyles[ticket.status]
                        }`}
                      >
                        {ticket.status}
                      </span>
                    </td>
                    <td className="px-4 py-3 font-[400] text-[14px] leading-4 text-[#1F1D1D]">{ticket.date}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Support;
