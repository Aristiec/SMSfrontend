import { ArrowLeft, Download, Calendar, Clock, CheckCircle, File ,Maximize2 } from 'lucide-react';
import { useState } from "react";
import frame from "../../assets/Frame.png";

export default function AssignmentReviewPage() {
    const [value, setValue] = useState("");
  return (
    <section className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      {/* Header */}
      <header className="top-20 bg-[#04203e] flex justify-between items-center rounded-[12px] w-full h-[68px] px-6 py-6 text-[#FAFCFD] font-[Inter] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather] leading-7 tracking-normal">
          Assignments
        </h1>
      </header>

      {/* Outer Container */}
      <div 
        className="w-full h-full rounded-[12px] p-[24px] gap-[24px] bg-[#FAFCFD] flex flex-col"
        style={{
        
          opacity: 1
        }}
      >
        {/* Back Button */}
        <button className="flex items-center gap-2 text-[#04203E] hover:text-[#1F1D1D] font-[400] text-[14px] leading-6 tracking-normal">
          <ArrowLeft className="w-4 h-4" />
          <span>Back</span>
        </button>

        {/* Submission Review Section */}
        <div 
          style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
          className="bg-[#FAFCFD] p-6 gap-6 rounded-[12px] flex flex-col"
        >
          <h2 className="font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
            Submission Review
          </h2>
          
          <div className="flex flex-col gap-6 lg:flex-row lg:gap-10">
            {/* Assignment Details */}
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">
                Assignment Details
              </h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex flex-col gap-1">
                  <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">Title</p>
                  <p className="font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">Database Design Project</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">Course</p>
                  <p className="font-[400] text-[14px] leading-5 tracking-normal text-[#1F1D1D]">Computer Science</p>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">Due Date</p>
                  <div className="flex items-center gap-2">
                    <Calendar size={16} color="#717171" />
                    <p className="font-[400] text-[12px] leading-5 tracking-normal text-[#1F1D1D]">Jul 22, 2024, 09:15 PM</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">Max Marks</p>
                  <p className="font-[400] text-[14px] leading-5 tracking-normal text-[#1F1D1D]">50</p>
                </div>
              </div>
            </div>

            {/* Student Information */}
            <div className="flex flex-col gap-3 flex-1">
              <h3 className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">
                Student Information
              </h3>
              
              <div className="flex flex-col gap-3">
                <div className="flex items-center gap-3">
                  <div className="size-8 rounded-full bg-[#E9EEF4] flex items-center justify-center">
                    <span className="font-[500] text-[14px] text-[#04203E]">A</span>
                  </div>
                  <div className="flex flex-col gap-1">
                    <p className="font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">Asha Singh</p>
                    <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">18UBD3020</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">Status</p>
                  <div className="flex items-center gap-2">
                    <CheckCircle size={16} color="#10B981" />
                    <p className="font-[400] text-[12px] leading-5 tracking-normal text-[#10B981]">Submitted</p>
                  </div>
                </div>
                
                <div className="flex flex-col gap-1">
                  <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">Submission Date</p>
                  <div className="flex items-center gap-2">
                    <Clock size={12} color="#717171" />
                    <p className="font-[400] text-[12px] leading-5 tracking-normal text-[#1F1D1D]">Feb 3, 2024, 10:23 AM</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Submitted Files Section */}
        <div 
          
          className="bg-[#FAFCFD] p-6 gap-6 rounded-[12px] flex flex-col"
        >
          <h2 className="font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
            Submitted Files
          </h2>
          
          
          
          <div 
            
            className="flex items-center justify-between p-4 bg-[#FAFCFD] border border-[#717171]  rounded-[8px]"
          >
            <div className="flex items-center gap-3">
              <File size={20} color="#0077FF" />
              <div className="flex flex-col gap-1">
                <p className="font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">macbeth_analysis_asha.pdf</p>
                <p className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">2.4 MB</p>
              </div>
            </div>
            <button className="bg-[#04203E] text-[#FAFCFD] py-2 px-3 gap-2 rounded-[8px] font-[400] text-[14px] leading-6 tracking-normal flex items-center justify-center hover:bg-[#1F1D1D] transition-all duration-300 ease-in-out">
              <Download size={16} />
              <span>Download</span>
            </button>
          </div>

                   <div>
          <div className="flex items-center justify-between mb-4">
            <p className="font-medium">Submission Preview</p>
          </div>
              <div className="relative">
      <textarea
        className="w-full h-80 border border-[#717171] bg-[#E9EEF4] rounded-lg p-3 pr-12 resize-none focus:outline-none"
        value={value}
        onChange={(e) => setValue(e.target.value)}
      />
      {!value && (
        <div className="absolute inset-0 flex items-center justify-center pointer-events-none text-gray-500 rounded-lg p-3 pr-12">
          Document preview would appear here
        </div>
      )}
      <button className="absolute bottom-3 right-3 p-2 hover:bg-gray-100 rounded">
        <Maximize2 size={20} className="text-[#717171]" />
      </button>
    </div>
        </div>
        </div>

        {/* Grade & Feedback Section */}
        <div 
          
          className="bg-[#FAFCFD] p-6 gap-6 rounded-[12px] flex flex-col"
        >
          <h2 className="font-medium text-[16px] leading-6 tracking-normal text-[#1F1D1D]">
            Grade & Feedback
          </h2>
          
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-2">
              <label className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">
                Grade (out of 50)
              </label>
              <input 
                type="number" 
                placeholder="Enter grade (0-50)"
                className="bg-[#FAFCFD] rounded-[8px] py-2 px-3 border border-[#717171] font-[400] text-[14px] leading-5 tracking-normal text-[#1F1D1D] outline-none focus:border-[#04203E] transition-all duration-300"
                min="0"
                max="50"
              />
            </div>
            
            <div className="flex flex-col gap-2">
              <label className="font-[400] text-[12px] leading-4 tracking-normal text-[#717171]">
                Feedback
              </label>
              <textarea 
                placeholder="Enter feedback for the student"
                rows={6}
                className="bg-[#FAFCFD] rounded-[8px] py-2 px-3 border border-[#717171] font-[400] text-[14px] leading-5 tracking-normal text-[#1F1D1D] outline-none focus:border-[#04203E] transition-all duration-300 resize-vertical"
              ></textarea>
            </div>
            
            <div className="flex justify-end gap-3">
              <button className="py-2 px-3 gap-2 rounded-[8px] border border-[#04203E] font-[400] text-[14px] leading-6 tracking-normal text-[#04203E] hover:bg-[#E9EEF4] transition-all duration-300 ease-in-out">
                Cancel
              </button>
              <button className="bg-[#04203E] text-[#FAFCFD] py-2 px-3 gap-2 rounded-[8px] font-[400] text-[14px] leading-6 tracking-normal hover:bg-[#1F1D1D] transition-all duration-300 ease-in-out flex items-center">
                
                    <img src={frame} alt="Frame" />
                
                Save Grade & Feedback
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
