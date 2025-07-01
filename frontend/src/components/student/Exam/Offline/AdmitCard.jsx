import React from "react";
import {
  ChevronLeft,
  Download,
  Calendar,
  MapPin,
  User,
  CreditCard,
} from "lucide-react";
import { useNavigate } from "react-router-dom";

const AdmitCard = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen">
      <div
        className="bg-[#04203E] rounded-lg text-[#FAFCFD] p-4 flex items-center mx-4"
        onClick={() => navigate(-1)}
      >
        <ChevronLeft className="w-6 h-6 mr-3 cursor-pointer" />
        <h1 className="text-xl font-[Inter] font-semibold">
          Admit Card Download
        </h1>
      </div>

      <div className=" mx-auto p-6">
        <h2 className="text-[20px] font-[Inter] font-semibold text-[#1F1D1D] mb-6">
          Semester Exam
        </h2>
        <div className="bg-[#FAFCFD] rounded-lg shadow-sm p-6 mb-6 px-10">
          <div className="grid grid-cols-3 gap-6">
            {/* Student Image */}
            <div className="flex flex-col ml-4 mt-4">
              <div className="w-32 h-40 border-2 border-[#717171] rounded-lg mb-2 bg-[#FAFCFD]"></div>
              <p className="text-[16px] font-[Inter] text-[#717171]">
                Student's Image
              </p>
            </div>

            <div></div>

            {/* Student Details Block */}
            <div
              className="mt-4 mr-4"
              style={{
                width: "395px",
                height: "140px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "36px",
              }}
            >
              {/* Row 1, Col 1: Student Name */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Student name
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  Asha Singh
                </p>
              </div>

              {/* Row 1, Col 2: Roll Number */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Roll number
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  1RUB203020
                </p>
              </div>

              {/* Row 2, Col 1: Course */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Course
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  Computer Science
                </p>
              </div>

              {/* Row 2, Col 2: Semester */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Semester
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  4
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-[#717171]" />

          <div className="grid grid-cols-3 gap-6">
            {/* Left: Verification Code */}
            <div className="flex flex-col items-start ml-4 mt-4">
              <div className="w-32 h-40 bg-[#717171] rounded-lg mb-2"></div>
              <p className="text-[16px] font-[Inter] text-[#717171]">
                Verification Code
              </p>
            </div>

            <div></div>

            {/* Right: Exam Details */}
            <div
              className="mt-4 mr-4"
              style={{
                width: "395px",
                height: "140px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: "36px",
              }}
            >
              {/* Subject */}
              <div className="flex items-start space-x-3">
                <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Subject
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                    ET
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Date & Time
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[14px]">
                    July 30, 2025
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[14px]">
                    10:00 AM - 1:00 PM
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1F1D1D] mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Venue
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                    Campus-3
                  </p>
                </div>
              </div>

              {/* Seat Number */}
              <div className="flex items-start space-x-3">
                <User className="w-5 h-5 text-[#1F1D1D] mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Seat Number
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                    B-24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#04203E] text-[#FAFCFD] py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
          <Download className="w-5 h-5" />
          <span className="font-semibold font-[Inter] text-[16px]">
            Download Admit Card
          </span>
        </button>
      </div>
      <div className=" mx-auto p-6">
        <h2 className="text-[20px] font-[Inter] font-semibold text-[#1F1D1D] mb-6">
          Backlog Exam
        </h2>
        <div className="bg-[#FAFCFD] rounded-lg shadow-sm p-6 mb-6 px-10">
          <div className="grid grid-cols-3 gap-6">
            {/* Student Image */}
            <div className="flex flex-col ml-4 mt-4">
              <div className="w-32 h-40 border-2 border-[#717171] rounded-lg mb-2 bg-[#FAFCFD]"></div>
              <p className="text-[16px] font-[Inter] text-[#717171]">
                Student's Image
              </p>
            </div>

            <div></div>

            {/* Student Details Block */}
            <div
              className="mt-4 mr-4"
              style={{
                width: "395px",
                height: "140px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "1fr 1fr",
                gap: "36px",
              }}
            >
              {/* Row 1, Col 1: Student Name */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Student name
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  Asha Singh
                </p>
              </div>

              {/* Row 1, Col 2: Roll Number */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Roll number
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  1RUB203020
                </p>
              </div>

              {/* Row 2, Col 1: Course */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Course
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  Computer Science
                </p>
              </div>

              {/* Row 2, Col 2: Semester */}
              <div>
                <p className="text-[16px] font-[Inter] text-[#717171]">
                  Semester
                </p>
                <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                  4
                </p>
              </div>
            </div>
          </div>

          <hr className="my-8 border-[#717171]" />

          <div className="grid grid-cols-3 gap-6">
            {/* Left: Verification Code */}
            <div className="flex flex-col items-start ml-4 mt-4">
              <div className="w-32 h-40 bg-[#717171] rounded-lg mb-2"></div>
              <p className="text-[16px] font-[Inter] text-[#717171]">
                Verification Code
              </p>
            </div>

            <div></div>

            {/* Right: Exam Details */}
            <div
              className="mt-4 mr-4"
              style={{
                width: "395px",
                height: "140px",
                display: "grid",
                gridTemplateColumns: "1fr 1fr",
                gridTemplateRows: "auto auto",
                gap: "36px",
              }}
            >
              {/* Subject */}
              <div className="flex items-start space-x-3">
                <CreditCard className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Subject
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                    ET
                  </p>
                </div>
              </div>

              {/* Date & Time */}
              <div className="flex items-start space-x-3">
                <Calendar className="w-5 h-5 text-gray-600 mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Date & Time
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[14px]">
                    July 30, 2025
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[14px]">
                    10:00 AM - 1:00 PM
                  </p>
                </div>
              </div>

              {/* Venue */}
              <div className="flex items-start space-x-3">
                <MapPin className="w-5 h-5 text-[#1F1D1D] mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Venue
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                    Campus-3
                  </p>
                </div>
              </div>

              {/* Seat Number */}
              <div className="flex items-start space-x-3">
                <User className="w-5 h-5 text-[#1F1D1D] mt-1" />
                <div>
                  <p className="text-[16px] font-[Inter] text-[#717171]">
                    Seat Number
                  </p>
                  <p className="font-semibold text-[#1F1D1D] font-[Inter] text-[16px]">
                    B-24
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>

        <button className="w-full bg-[#04203E] text-[#FAFCFD] py-3 px-6 rounded-lg flex items-center justify-center space-x-2">
          <Download className="w-5 h-5" />
          <span className="font-semibold font-[Inter] text-[16px]">
            Download Admit Card
          </span>
        </button>
      </div>
    </div>
  );
};

export default AdmitCard;
