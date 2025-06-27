import React from "react";
// import MapImage from '../../assets/MapImage.svg'

const TransportMap = () => {
  return (
    <div
      className=" w-[594px] h-[104px]  fixed inset-0 m-auto rounded-[12px] p-6 
       bg-[#FAFCFDCC] shadow-[0px_4px_8px_0px_rgba(0,0,0,0.24)]
       flex flex-col gap-1 items-center justify-center"
    >
      <h2 className="text-[20px] leading-[28px] font-medium text-[#1F1D1D] text-center font-[Inter]">
        Interactive Map Coming Soon
      </h2>
      <p className="text-[16px] leading-[24px] font-normal text-[#717171] text-center font-[Inter]">
        Live tracking and detailed route information will be available soon
      </p>
    </div>
  );
};

export default TransportMap;
