import React from 'react';
import { IoSend } from 'react-icons/io5';

const Footer = () => {
  return (
    <div className="  fixed bottom-0 w-[30%] bg-[#F4F7FA] px-4 py-3 z-50 font-[Inter]"
         style={{ boxShadow: '0px -2px 8px 0px #0000001F' }}>
      <div className="flex items-center justify-center gap-3">
        <div className="w-[87%] h-[48px] border border-[#1F1D1D] rounded-full flex items-center px-[24px] gap-4">
          <input
            type="text"
            placeholder="Ask anything"
            className="w-full text-[#1F1D1D] font-[400] text-[16px] outline-none bg-transparent placeholder:text-[#1F1D1D]"
          />
        </div>
            <button className="bg-[#04203E] px-2 py-2 rounded-full flex items-center justify-center">
            <IoSend size={24} color='white' />
          </button>
      </div>
    </div>
  );
};

export default Footer;
