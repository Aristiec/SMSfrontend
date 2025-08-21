import React, { useState } from "react";
import { MapPin, Clock, Edit, Map } from "lucide-react";
import Dropdown from "../../utils/Dropdown";

const stoppagesData = {
  "Route A": [
    {
      id: 1,
      name: "Laxmi Nagar Metro Station",
      distance: "0.0 km",
      time: "08:00 AM"
    },
    {
      id: 2,
      name: "Preet Vihar Opp. PVR",
      distance: "0.8 km",
      time: "08:10 AM"
    },
    {
      id: 3,
      name: "AIIMS Gate 1",
      distance: "0.5 km",
      time: "08:20 AM"
    },
    {
      id: 4,
      name: "Nirman Vihar Red Light",
      distance: "0.3 km",
      time: "08:25 AM"
    },
    {
      id: 5,
      name: "ISBT Kashmere Gate 2",
      distance: "1.2 km",
      time: "08:35 AM"
    },
    {
      id: 6,
      name: "Red Fort Main Gate",
      distance: "0.7 km",
      time: "08:45 AM"
    },
    {
      id: 7,
      name: "Chandni Chowk Metro",
      distance: "0.4 km",
      time: "08:50 AM"
    },
    {
      id: 8,
      name: "Khan Market",
      distance: "2.1 km",
      time: "09:05 AM"
    }
  ],
  "Route B": [
    {
      id: 1,
      name: "Laxmi Nagar Metro Station",
      distance: "0.0 km",
      time: "08:15 AM"
    },
    {
      id: 2,
      name: "Shakarpur Railway Station",
      distance: "1.1 km",
      time: "08:25 AM"
    },
    {
      id: 3,
      name: "IP Extension Gate 2",
      distance: "0.9 km",
      time: "08:35 AM"
    },
    {
      id: 4,
      name: "Patparganj Industrial Area",
      distance: "0.6 km",
      time: "08:42 AM"
    },
    {
      id: 5,
      name: "Mayur Vihar Phase 1",
      distance: "0.8 km",
      time: "08:50 AM"
    },
    {
      id: 6,
      name: "Akshardham Temple",
      distance: "1.3 km",
      time: "09:02 AM"
    },
    {
      id: 7,
      name: "ITO Metro Station",
      distance: "1.7 km",
      time: "09:15 AM"
    },
    {
      id: 8,
      name: "Khan Market",
      distance: "1.4 km",
      time: "09:25 AM"
    }
  ],
  "Route C": [
    {
      id: 1,
      name: "Connaught Place",
      distance: "0.0 km",
      time: "08:30 AM"
    },
    {
      id: 2,
      name: "Rajiv Chowk Metro",
      distance: "0.2 km",
      time: "08:35 AM"
    },
    {
      id: 3,
      name: "India Gate",
      distance: "1.5 km",
      time: "08:45 AM"
    },
    {
      id: 4,
      name: "All India Institute",
      distance: "0.8 km",
      time: "08:53 AM"
    },
    {
      id: 5,
      name: "University Campus",
      distance: "1.1 km",
      time: "09:05 AM"
    }
  ]
};

const Stoppages = () => {
  const [selectedRoute, setSelectedRoute] = useState("Route A");
  const routeOptions = ["Route A", "Route B", "Route C"];

  return (
    <div 
      className="rounded-[12px] gap-6 opacity-100 p-6 bg-[#FAFCFD] font-[Inter]"
      style={{
        boxShadow: "0px 4px 8px 0px #0000001F"
      }}
    >
      {/* Header */}
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-[18px] font-semibold text-[#1F1D1D] font-[Inter]">Stoppages</h2>
        <button className="flex items-center gap-2 bg-[#0B2347] text-white px-4 py-2 rounded-[8px] font-[Inter] font-medium text-[14px] hover:bg-[#0a1f3a] transition-colors">
          <Map/> Route Map
        </button>
      </div>

      {/* Route Selection */}
      <div className="mb-6 relative z-20">
        <label className="block text-[12px] text-[#717171] mb-2 font-[Inter]">Select Route</label>
        <div className="w-[200px]">
          <Dropdown
            options={routeOptions}
            selected={selectedRoute}
            onSelect={setSelectedRoute}
            placeholder="Select Route"
            className="w-full border border-[#71717166] rounded-[8px] px-3 py-2 text-[14px] text-[#1F1D1D] font-[Inter] font-normal focus:border-[#0077FF]"
          />
        </div>
      </div>

      {/* Stoppages List */}
      <div className="space-y-0 relative z-0">
        {stoppagesData[selectedRoute]?.map((stoppage, index) => (
          <div
            key={stoppage.id}
            className={`flex items-start gap-4 p-4 relative ${
              index % 2 === 0 ? "bg-[#F4F7FA]" : "bg-[#FAFCFD]"
            }`}
          >
            {/* Left side with pin icon and dotted line */}
            <div className="flex flex-col items-center relative">
              {/* Location Pin Icon */}
              <div className="w-6 h-6 flex items-center justify-center">
                <MapPin size={18} className="text-[#717171]" />
              </div>
              
              {/* Vertical Dotted Line */}
              {index < stoppagesData[selectedRoute].length - 1 && (
                <div 
                  className="w-[2px] h-12 mt-2"
                  style={{
                    backgroundImage: 'repeating-linear-gradient(to bottom, #CFDCEB 0px, #CFDCEB 4px, transparent 4px, transparent 8px)'
                  }}
                ></div>
              )}
            </div>

            {/* Stop Information */}
            <div className="flex-1 flex justify-between items-start">
              <div className="flex flex-col">
                <h3 className="text-[14px] font-medium text-[#1F1D1D] font-[Inter] mb-1">
                  {stoppage.name}
                </h3>
                <div className="flex flex-col gap-2 ">
                  <span className="text-[12px] text-[#717171] font-[Inter]">
                    Distance: {stoppage.distance}
                  </span>
                  <div className="flex items-center gap-1">
                    <Clock size={12} className="text-[#717171]" />
                    <span className="text-[12px] text-[#717171] font-[Inter]">
                      {stoppage.time}
                    </span>
                  </div>
                </div>
              </div>

              {/* Edit Icon */}
              <button className="p-1 hover:bg-[#E9EEF4] rounded">
                <Edit size={16} className="text-[#0077FF]" />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Stoppages;