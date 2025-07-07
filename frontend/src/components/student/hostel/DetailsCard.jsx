import React from 'react'

const DetailsCard = () => {
  return (
    <>
       {/* Hostel Details Card */}
        <div className="w-full md:w-1/2 rounded-[8px] p-[24px] shadow bg-white">
          <h2 className="text-[16px] font-semibold text-[#1F1D1D] leading-[24px] font-[Inter]">
            Hostel Details
          </h2>

          <div className="mt-6 flex flex-col gap-[12px] w-full font-[Inter]">
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Hostel Name :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">Sree Cauvery Hostel</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Hostel Type :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">Boys Hostel</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Block :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">B</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Floor :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">2nd Floor</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Allotment Date :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">August 15, 2023</span>
            </div>
          </div>
        </div>

        {/* Room Details Card */}
        <div className="w-full md:w-1/2 rounded-[8px] p-[24px] shadow bg-white">
          <h2 className="text-[16px] font-semibold text-[#1F1D1D] leading-[24px] font-[Inter]">
            Room Details
          </h2>

          <div className="mt-6 flex flex-col gap-[12px] w-full font-[Inter]">
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Room Number :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">C-205</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Room Type :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">Double Sharing</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Capacity :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">2 Sharing</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Current Occupancy :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">2/2</span>
            </div>
            <div className="flex justify-between border-b border-[#71717166] pb-3">
              <span className="text-[14px] text-[#717171] leading-[20px] font-normal">Check-in Date :</span>
              <span className="text-[14px] text-[#1F1D1D] font-semibold leading-[20px]">August 16, 2023</span>
            </div>
          </div>
        </div>

    </>
  )
}

export default DetailsCard
