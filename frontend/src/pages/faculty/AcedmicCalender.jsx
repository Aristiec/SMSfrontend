import React from 'react'
import Calendar from '../../components/faculty/Calender'
import DailyClassTimetable from '../../components/faculty/DailyClassTimetable'

function AcedmicCalender() {
  return (
    <section className="mx-auto absolute top-[100px] bg-[#E9EEF4] flex flex-col gap-8 mt-138px font-[Inter] px-4">
      {/* Main Content Container */}
      <div
        className="w-[1072px] h-[52px] rounded-[12px]  gap-[16px] bg-[#04203E]  "
        style={{
          opacity: 1,
          border: "1px solid #CCCCCC",
          boxShadow: "0px 4px 8px 0px #0000001F"
        }}
      >
        <div className="w-[541px] h-[72px] ml-8 mt-3  opacity-100 ">
          <h1 className="font-[Inter] font-semibold text-[24px] leading-[100%] tracking-[0%] text-[#FAFCFD]">
            Schedule
          </h1>
          
        </div>
      </div>
      <div className="min-h-screen ">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-1">
            <Calendar/>
            <DailyClassTimetable/>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AcedmicCalender