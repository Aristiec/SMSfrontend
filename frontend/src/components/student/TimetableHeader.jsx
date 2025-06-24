import React from "react";

const TimetableHeader = () => {
  return (
    <div className="flex justify-center px-4 lg:px-4 mt-4 ">
      <header className="bg-[#04203e] flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg w-full max-w-7xl px-6 py-4 text-[#FAFCFD] font-[Inter]">
        <h1 className="text-[20px] sm:text-[24px] font-bold font-[Merriweather] mb-2 sm:mb-0">
          Schedule
        </h1>
      </header>
    </div>
  );
};

export default TimetableHeader;
