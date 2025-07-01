import React, { useState } from "react";
import { ChevronLeft } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Seating() {
  const [seats, setSeats] = useState(() => {
    const initialSeats = {};
    for (let i = 1; i <= 49; i++) {
      initialSeats[i] = {
        answered: i === 45,
        markedForReview: i === 25,
      };
    }
    return initialSeats;
  });

  const [selectedSeat, setSelectedSeat] = useState(45);
  const navigate = useNavigate();
  const handleSeatClick = (seatNumber) => {
    setSelectedSeat(seatNumber);
    setSeats((prev) => ({
      ...prev,
      [seatNumber]: {
        ...prev[seatNumber],
        answered: !prev[seatNumber].answered,
      },
    }));
  };

  const getSeatClass = (seatNumber) => {
    const seat = seats[seatNumber];
    if (seat.markedForReview) {
      return "bg-[#04203E] text-[#FAFCFD] border-[#04203E]";
    }

    return "bg-[#FAFCFD] text-[#1F1D1D] border-[#717171] ";
  };
  return (
    <div className="min-h-screen bg-[#FAFCFD] rounded-lg">
      {/* Header */}
      <div className="bg-[#04203E] text-[#FAFCFD] p-4 rounded-t-lg">
        <div className="flex items-center justify-between max-w-7xl mx-auto">
          <div className="flex items-center gap-4" onClick={() => navigate(-1)}>
            <ChevronLeft className="w-6 h-6 cursor-pointer" />
            <div>
              <h1 className="text-xl font-[Inter] font-bold text-[#FAFCFD]">
                Database Management System
              </h1>
              <p className="text-sm font-[Inter] text-[#FAFCFD]">
                Date - May 20, 2025; Reporting Time - 10:00 AM
              </p>
            </div>
          </div>
          <div className="bg-[#FAFCFD] text-[#04203E] font-[Inter] px-4 py-2 rounded-lg">
            <div className="text-sm font-medium">Your Seat</div>
            <div className="text-lg font-bold">
              {selectedSeat ? `A - ${selectedSeat}` : "-"}
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-7xl mx-auto p-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          <div>
            <h2 className="text-lg font-semibold mb-4 text-[#1F1D1D] font-[Inter]">
              Hall Location
            </h2>
            <div className="space-y-4">
              {/* Row 1 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#B1BAC3] rounded-lg bg-[#FAFCFD] p-3">
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D]  mb-1">
                    Location
                  </p>
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D] ">
                    Hall-B
                  </p>
                </div>
                <div className="border border-[#B1BAC3] rounded-lg bg-[#FAFCFD] p-3">
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D]  mb-1">
                    Block & Room Number
                  </p>
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D] ">
                    Block 4, Room No-200
                  </p>
                </div>
              </div>

              {/* Row 2 */}
              <div className="grid grid-cols-2 gap-4">
                <div className="border border-[#B1BAC3] rounded-lg bg-[#FAFCFD] p-3">
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D]  mb-1">
                    Floor
                  </p>
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D] ">
                    2nd
                  </p>
                </div>
                <div className="border border-[#B1BAC3] rounded-lg bg-[#FAFCFD] p-3">
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D]  mb-1">
                    Seat Number
                  </p>
                  <p className="text-[16px] font-[Inter] text-[#1F1D1D]  ">
                    A-50
                  </p>
                </div>
              </div>

              {/* Seat Verified Box */}
              <div className="flex items-center gap-2 bg-[#ECFDF7] text-[#10B981] font-[Inter] p-3 rounded-lg">
                <div className="w-3 h-3 bg-[#10B981] rounded-full"></div>
                <span className="font-medium">Seat Verified</span>
              </div>
            </div>
          </div>

          {/* Hall Layout Section */}
          <div>
            <h2 className="text-lg font-semibold mb-4 text-[#1F1D1D] font-[Inter]">
              Hall Layout
            </h2>
            <div
              className="bg-[#FAFCFD] border border-[#717171] rounded-lg pb-4"
              style={{ width: "544px", height: "586px" }}
            >
              {/* Header */}
              <div className="bg-[#04203E] text-[#FAFCFD] text-center py-3 rounded-t-lg mb-5">
                <h2 className="text-lg font-[Inter] font-medium">
                  INSTRUCTOR DESK
                </h2>
              </div>

              {/* Seating Grid */}
              <div className="px-6">
                <div className="grid grid-cols-7 gap-4 mb-6">
                  {Array.from({ length: 49 }, (_, index) => {
                    const seatNumber = index + 1;
                    return (
                      <button
                        key={seatNumber}
                        onClick={() => handleSeatClick(seatNumber)}
                        className={`
                  w-12 h-12 rounded-lg border-2 font-semibold text-lg
                  transition-all duration-200 hover:scale-105
                  ${getSeatClass(seatNumber)}
                `}
                      >
                        4
                      </button>
                    );
                  })}
                </div>

                {/* Legend */}
                <div className="flex items-center justify-start space-x-8 pt-4 border-t border-[#717171]">
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 border-2 border-[#717171] bg-[#FAFCFD] "></div>
                    <span className="text-sm text-[#1F1D1D]">Answered</span>
                  </div>
                  <div className="flex items-center space-x-2">
                    <div className="w-4 h-4 bg-[#04203E] "></div>
                    <span className="text-sm text-[#1F1D1D]">
                      Marked for Review
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Seating;
