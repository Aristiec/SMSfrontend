import React, { useState, useEffect } from "react";
import DetailsCard from "./DetailsCard";
import { Wifi, BedSingle, Table, ShowerHead, CheckCircle } from "lucide-react";
// import {
//   fetchRoomDetailById,
//   fetchStudentAmenities,
//   fetchHostelDetailById,
// } from "../../../features/auth/authAPI";
// import { useSelector } from "react-redux";

const HostelAndRooms = () => {
  const [roomDetail, setRoomDetail] = useState(null);
  const [amenities, setAmenities] = useState([]);
  const [hostelDetail, setHostelDetail] = useState(null);

  // const studentId = useSelector((state) => state.auth.user?.studentId);
  // const token = useSelector((state) => state.auth.user?.token);

  // ✅ Mock data
  const mockRoomDetail = {
    roomNumber: "A-203",
    roomType: "Double Sharing",
    capacity: 2,
    currentOccupancy: 1,
    checkInDate: "2024-06-15",
  };

  const mockHostelDetail = {
    hostelName: "Sunrise Hostel",
    hostelType: "Boys",
    block: "Block A",
    floor: "2nd",
    allotmentDate: "2024-06-01",
  };

  const mockAmenities = [
    { amenityName: "Wi-Fi", description: "High-Speed Internet", available: true },
    { amenityName: "Bed", description: "Single with Mattress", available: true },
    { amenityName: "Study Table", description: "With Chair", available: true },
    { amenityName: "Bathroom", description: "Attached", available: true },
  ];

  useEffect(() => {
    // 🔹 Commented out API
    // if (studentId && token) { ...fetch API }

    // Simulate async fetch
    setTimeout(() => {
      setRoomDetail(mockRoomDetail);
      setHostelDetail(mockHostelDetail);
      setAmenities(mockAmenities);
    }, 400);
  }, []);

  const getIcon = (name) => {
    switch (name.toLowerCase()) {
      case "wifi":
      case "high-speed internet":
        return <Wifi className="w-5 h-5 text-[#1F1D1D]" />;
      case "bed":
        return <BedSingle className="w-5 h-5 text-[#1F1D1D]" />;
      case "study table":
        return <Table className="w-5 h-5 text-[#1F1D1D]" />;
      case "bathroom":
        return <ShowerHead className="w-5 h-5 text-[#1F1D1D]" />;
      default:
        return <CheckCircle className="w-5 h-5 text-[#1F1D1D]" />;
    }
  };

  return (
    <div className="flex flex-col gap-8 bg-[#FAFCFD] font-[Inter] rounded-[12px]">
      {/* Hostel + Room card */}
      <div className="flex justify-center gap-6 px-4 mt-4 flex-col md:flex-row">
        {roomDetail && hostelDetail ? (
          <DetailsCard roomDetail={roomDetail} hostelDetail={hostelDetail} />
        ) : (
          <p>Loading...</p>
        )}
      </div>

      {/* Room Amenities */}
      <div className="bg-[#FAFCFD] px-6 g-6">
        <h2 className="text-[15.3px] font-semibold text-[#1F1D1D] leading-[28px] mb-4">
          Room Amenities
        </h2>
        <div className="flex flex-wrap lg:flex-nowrap w-full gap-6">
          {amenities.map((item, index) => (
            <div
              key={index}
              className="flex flex-col justify-between rounded-[8px] p-[12px_24px] w-full bg-[#FAFCFD] shadow-[0px_4px_8px_0px_#0000001F]"
            >
              <div className="flex items-center gap-3 mb-2">
                {getIcon(item.amenityName)}
                <span className="text-[14px] font-medium text-[#1F1D1D] leading-[20px]">
                  {item.amenityName}
                </span>
              </div>

              <div className="text-[12px] text-[#717171] pl-[29px] leading-[18px]">
                {item.description}
              </div>

              {item.available ? (
                <div className="flex items-center gap-1 pl-[29px] mt-1">
                  <CheckCircle
                    className="w-[12px] h-[12px] text-[#10B981]"
                    strokeWidth={2}
                  />
                  <span className="text-[12px] text-[#10B981] leading-[18px]">
                    Available
                  </span>
                </div>
              ) : (
                <span className="pl-[29px] text-[12px] text-[#EF4444]">
                  Not Available
                </span>
              )}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HostelAndRooms;
