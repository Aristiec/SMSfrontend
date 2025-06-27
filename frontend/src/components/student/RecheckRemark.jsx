import React from "react";
import {motion} from "framer-motion"
import { ArrowRight, X } from "lucide-react";
const statusStyles = {
  Pending: "bg-[#FFF4ED]/50 text-[#F97316]",
  "In Review": "bg-[#E9EEF4] text-[#0077FF]",
  Updated: "bg-[#ECFDF7]/50 text-[#10B981]",
  Rejected: "bg-[#FEF2F2] text-[#EF4444]",
};
const RecheckRemark = ({ data,setSelectedRemarkData }) => {
  
  return (
    <motion.div
    initial={{ opacity: 0,x:100 }}
    animate={{ opacity: 1,x:0 }}
    exit={{ opacity: 0,x:100 }}
    transition={{ duration: 0.3 }}

     className="w-[34%] bg-[#FAFCFD] fixed top-0 z-5000 right-0 h-screen flex flex-col gap-6">
      <header className="font-[Inter] text-[24px] font-[600] leading-6 flex items-center justify-between text-[#1F1D1D] border-b-1 border-[#717171] p-6">
        <p>Recheck Remarks</p>
        <button onClick={() => setSelectedRemarkData(null)} ><X size={20} /></button>
      </header>
      <div className="flex flex-col gap-6 p-6 justify-center ">
        <div className="font-[Inter] flex flex-col gap-1">
          <p className="text-[#717171] font-[400] leading-5 text-[14px] flex items-center">
            Subject
          </p>
          <p className="font-medium text-[14px] leading-5 text-[#1F1D1D]">
            {data.subject}
          </p>
        </div>
        <div className="font-[Inter] flex flex-col gap-1">
          <p className="text-[#717171] font-medium leading-5 text-[12px] flex items-center">
            status
          </p>
          <div>
            <span
              className={`px-2 py-1 rounded-full text-[12px] font-medium  ${
                statusStyles[data.status]
              }`}
            >
              {data.status}
            </span>
          </div>
        </div>

        <div className="flex flex-col gap-3 font-[Inter]">
          <p className="font-medium text-[#717171] text-[14px] leading-5">
            Examiner's Comments
          </p>
          <p className="font-[400] text-[#1F1D1D] text-[14px] leading-5">
            Upon careful review of the answer sheet:
          </p>
          <ol className="list-decimal list-inside ">
            {data?.comment?.examinerComment.map((comment, index) => (
              <li
                key={index}
                className="text-[#1F1D1D] text-[14px] leading-5 py-1 font-[400]"
              >
                {comment}
              </li>
            ))}
          </ol>
          {data.comment.totalAjustment && (
            <p className="font-[400] text-[#1F1D1D] text-[14px] leading-5">
              Total adjustment: {data.comment.totalAjustment}
            </p>
          )}

          <div className="flex ">
            {data?.status === "Updated" ? (
              <span className="font-medium text-[#1F1D1D] text-[14px] leading-5">
                Justification:
              </span>
            ) : (
              <span className="font-medium text-[#1F1D1D] text-[14px] leading-5">
                Conclusion:
              </span>
            )}
            <span className="font-[400] text-[#1F1D1D] text-[14px] leading-5">
              {data?.comment?.conclusion}
            </span>
          </div>
        </div>
      </div>
      {data?.status === "Updated" && (
        <div className="bg-[#ECFDF7] flex gap-2 px-6 py-4 rounded-[6px]">
          <span className="font-[700] text-[11.9px] text-[#10B981] leading-5 flex items-center">
            Score Updated:
          </span>
          <span className="font-[400] text-[11.9px] leading-5 flex items-center text-[#10B981]">
            {data.originScore}
            <ArrowRight size={11} />
            {data.updateMarks}
          </span>
        </div>
      )}
    </motion.div>
  );
};

export default RecheckRemark;
