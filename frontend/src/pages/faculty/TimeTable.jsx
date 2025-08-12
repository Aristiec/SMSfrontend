import { useState } from "react";
import TimetableHeader from "../../components/faculty/TimetableHeader";
import Dropdown from "../../components/utils/Dropdown";


const Timetable = () => {
  const [selectedFaculty, setSelectedFaculty] = useState("");
  const facultyOptions = ["Prof A", "Prof B", "Prof C"];
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];
  const timeSlots = [
    "9:00 - 9:45 AM",
    "9:45 - 10:30 AM",
    "10:30 - 10:45 AM",
    "10:45 - 11:30 AM",
    "11:30 - 12:15 AM",
    "12:15 - 1:15 AM",
    "1:15 - 2:00 AM",
    "2:00 - 2:45 AM",
  ];

  return (
    <div className="min-h-screen w-full bg-[#E9EEF4] text-[#1F1D1D]  sm:mx-[20px] md:mx-[20px] ">
       <div className="flex justify-center px-4 lg:px-4 mt-4 sticky top-20 z-100 sticky">
      <header className="bg-[#04203e] flex flex-col sm:flex-row justify-between items-start sm:items-center rounded-lg w-full max-w-7xl px-6 py-4 text-[#FAFCFD] font-[Inter]">
        <h1 className="text-[20px] sm:text-[24px] font-bold font-[Merriweather] mb-2 sm:mb-0">
          Schedule
        </h1>
      </header> 
    </div>

      <div className="flex justify-center p-4 lg:p-4">
        <div className="w-full  bg-[#FAFCFD] rounded-lg shadow-md border border-white p-4 md:p-6 overflow-auto">
         <div className="bg-[#F9FAFB] px-6 py-4 flex items-center justify-between">
  {/* Heading */}
  <h1 className="text-[20px] font-semibold leading-[28px] text-[#1F1D1D] font-[Inter]">
    Weekly Class Timetable
  </h1>

  <div className="flex gap-6 items-center">
    {/* Search Input */}
    <input
      type="text"
      placeholder="Search by name"
      className="px-6 py-2 rounded-md border border-[#CCCCCC] text-[#717171] text-[14px] leading-[18px] font-[Inter] focus:outline-none"
    />

    {/* Dropdown */}
   
    <Dropdown
  options={facultyOptions}
  onSelect={(option) => setSelectedFaculty(option)}
  placeholder="Search by name"
  selected={selectedFaculty}
/>
  </div>
</div>
          <table className="min-w-full border-collapse">
            <thead>
              <tr>
                <th className="text-[16px] font-normal text-center border border-[#04203E] w-32 h-16"></th>
                {timeSlots.map((time, index) => {
                  const [start, end] = time.split(" - ");
                  return (
                    <th
                      key={index}
                      className="text-[14px] md:text-[16px] font-normal text-center border border-[#04203E] leading-tight w-28 h-16"
                    >
                      {start} -<br />
                      {end}
                    </th>
                  );
                })}
              </tr>
            </thead>
            <tbody>
              {days.map((day, dayIndex) => {
  return (
    <tr key={dayIndex}>
      <td className="font-bold text-center text-[16px] border border-[#04203E] w-32 h-20">
        {day}
      </td>
      {timeSlots.map((_, timeIndex) => (
        <td
          key={timeIndex}
          className="border border-[#04203E] w-28 h-20"
        >
          <div className="flex flex-col items-center justify-center h-full">
            <div className="text-[14px] md:text-[16px] font-normal">
              Subject
            </div>
            <div className="text-[12px] text-[#04203E]">
              (Prof name)
            </div>
          </div>
        </td>
      ))}
    </tr>
  );
})}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default Timetable;
