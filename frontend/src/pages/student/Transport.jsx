import React from "react";
import { Map, MapPin, Clock } from "lucide-react";
import { MdErrorOutline } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import {
  FaBus,
  FaRegClock,
  FaCalendarAlt,
  FaPhoneAlt,
  FaUser,
  FaBell,
} from "react-icons/fa";

const busRouteStops = [
  {
    stopName: "Laxmi Nagar Metro Station",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "7:10 AM",
  },
  {
    stopName: "Preet Vihar Opp. PVR",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "7:18 AM",
  },
  {
    stopName: "AIIMS Gate 1",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "7:25 AM",
  },
  {
    stopName: "Nirman Vihar Red Light",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "7:32 AM",
  },
  {
    stopName: "Karkardooma Court",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: true,
    time: "7:39 AM",
  },
  {
    stopName: "Welcome Metro Station",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "7:46 AM",
  },
  {
    stopName: "ISBT Kashmere Gate",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "7:53 AM",
  },
  {
    stopName: "Rajiv Chowk Gate 5",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "8:00 AM",
  },
  {
    stopName: "Mandi House Circle",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "8:07 AM",
  },
  {
    stopName: "India Gate Stop",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "8:14 AM",
  },
  {
    stopName: "Khan Market Metro",
    distance: "0.0 km",
    duration: "~7 min",
    isCurrentStop: false,
    time: "8:21 AM",
  },
];

const updates = [
  {
    id: 1,
    title: "Bus B205 Delay",
    description:
      "Bus B205 will be delayed by approximately 15 minutes this morning due to road construction.",
    time: "Today, 6:30 AM",
    bg: "#FEF2F2",
    iconColor: "#EF4444",
  },
  {
    id: 2,
    title: "Route Change",
    description:
      "Starting next week, the East Delhi Circular Route will include a stop at Science Building.",
    time: "1 day ago, 10:00 AM",
    bg: "#F4F7FA",
    iconColor: "#1F1D1D",
  },
  {
    id: 3,
    title: "Holiday Schedule",
    description:
      "Please note that buses will operate on a reduced schedule during the upcoming holiday weekend.",
    time: "2 days ago, 10:00 AM",
    bg: "#F4F7FA",
    iconColor: "#1F1D1D",
  },
];
const Transport = () => {
  const [showMap, setShowMap] = React.useState(false);

  const navigate = useNavigate();
  const handleOverlayClick = (e) => {
    if (e.target.id === "overlay") {
      setShowMap(false);
    }
  };

  return (
    <div className="bg-[#E9EEF4] p-4 font-[Inter]  min-h-screen space-y-6">
      <header className="bg-[#04203E] flex justify-between items-center rounded-[12px] w-full  h-[68px] px-6 py-4 text-[#FAFCFD] mx-auto">
        <h1 className="text-[24px] font-bold font-[Merriweather]">Transport</h1>
      </header>

      <div className="flex gap-6">
        {/* first content  */}

        <div className="flex flex-col gap-6 w-[70%] ">
          <div className=" h-[310px] gap-6 rounded-[12px] p-6 bg-[#FAFCFD] shadow-md flex flex-col">
            <div className=" font-[Inter] text-[20px] leading-[28px] tracking-[0] text-[#1F1D1D] font-semibold">
              Transport Details
            </div>
            <div className="w-[664px] h-[210px] gap-[20px] flex ">
              {/* icon div  */}
              <div className="w-[174px] h-[46px] flex items-center gap-[12px]">
                <div className="w-[40px] h-[40px] rounded-full bg-[#E9EEF4] flex items-center justify-center">
                  <FaBus className="w-[20px] h-[13.75px] border-[1.25px]rounded-[2px]" />
                </div>
                <div className=" h-[46px] flex flex-col gap-[4px] justify-center">
                  <div className="text-[#1F1D1D] font-bold text-[16px] leading-[24px] Font-[Inter]">
                    B205
                  </div>
                  <div className="text-[#717171] font-normal text-[14px] leading-[18px]">
                    East Delhi Circular
                  </div>
                </div>
              </div>
            </div>
            <div className=" h-[144px] flex gap-[24px]">
              <div className="w-full h-[144px] bg-[#F4F7FA] rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                {/* Header */}
                <div className="flex items-center gap-[8px]">
                  <FaRegClock className="w-[16px] h-[16px] " />
                  <div className="font-semibold text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter]">
                    Schedule
                  </div>
                </div>

                <div className="flex gap-[120px]">
                  <div className="flex flex-col gap-[8px] w-[56px] font-[Inter]">
                    <div className="text-[12px] leading-[16px] text-[#717171] ">
                      Pickup
                    </div>
                    <div className="text-[14px] leading-[18px] font-medium text-[#1F1D1D]">
                      7:45 AM
                    </div>
                  </div>

                  <div className="flex flex-col gap-[8px] w-[56px] font-[Inter]">
                    <div className="text-[12px] leading-[16px] text-[#717171]">
                      Return
                    </div>
                    <div className="text-[14px] leading-[18px] font-medium text-[#1F1D1D]">
                      5:30 PM
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-[8px]">
                  <FaCalendarAlt className="w-[15px] h-[18px] " />
                  <div className="text-[14px] leading-[18px] text-[#1F1D1D] font-[Inter]">
                    Monday - Friday
                  </div>
                </div>
              </div>

              <div className="w-full bg-[#F4F7FA] rounded-[8px] p-[16px] flex flex-col gap-[16px]">
                {/* Header */}
                <div className="flex items-center gap-[8px]">
                  <FaUser className="w-[16px] h-[20px] text-[#1F1D1D]" />
                  <div className="font-semibold text-[16px] leading-[24px] text-[#1F1D1D] font-[Inter]">
                    Driver Information
                  </div>
                </div>

                <div className="text-[14px] leading-[18px] text-[#1F1D1D] font-medium">
                  Michael Johnson
                </div>
                <div className="flex items-center gap-[8px]">
                  <FaPhoneAlt className="w-[16px] h-[16px] " />
                  <div className="text-[12px] leading-[18px] text-[#1F1D1D] font-[Inter] font-[400]">
                    555-123-4567
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{ boxShadow: "0px 4px 8px 0px #0000001F" }}
            className="flex flex-col gap-6 p-6 bg-[#FAFCFD] scrollbar-hide  rounded-[12px]"
          >
            <div className="flex justify-between items-center font-[Inter]">
              <p className="text-[20px] font-[600] leading-7 text-[#1F1D1D] flex items-center">
                Route Stops
              </p>
              <button
                onClick={() => setShowMap(true)}
                className="py-2 px-3 flex gap-3 rounded-[8px] bg-[#04203E] cursor-pointer items-center"
              >
                <Map size={18} color={"#FAFCFD"} />
                <p className="text-[14px] leading-6 font-[600] text-[#FAFCFD]">
                  Route Map
                </p>
              </button>
            </div>
            <div className="flex flex-col gap-2 scrollbar-hide h-[50vh] overflow-y-scroll ">
              {busRouteStops.map((stop, index) => (
                <div
                  style={{
                    background: stop.isCurrentStop
                      ? "#cfdceb"
                      : index % 2 === 0
                      ? "var(--Sec-50, #F4F7FA)"
                      : "#FAFCFD",
                  }}
                  className="py-3 px-6 rounded-[8px]  flex flex-col gap-2 "
                >
                  <div className="flex justify-between ">
                    <div className="flex gap-3 items-center">
                      <div
                        className={`flex items-center justify-center w-8 h-8 rounded-full ${
                          stop.isCurrentStop ? "bg-[blue]" : "bg-[#FAFCFD]"
                        }`}
                      >
                        <MapPin
                          size={16}
                          color={stop.isCurrentStop ? "#FAFCFD" : "#1F1D1D"}
                        />
                      </div>
                      <p className="font-[500] text-[14px] leading-4 text-[#1F1D1D] tracking-normal">
                        {stop.stopName}
                      </p>
                    </div>
                    <div className="flex gap-2 font-[Inter] items-center">
                      <Clock size={12} />
                      <p className="font-[400] text-[12px] leading-4 text-[#717171] tracking-normal flex items-center">
                        {stop.time}
                      </p>
                    </div>
                  </div>

                  <div className="flex flex-col gap-2 justify-center">
                    <div className="flex flex-col pl-7 justify-center">
                      <p className="font-[400] text-[12px] leading-4 text-[#717171] tracking-normal">
                        <span>Distance:</span> {stop.distance}
                      </p>
                    </div>

                    <div className="pl-1">
                      <div className="flex gap-2 pl-7 items-center border-[#717171] border-dashed border-l-1">
                        <Clock size={12} />
                        <p className="font-[400] text-[12px] leading-4 text-[#717171] tracking-normal">
                          {stop.duration}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* right side content  */}
        <div className="  gap-[24px] rounded-[12px] pt-[24px] pr-[16px] pb-[24px] pl-[16px] bg-[#FAFCFD] shadow-[0px_4px_8px_0px_#0000001F] flex flex-col">
          {/* Header */}
          <div className="flex items-center gap-[8px] w-[206.5px] h-[28px]">
            <FaBell className="w-[16.5px] h-[18.34px] " />
            <div className="text-[#1F1D1D] font-semibold text-[20px] leading-[28px]">
              Transport Updates
            </div>
          </div>

          {/* Cards */}
          <div className=" flex flex-col gap-[24px]">
            {updates.map((item) => (
              <div
                key={item.id}
                className={` rounded-[8px] p-[12px] flex flex-col gap-[16px]`}
                style={{ backgroundColor: item.bg }}
              >
                <div className="flex items-center gap-[12px] ">
                  <MdErrorOutline
                    className="w-[18px] h-[18px]"
                    style={{ color: item.iconColor }}
                  />
                  <div className="text-[#1F1D1D] font-medium text-[16px] leading-[18px]">
                    {item.title}
                  </div>
                </div>
                <div className="flex flex-col gap-[12px] w-[328px] h-[60px]">
                  <div className="text-[#1F1D1D] text-[12px] leading-[16px]">
                    {item.description}
                  </div>
                  <div className="text-[#717171] text-[12px] leading-[16px]">
                    {item.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {showMap && (
        <div
          id="overlay"
          onClick={handleOverlayClick}
          className="fixed inset-0 bg-[#1F1D1D]/40 z-[1000] flex items-center justify-center"
        >
          <div
            className="w-[594px] h-auto rounded-[12px] p-6 bg-[#FAFCFD]
 
      shadow-[0px_4px_8px_0px_rgba(0,0,0,0.24)] flex flex-col gap-2 items-center justify-center"
          >
            <h2 className="text-[20px] leading-[28px] font-medium text-[#1F1D1D] text-center font-[Inter]">
              Interactive Map Coming Soon
            </h2>
            <p className="text-[16px] leading-[24px] font-normal text-[#717171] text-center font-[Inter]">
              Live tracking and detailed route information will be available
              soon
            </p>
          </div>
        </div>
      )}
    </div>
  );
};

export default Transport;
