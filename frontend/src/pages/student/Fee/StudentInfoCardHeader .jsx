import React from 'react';

const StudentInfoCardHeader = () => {
  return (
    <div className="w-full rounded-[16px] border border-[#CCCCCC] bg-[#F9FBFF] p-4 flex items-center gap-[30px]">
      <div className="w-[90px] h-[90px] bg-[#D9D9D9] rounded-full"></div>
      <div className="flex flex-col gap-3 w-full">
        <div className="flex justify-between w-full">
          <div className="text-[16px] font-bold text-[#000000] opacity-90 font-[Inter] leading-[100%] tracking-[0%]">
            Student Name
          </div>
          <div className="text-[14px] font-medium text-[#666666] cursor-pointer">
            Show details
          </div>
        </div>
        <div className="flex flex-col gap-3">
          <div className="font-[Inter] font-midium text-[14px] leading-[100%] tracking-[0%] align-middle text-[#000000]">
            Semester 6, Academic Year 2024-2025
          </div>
          <div className="font-[Inter] font-midium text-[14px] leading-[100%] tracking-[0%] align-middle text-[#000000]">
            kkartikey80@gmail.com | +91 7077388624
          </div>
        </div>
      </div>
    </div>
  );
};

export default StudentInfoCardHeader;
