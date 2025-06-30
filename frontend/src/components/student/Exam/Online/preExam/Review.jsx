import React from 'react';
import { Calendar, Clock, Camera, Upload, ChevronLeft  } from 'lucide-react';
import Header from './Header';
import Stage from './Stage';
import { useNavigate } from "react-router-dom";

const cardData = [
  {
    title: 'Webcam Photo',
    description: 'Take a photo using your webcam',
    buttonLabel: 'Take Photo',
    icon: <Camera size={16} strokeWidth={2} />,
    btnIcon: <Camera size={12} strokeWidth={2} />,
  },
  {
    title: 'ID Card Upload',
    description: 'Upload a snapshot of your student ID Card',
    buttonLabel: 'Upload ID',
    icon: <Upload size={16} strokeWidth={2} />,
    btnIcon: <Upload size={12} strokeWidth={2} />,
  },
];

const Review = () => {
  const navigate = useNavigate();
  return (
    <div
      style={{ boxShadow: '0px 4px 8px 0px #0000003D' }}
      className="flex flex-col gap-8 p-6 rounded-[12px] bg-[#FAFCFD]"
    >
      {/* Header */}
      <div className="flex gap-12 flex-col w-full items-center justify-center">
        <div className="flex flex-col gap-12 w-[70%]">
          <Header />
          <Stage currentStage={3} />
        </div>
      </div>
      <div className="flex flex-col gap-8 p-6 border border-[#71717199] rounded-[8px] w-full">
        
        <div className="flex flex-col gap-2">
          <p className="font-[Inter] font-[700] text-[16px] leading-6 flex justify-center items-center text-[#1F1D1D]">
            Identity Verification
          </p>
          <p className="font-[Inter] font-[400] text-[14px] leading-6 text-[#717171] flex justify-center items-center">
            Please complete the following steps before starting your exam
          </p>
        </div>

        
        <div className="flex flex-col gap-[32px] border border-[#717171] rounded-[8px] p-5 font-[Inter]">
          <div className="text-[#1F1D1D] font-bold text-[20px] leading-[30px]">
            Student Information
          </div>

          <div className="w-full h-[1px] bg-[#FAFCFD] border border-[#717171]"></div>

          <div className="flex w-full justify-between">
            {/* Left */}
            <div className="flex flex-col gap-8">
              <div>
                <p className="text-[#717171] text-[16px] leading-[24px]">Full Name</p>
                <p className="text-[#1F1D1D] text-[16px] font-medium leading-[24px]">
                  Asha Singh
                </p>
              </div>
              <div>
                <p className="text-[#717171] text-[16px] leading-[24px]">Course Name</p>
                <p className="text-[#1F1D1D] text-[16px] font-medium leading-[24px]">
                  Computer Science
                </p>
              </div>
              <div>
                <p className="text-[#717171] text-[16px] leading-[24px]">Exam Name</p>
                <p className="text-[#1F1D1D] text-[16px] font-medium leading-[24px]">
                  Database Management System
                </p>
              </div>
            </div>

            {/* Right */}
            <div className="flex flex-col gap-8 mr-35">
              <div>
                <p className="text-[#717171] text-[16px] leading-[24px]">Roll Number</p>
                <p className="text-[#1F1D1D] text-[16px] font-medium leading-[24px]">
                  1RUB203020
                </p>
              </div>
              <div>
                <p className="text-[#717171] text-[16px] leading-[24px]">Semester</p>
                <p className="text-[#1F1D1D] text-[16px] font-medium leading-[24px]">4</p>
              </div>
              <div>
                <p className="text-[#717171] text-[16px] leading-[24px]">Date & Time</p>
                <div className="flex gap-3 items-center">
                  <div className="flex gap-1 items-center">
                    <Calendar size={16} strokeWidth={1.5} />
                    <span className='text-[16px] font-medium leading-[24px]'>Nov 23, 2024</span>
                  </div>
                  <div className="flex gap-1 items-center">
                    <Clock size={16} strokeWidth={1.5} />
                    <span className='text-[16px] font-medium leading-[24px]'>10:00 AM</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        
        <div className="flex flex-col gap-[32px] font-[Inter]">
          <div className="flex flex-col gap-[8px]">
            <p className="text-[#1F1D1D] font-bold text-[16px] leading-[24px]">
              Identity Verification
            </p>
            <p className="text-[#717171] font-normal text-[16px] leading-[24px]">
              Please complete your identity verification
            </p>
          </div>

          <div className="flex justify-between gap-8">
            {cardData.map((item, index) => (
              <div
                key={index}
                className="flex flex-col gap-6 border border-[#717171] rounded-[8px] p-5 w-1/2"
              >
              
                <div className="flex gap-4 items-center text-[#1F1D1D]">
                  {item.icon}
                  <p className="text-[#1F1D1D] font-bold text-[16px] leading-[24px]">
                    {item.title}
                  </p>
                </div>

              
                <p className="text-[#717171] text-[16px] pl-8 leading-[24px]">
                  {item.description}
                </p>

                
                <label className="flex items-center justify-center gap-2 px-24 py-1 border border-[#717171] rounded-[8px] bg-[#E9EEF4] cursor-pointer">
                  <input type="file" className="hidden " />
                  {item.btnIcon}
                  <p className="text-[14px] font-medium leading-[21px] ">
                    {item.buttonLabel}
                  </p>
                </label>
              </div>
            ))}
          </div>

          <div className="flex justify-center">
            <button className="bg-[#04203E] text-[#FAFCFD] w-full px-8 py-2 rounded-[8px] font-medium text-[16px]">
              Verify
            </button>
          </div>
        </div>
      </div>

      {/* Previous Button  */}
      <div>
        <button
          onClick={()=> navigate("/student/systemCheck")}
          className="py-3 px-4 rounded-[8px] bg-[#CFDCEB] flex items-center gap-3"
        >
          <ChevronLeft size={20} color="#1F1D1D" />
          <p className="font-medium text-[16px] leading-6 tracking-normal font-[Inter] text-[#1F1D1D]">
            Previous
          </p>
        </button>
      </div>
    </div>
  );
};

export default Review;
