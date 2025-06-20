// import React from "react";
// import { addWeeks, format } from "date-fns";

// const TimetableHeader = ({ currentWeek }) => {
//   return (
//     <div className="flex justify-center px-4 lg:px-4 mt-4 ">
//       <header className="bg-[#04203e] flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg w-full max-w-7xl px-6 py-4 text-[#FAFCFD] font-[Inter]">
//         <h1 className="text-[20px] sm:text-[24px] font-bold font-[Merriweather] mb-2 sm:mb-0">
//           Class Timetable
//         </h1>
//         <p className="text-[16px] sm:text-[18px] font-[Inter]">
//           {format(addWeeks(new Date(), currentWeek), "MMMM yyyy")}
//         </p>
//       </header>
//     </div>
//   );
// };

// export default TimetableHeader;

import React from "react";
import { addWeeks, format } from "date-fns";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const TimetableHeader = ({ currentWeek }) => {
  const date = addWeeks(new Date(), currentWeek);

  return (
    <div className="flex justify-center px-4 lg:px-4 mt-4">
      <header className="bg-[#04203e] flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg w-full max-w-7xl px-6 py-4 text-[#FAFCFD] font-[Inter]">
        <div className="flex w-full flex-col sm:flex-row justify-between items-center gap-4 flex-wrap">

          {/* Left: Title */}
          <div className="text-[20px] sm:text-[24px] font-bold font-[Montserrat] mb-2 sm:mb-0 text-center sm:text-left">
            Class Timetable
          </div>

          {/* Middle: Date  */}
          <div
            className="flex items-center justify-center"
            style={{
              width: "108px",
              height: "44px",
              padding: "10px",
            }}
          >
            <span
              className="text-[18px] font-[700] text-white"
              style={{
                fontFamily: "Montserrat",
              }}
            >
              {format(date, "dd- MMM")}
            </span>
          </div>

          {/* Right side: Month and Icons */}
          <div
            className="flex items-center justify-between gap-4 flex-shrink-0"
            style={{
              height: "44px",
            }}
          >
            <span
              style={{
                fontFamily: "Montserrat",
                fontWeight: 700,
                fontSize: "16px",
                lineHeight: "22px",
                letterSpacing: "0%",
                color: "#8A8D8E",
              }}
            >
              {format(date, "MMMM yyyy")}
            </span>

            {/* Icons */}
            <div className="flex items-center gap-4 ml-2">
              <div
                className="flex items-center justify-center rounded"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <FaChevronLeft className="text-[#04203E]"  />
              </div>
              <div
                className="flex items-center justify-center rounded"
                style={{
                  width: "32px",
                  height: "32px",
                  backgroundColor: "#FFFFFF",
                }}
              >
                <FaChevronRight className="text-[#04203E]"  />
              </div>
            </div>
          </div>

        </div>
      </header>
    </div>
  );
};

export default TimetableHeader;



