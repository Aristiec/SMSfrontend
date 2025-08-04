import React from 'react'
import { Eye, Search, X } from 'lucide-react'
import { useNavigate } from 'react-router-dom';


const students = Array(11).fill("Name") 

const StudentList = ({ isOpen, onClose }) => {
   const navigate = useNavigate();

    const handleViewAnswerSheet = () => {
    navigate('/databaseManagement'); 
  };
   
  return (
    <div className="w-[514px]  bg-[#FFFFFF] rounded-[8px] p-5 overflow-hidden">
      <div className="w-[460px] flex flex-col gap-8 ">
        {/* Heading */}
       <div className='flex items-center justify-between'>
         <h2 className="text-[20px] font-semibold font-[Inter] text-[#1F1D1D]">
          List of Students (CSE-01)
        </h2>
        <X onClick={onClose} className='w-5 h-5'/>
       </div>

        {/* Search Box */}
        <div className="w-[460px] h-[43px] flex items-center justify-between border border-[#CCCCCC] rounded-[8px] px-3">
          <input
            type="text"
            placeholder="Search by name"
            className="text-[#717171] text-[16px] font-normal font-[Inter] focus:outline-none w-full placeholder-[#717171]"
          />
          <Search className='w-[14px] h-[14px] text-[#717171]'/>

        </div>

        {/* Student List */}
        <div className=" flex flex-col gap-5 overflow-y-auto pr-2">
          {students.map((name, index) => (
            <div
              key={index}
              className=" flex justify-between items-center border-b border-[#CCCCCC] py-[9px]"
            >
              <span className="text-[#717171] text-[16px] font-normal font-[Inter]">
                {name}
              </span>
              <div  className="flex items-center gap-4  ">
                <Eye size={17} className="text-[#0077FF]" />
                <span onClick={handleViewAnswerSheet}  className="text-[#0077FF] text-[16px] font-normal font-[Inter] cursor-pointer">
                  View answer sheet
                </span>
              </div>
            </div>
          ))}
        </div>

        {/* View All Button */}
        <button className="bg-[#0077FF] text-[#FAFCFD] text-[16px] font-medium font-[Inter] w-full py-2 rounded-md">
          View All
        </button>
      </div>
    </div>
  )
}

export default StudentList
