import { Plus } from "lucide-react";
import { useState } from "react";
import cardIcon1 from "../../assets/File_in_FD.png";
import cardIcon2 from "../../assets/Timetable_in_FD.png";
import cardIcon3 from "../../assets/Profile_in_FD.png";
import cardIcon4 from "../../assets/Score_in_FD.png";
import Addexam from "./Addexam";

function OfflineExam() {
  const [isFormOpen, setIsFormOpen] = useState(false);

  const handleOpenForm = () => {
    setIsFormOpen(true);
  };

  const handleCloseForm = () => {
    setIsFormOpen(false);
  };

  return (
    <section className="mx-auto absolute top-[100px] bg-[#E9EEF4] flex flex-col gap-8 mt-138px font-[Inter] px-4">
      

      {/* Main Content Container */}
      <div
        className="w-[1072px] h-[104px]  rounded-[12px] p-[16px] gap-[16px] bg-[#FAFCFD] flex justify-between items-center"
        style={{
          opacity: 1,
          border: "1px solid #CCCCCC",
          boxShadow: "0px 4px 8px 0px #0000001F"
        }}
      >
        <div className="w-[541px] h-[72px] flex flex-col gap-[14px] opacity-100 p-[8px]">
          <h1 className="font-[Inter] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#000000]">
            Offline Exams
          </h1>
          <p className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Manage classroom examinations and schedules
          </p>
        </div>
        
        <button 
          onClick={handleOpenForm}
          className="w-[210px] h-[43px] rounded-[8px] bg-[#04203E] flex items-center justify-center gap-[12px] px-[16px] py-[12px] opacity-100 hover:bg-[#1F1D1D] transition-all duration-300 ease-in-out"
        >
          <Plus className="w-4 h-4 text-[#FAFCFD]" />
          <span className="text-[#FAFCFD] font-[Inter] font-medium text-[14px] leading-6 tracking-normal">
            Schedule New Exam
          </span>
        </button>
      </div>

      {/* Stats Cards Container */}
      <div className="flex gap-9 justify-start">
        {/* Total Exams Card */}
        <div 
          className="w-[240px] h-[163px] rounded-[12px] p-[16px] gap-[24px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center ">
           
            <span className="font-[Inter] font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Total exams this month
            </span>
             <img src={cardIcon1} alt="Total Exams" className="w-5 h-5 mb-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            8 completed, 4 upcoming
          </div>
        </div>

        {/* Scheduled Today Card */}
        <div 
          className="w-[240px] h-[163px] rounded-[12px] p-[16px] gap-[28px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center ">
            
            <span className="font-[Inter] mt-1 font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Scheduled Today
              
            </span>
            <img src={cardIcon2} alt="Scheduled Today" className="w-5 h-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Morning & afternoon sessions
          </div>
        </div>

        {/* Students Enrolled Card */}
        <div 
          className="w-[240px] h-[163px] rounded-[12px] p-[16px] gap-[34px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center ">
            
            <span className="font-[Inter] font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Students Enrolled
            </span>
            <img src={cardIcon3} alt="Students Enrolled" className="w-5 h-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Across all exam sessions
          </div>
        </div>

        {/* Average Score Card */}
        <div 
          className="w-[240px] h-[163px] rounded-[12px] p-[16px] gap-[34px] bg-[#FFFFFF] flex flex-col"
          style={{
            opacity: 1,
            boxShadow: "0px 4px 8px 0px #00000033"
          }}
        >
          <div className="flex items-center gap-4">
            
            <span className="font-[Inter] font-normal text-[20px] leading-[100%] tracking-[0%] text-[#717171]">
              Average Score
            </span>
            <img src={cardIcon4} alt="Average Score" className="w-5 h-5 ml-5" />
          </div>
          <div className="font-[Inter] font-bold text-[20px] leading-[100%] tracking-[0%] text-[#1F1D1D]">
            12
          </div>
          <div className="font-[Inter] font-normal text-[16px] leading-[100%] tracking-[0%] text-[#717171]">
            Last 5 completed exams
          </div>
        </div>
      </div>

      {/* Add Exam Form Modal - Fixed overlay structure */}
      {isFormOpen && (
        <div className="fixed inset-0 z-50 overflow-y-auto">
          <div className="fixed inset-0 bg-[#1F1D1D]/[0.24] z-40"></div>
          <div className="relative z-50 ml-[450px] mt-[100px]">
            <Addexam isOpen={isFormOpen} onClose={handleCloseForm} />
          </div>
        </div>
      )}
    </section>
  );
}

export default OfflineExam;