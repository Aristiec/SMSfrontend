import React, { useRef, useState } from "react";
import {
  ArrowLeft,
  Pencil,
  Clock,
  CircleCheckBig,
  Timer,
  CircleAlert,
  ChevronDown,
  Search,
  File,
  Download,
  Eye,
  ChevronUp,
} from "lucide-react";
import { useLocation, useNavigate } from "react-router-dom";
import { useReducedMotion } from "framer-motion";

const submissions = [
  {
    name: "Kumar Kartikey",
    id: "1RUB203020",
    status: "Pending",
    date: "-",
    time: "-",
    file: "-",
    size: "-",
    grade: "Not Graded",
  },
  {
    name: "Kumar Kartikey",
    id: "1RUB203020",
    status: "Overdue",
    date: "Jul 27, 2024",
    time: "09:15 PM",
    file: "macbeth_analysis.pdf",
    size: "2.4 mb",
    grade: "Not Graded",
  },
  {
    name: "Asha Singh",
    id: "1RUB203020",
    status: "Submitted",
    date: "Jul 22, 2024",
    time: "09:15 PM",
    file: "macbeth_analysis.pdf",
    size: "2.4 mb",
    grade: "Not Graded",
  },
  {
    name: "Kumar Kartikey",
    id: "1RUB203020",
    status: "Submitted",
    date: "Jul 22, 2024",
    time: "09:15 PM",
    file: "macbeth_analysis.pdf",
    size: "2.4 mb",
    grade: "Not Graded",
  },
  {
    name: "Kumar Kartikey",
    id: "1RUB203020",
    status: "Submitted",
    date: "Jul 22, 2024",
    time: "09:15 PM",
    file: "macbeth_analysis.pdf",
    size: "2.4 mb",
    grade: "Not Graded",
  },
  {
    name: "Kumar Kartikey",
    id: "1RUB203020",
    status: "Submitted",
    date: "Jul 22, 2024",
    time: "09:15 PM",
    file: "macbeth_analysis.pdf",
    size: "2.4 mb",
    grade: "Not Graded",
  },
];

const AssignmentDetail = () => {
  const tabs = ["All", "Submitted", "Pending", "Overdue"];
  const contentRef = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const getStatusBadge = (status) => {
    if (status === "Submitted") return "bg-[#ECFDF7] text-[#10B981]";
    if (status === "Pending") return "bg-[#FFF4ED] text-[#F97316]";
    if (status === "Overdue") return "bg-[#FEF2F2] text-[#EF4444]";
  };

  const filterSubmissions = (status) => {
    let result = submissions;

    if (status !== "All") {
      result = result.filter((submission) => submission.status === status);
    }

    if (searchQuery.trim() !== "") {
      const query = searchQuery.toLowerCase();
      result = result.filter(
        (submission) =>
          submission.name.toLowerCase().includes(query) ||
          submission.id.toLowerCase().includes(query)
      );
    }

    return result;
  };

  const [activeTab, setactiveTab] = useState("All");
  const [searchQuery, setSearchQuery] = useState("");

  const { state } = useLocation();
  const { assignment } = state || {};
  console.log("Assignment", assignment);
  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen px-4  font-[Inter]">
      <div className="flex flex-col gap-1 mt-4">
        <header className=" top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full  h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
          <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
            Assignments
          </h1>
          <button
            onClick={() => navigate("/faculty/assignments/create")}
            className="bg-[#FAFCFD] py-2 px-3 gap-2 rounded-[8px] font-[Inter] font-[400] leading-6 tracking-normal flex items-center justify-center text-[#1F1D1D]"
          >
            Create New
          </button>
        </header>
      </div>
      <div className="flex flex-col p-6 gap-6 rounded-[12px]  bg-[#FAFCFD]">
        <button
          onClick={() => navigate(-1)}
          className="flex gap-2 items-center"
        >
          <ArrowLeft size={16} strokeWidth={2} color="#04203E" />
          <p className="font-[400] text-[14px] leading-6 tracking-normal items-center justify-center text-[#04203E]">
            Back
          </p>
        </button>
        <div
          style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
          className="bg-[#FAFCFD] flex flex-col rounded-[12px] p-6 gap-6"
        >
          <div className="flex w-full gap-6">
            <div className="flex flex-col gap-3 w-full">
              <div className="flex w-full justify-between">
                <div className="flex gap-3 flex-col">
                  <div className="flex flex-col gap-1">
                    <p className="flex font-medium text-[16px] leading-6 tracking-normal items-center text-[#1F1D1D]">
                      {assignment?.title}
                    </p>
                    <p className="flex font-[400] text-[16px] leading-6 tracking-normal items-center text-[#1F1D1D]">
                      {assignment?.subject}
                    </p>
                  </div>
                  <p className="font-[400] text-[12px] leading-4 tracking-normal flex items-center text-[#1F1D1D]">
                    {assignment?.description}
                  </p>
                </div>
                <div className="flex items-start justify-center">
                  <button
                    onClick={() => navigate("/faculty/assignments/create")}
                    className="flex gap-2 rounded-[8px] py-2 px-3 border border-[#04203E] items-center justify-center"
                  >
                    <Pencil size={13} color="#04203E" />
                    <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center justify-center text-[#04203E]">
                      Edit
                    </p>
                  </button>
                </div>
              </div>
              <div className="flex gap-6 items-center">
                <div className="flex gap-1 items-center">
                  <div className="flex gap-1 items-center">
                    <Clock size={13} color="#1F1D1D" />
                    <p className="text-[#1F1D1D] font-[400] text-[12px] leading-5 tracking-normal flex items-center">
                      Due:
                    </p>
                  </div>
                  <p className="font-[400] text-[12px] leading-5 tracking-normal items-center flex text-[#1F1D1D] ">
                    {assignment?.dueDate},{assignment?.dueTime}
                  </p>
                </div>
                <div className="flex gap-1">
                  <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#1F1D1D]">
                    Max Marks:
                  </p>
                  <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#1F1D1D]">
                    {assignment?.maxMarks}
                  </p>
                </div>
              </div>
              <div className="flex gap-10">
                {Object.entries(assignment?.status).map((status, index) => (
                  <div key={index} className="flex gap-2">
                    {console.log("status:", status)}
                    <div
                      className={`size-8 rounded-full  flex items-center justify-center ${
                        status[0] === "submitted"
                          ? "bg-[#ECFDF7]"
                          : status[0] === "pending"
                          ? "bg-[#FFF4ED]"
                          : status[0] === "overdue"
                          ? "bg-[#FFF4ED]"
                          : "bg-[#E9EEF4]"
                      }`}
                    >
                      {status[0] === "submitted" ? (
                        <CircleCheckBig size={16} color="#10B981" />
                      ) : status[0] === "pending" ? (
                        <Timer size={16} color="#F97316" />
                      ) : status[0] === "overdue" ? (
                        <CircleAlert size={16} color="#EF4444" />
                      ) : (
                        <Clock size={16} color="#0077FF" />
                      )}
                    </div>
                    <div className="flex flex-col gap-1">
                      <p className="Font-[400] text-[12px] leading-4 tracking-normal items-center  text-[#717171]">
                        {status[0].charAt(0).toUpperCase() + status[0].slice(1)}
                      </p>
                      <p className="font-[500] text-[14px] leading-5 tracking-normal items-center  text-[#1F1D1D]">
                        {status[1]}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
              <div
                ref={contentRef}
                style={{
                  maxHeight: isOpen
                    ? `${contentRef.current.scrollHeight}px`
                    : "0px",
                }}
                className="flex flex-col gap-3 transition-all duration-500 ease-in-out overflow-hidden"
              >
                <p className="font-[700] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                  Assignment Instruction:
                </p>
                <div className="flex flex-col gap-[2px]">
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Read the full play with focus on key scenes (witches,
                    soliloquies, Lady Macbeth’s arc, final act). Choose focus
                    area:
                  </p>
                  <ul className="font-[400] text-[14px] leading-6 tracking-normal list-disc list-inside text-[#1F1D1D]">
                    <li>Theme (e.g., ambition, guilt, fate vs free will)</li>
                    <li>Character (e.g., Macbeth, Lady Macbeth)</li>
                    <li>
                      Literary device (e.g., symbolism, motifs, foreshadowing)
                    </li>
                  </ul>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Review at least 3 academic sources (books, journals,
                    essays).
                  </p>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Summarize and analyze the views of each critic.
                  </p>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Add your own interpretation and compare it with critics’
                    views.
                  </p>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Discuss modern relevance of the play or chosen
                    theme/character.
                  </p>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Write 1000–1500 words, properly structured with intro, body,
                    and conclusion.
                  </p>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Use quotes from the play to support analysis.
                  </p>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Follow formatting rules: Times New Roman, 12pt, 1.5 spacing,
                    submit as PDF or Word.
                  </p>
                  <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Include references (MLA/APA/Chicago style).
                  </p>
                </div>
                <div className="flex flex-col py-3 gap-3">
                  <p className="font-[700] text-[14px] leading-6 tracking-normal flex items-center text-[#1F1D1D]">
                    Recourses
                  </p>
                  <div className="flex flex-col gap-2">
                    <div className="flex items-center justify-between bg-[#CFDCEB] p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <File className="w-4 h-4 text-[#04203E]" />
                        <p className="text-sm text-[#04203E] font-[Inter] m-0">
                          Assignment Guidelines.pdf
                        </p>
                      </div>
                    </div>
                    <div className="flex items-center justify-between bg-[#CFDCEB] p-3 rounded-lg">
                      <div className="flex items-center gap-2">
                        <File className="w-4 h-4 text-[#04203E]" />
                        <p className="text-sm text-[#04203E] font-[Inter] m-0">
                          Assignment Guidelines.pdf
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="flex gap-2 rounded-[8px] items-center "
              >
                {isOpen ? (
                  <ChevronUp size={16} color="#04203E" />
                ) : (
                  <ChevronDown size={16} color="#04203E" />
                )}
                <p className="font-[400] text-[14px] leading-6 tracking-normal flex items-center justify-between text-[#04203E]">
                  {isOpen ? "View less" : "View more"}
                </p>
              </button>
            </div>
          </div>
        </div>

        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-2">
            <div className="flex justify-between items-center rounded-[8px] bg-[#FAFCFD] py-2 ">
              <p className="font-medium text-[16px] leading-5 tracking-normal text-[#1F1D1D] ">
                Student Submissions
              </p>
              <div className="flex gap-4">
                {tabs.map((tab, index) => (
                  <div key={index} className="flex gap-3 rounded-lg   ">
                    <button
                      onClick={() => setactiveTab(tab)}
                      className={`flex gap-3 rounded-[8px]  py-2 px-3 gap border border-[#1F1D1D] font-[400] text-[14px] leading-6 tracking-normal items-center justify-center ${
                        activeTab === tab
                          ? "text-[#FAFCFD] bg-[#04203E]"
                          : "text-[#04203E]"
                      }`}
                    >
                      {tab}
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full rounded-[8px] py-3  bg-[#FAFCFD]">
            <div className="flex border py-2 px-3 gap-2 border-[#717171] bg-[#FAFCFD] w-full rounded-[8px] items-center">
              <Search size={16} color="#717171" />
              <input
                placeholder="Search Student name or ID..."
                className="font-[400] text-[14px] leading-5 tracking-normal flex items-center justify-between text-[#717171] outline-none"
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
            </div>
          </div>
          <div className="flex flex-col gap-3 bg-[#FAFCFD]">
            <table className="w-full">
              <thead>
                <tr className="border-b border-[#CCCCCC]">
                  <th
                    colSpan={2}
                    className="text-left font-[Inter] font-medium text-[14px] leading-5 tracking-normal text-[#717171]"
                  >
                    Student
                  </th>
                  <th className="text-left font-[Inter] font-medium text-[14px] leading-5 tracking-normal text-[#717171]">
                    Status
                  </th>
                  <th className="text-left font-[Inter] font-medium text-[14px] leading-5 tracking-normal text-[#717171]">
                    Submission Date
                  </th>
                  <th
                    colSpan={2}
                    className="text-left font-[Inter] font-medium text-[14px] leading-5 tracking-normal text-[#717171]"
                  >
                    File
                  </th>
                  <th className="text-left font-[Inter] font-medium text-[14px] leading-5 tracking-normal text-[#717171]">
                    Grade
                  </th>
                  <th className="text-left font-[Inter] font-medium text-[14px] leading-5 tracking-normal text-[#717171]">
                    Action
                  </th>
                </tr>
              </thead>
              <tbody>
                {filterSubmissions(activeTab).map((submission, index) => (
                  <tr
                    key={index}
                    className="border-b-1 border-[#CCCCCC] py-5 px-5 "
                  >
                    <td className="px-5 py-5" colSpan={2}>
                      <div className="flex items-center gap-2">
                        <div className="flex flex-col  bg-[#CCCCCC] gap-[10px] p-[10px] rounded-full font-medium text-[14px] leading-[100%] tracking-normal justify-center text-[#FAFCFD] size-7">
                          <p>K</p>
                        </div>
                        <div className="flex flex-col gap-[2px]">
                          <p className="font-[Inter] font-[500] text-[14px] leading-5 tracking-normal text-[#1F1D1D] flex items-center ">
                            {submission?.name}
                          </p>
                          <p className="font-[Inter] font-[400] text-[12px] leading-4 tracking-normal text-[#1F1D1D]">
                            {submission?.id}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td className="rounded-full">
                      <div className="flex items-center rounded-full">
                        <div
                          className={`  rounded-full py-1 px-3 gap-2 ${getStatusBadge(
                            submission?.status
                          )} `}
                        >
                          <p className=" font-[Inter] font-[500] text-[12px] leading-4 tracking-normal flex items-center ">
                            {submission?.status}
                          </p>
                        </div>
                      </div>
                    </td>
                    <td>
                      {submission?.date !== "-" ? (
                        <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#717171]">
                          {submission?.date},{submission?.time}
                        </p>
                      ) : (
                        <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#717171]">
                          {submission?.date}
                        </p>
                      )}
                    </td>
                    <td colSpan={2}>
                      {submission?.file !== "-" ? (
                        <div className="flex gap-1 items-center">
                          <File size={13} color="#717171" />
                          <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#717171]">
                            {submission?.file}
                          </p>
                        </div>
                      ) : (
                        <p className="font-[400] text-[12px] leading-5 tracking-normal flex items-center text-[#717171]">
                          {submission?.file}
                        </p>
                      )}
                    </td>
                    <td>
                      <p className="text-[#717171] font-[400] text-[12px] leading-4 tracking-normal flex items-center">
                        {submission?.grade}
                      </p>
                    </td>
                    <td>
                      <div className="flex gap-2">
                        <Download size={20} color="#717171" />
                        <Eye
                          onClick={() =>
                            navigate("/faculty/assignments/review", {
                              state: { 
                                submission: submission,
                                assignment: assignment 
                              }
                            })
                          }
                          size={20}
                          color="#04203E"
                          className="cursor-pointer"
                        />
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AssignmentDetail;
