import React, { useState } from "react";
import { AnimatePresence } from "framer-motion";
import { Eye } from "lucide-react";
import RecheckRemark from "./RecheckRemark";

const datas = [
  {
    subject: "Operating System",
    originScore: "87/100",
    requestDate: "Feb 2, 2024",
    status: "Pending",
    updateMarks: null,
    remarks: false,
  },
  {
    subject: "Computer Networks",
    originScore: "87/100",
    requestDate: "Feb 2, 2024",
    status: "In Review",
    updateMarks: null,
    remarks: false,
  },
  {
    subject: "Web Development",
    originScore: "87/100",
    requestDate: "Feb 2, 2024",
    status: "Rejected",
    updateMarks: null,
    remarks: true,
    comment: {
      examinerComment: [
        "All short answer questions where marked according to the standardized rubric.",
        "Eassy section responses aligned with the marking scheme.",
        "No discrepancies were found in the original marking",
      ],
      conclusion: "Original assessment stands as accurate and fair",
    },
  },
  {
    subject: "Data Structures and Algorithms",
    originScore: "87/100",
    requestDate: "Feb 2, 2024",
    status: "Updated",
    updateMarks: "90/100",
    remarks: true,
    comment: {
      examinerComment: [
        "Question 3: +1 marks awarded for correct dataflow structure drawing",
        "Question 7: +1 marks for detailed explanation of reaction mechanism",
      ],
      totalAjustment: "+2 marks",
      conclusion:
        "Initial marking overlooked some technical details in structural diagrams and reaction pathways",
    },
  },
];

const statusStyles = {
  Pending: "bg-[#FFF4ED]/50 text-[#F97316]",
  "In Review": "bg-[#E9EEF4] text-[#0077FF]",
  Updated: "bg-[#FEF2F2]/50 text-[#EF4444]",
  Rejected: "bg-[#FEF2F2] text-[#EF4444]",
};

const RecheckRequestStatus = () => {
  const [selectedRemarkData, setSelectedRemarkData] = useState(null);
  return (
    <div className=" flex flex-col gap-10 min-h-screen font-[Inter] rounded-[12px] mt-5 mx-5">
      <div className="bg-[#FAFCFD] p-6 rounded-[12px] flex gap-6 flex-col ">
        <p className="font-[Inter] font-[600] text-[24px] leading-7 tracking-[0] flex items-center text-[#1F2937]">
          Recheck Request Status
        </p>
        <div className=" ">
          <table className="min-w-full space-y-3">
            <thead
              style={{ background: "var(--Sec-50, #F4F7FA)" }}
              className=" text-[#717171]  border-b border-[#717171] py-5 h-[53px] font-[Inter] font-medium text-[14px] leading-4 "
            >
              <tr>
                <th className="text-left px-4 py-3">Subject</th>
                <th className="text-left px-4 py-3">Original Score</th>
                <th className="text-left px-4 py-3">Request Date</th>
                <th className="text-left px-4 py-3">Status</th>
                <th className="text-left px-4 py-3">Updated Marks</th>
                <th className="text-left px-4 py-3">Remarks</th>
              </tr>
            </thead>
            <tbody className="text-gray-700">
              {datas.map((data, index) => (
                <tr
                  key={index}
                  className="border-b border-[#717171] last:border-b-0 font-[Inter]"
                >
                  <td className="px-4 py-3 font-medium text-[16px] leading-5 text-[#1F1D1D]">
                    {data.subject}
                  </td>
                  <td className="px-4 py-3 font-[Inter] font-[400] text-[14px] leading-[18px]  text-[#1F1D1D] ">
                    {data.originScore}
                  </td>
                  <td className="px-4 py-3 font-[Inter] font-[400] text-[14px] leading-[18px]  text-[#1F1D1D] ">
                    {data.requestDate}
                  </td>
                  <td className="px-4 py-3">
                    <span
                      className={`px-2 py-1 rounded-full text-xs font-medium ${
                        statusStyles[data.status]
                      }`}
                    >
                      {data.status}
                    </span>
                  </td>
                  <td className="px-4 py-3 font-[400] text-[14px] leading-4 text-[#1F1D1D]">
                    {data?.updateMarks || "-"}
                  </td>
                  <td className="px-4 py-3 font-[400] text-[14px] leading-4 text-[#1F1D1D]">
                    {data?.remarks ? (
                      <button
                        onClick={() => setSelectedRemarkData(data)}
                        className="flex gap-2 font-[Inter] font-medium text-[12px] leading-4 items-center text-[#0077FF]"
                      >
                        <Eye size={16} color="#0077FF" /> View{" "}
                      </button>
                    ) : (
                      "-"
                    )}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div className="bg-[#CFDCEB] h-[176px] gap-[12px] p-[12px] rounded-[8px]">
        <div className="h-[18px] font-[Inter] font-[500] text-[12px] leading-[18px] mb-[8px]">
          Exam Recheck Policy
        </div>

        <ul className="h-[122px] flex flex-col gap-[8px] list-disc pl-[16px] font-[Inter] font-[400] text-[12px] leading-[18px]">
          <li>
            Recheck requests must be submitted within 10 days after the exam
            results are published.
          </li>
          <li>
            A processing fee of ₹500 will be applied to your student account if
            the recheck request is approved.
          </li>
          <li>
            Supporting documents are optional but may help in the assessment of
            your request.
          </li>
          <li>
            Recheck results will be communicated within 5-7 working days after
            submission.
          </li>
          <li>The decision of the examination committee is final.</li>
        </ul>
      </div>
      <AnimatePresence>

      {selectedRemarkData && (
        <>
          <div className="absolute inset-0 bg-[#1F1D1D]/[0.24] z-10"></div>
          <RecheckRemark data={selectedRemarkData} setSelectedRemarkData={setSelectedRemarkData} />
        </>
      )}
      </AnimatePresence>
    </div>
  );
};

export default RecheckRequestStatus;
