import React from "react";
import { Edit, Trash2, MapPin, Bus } from "lucide-react";

const routesData = [
  {
    id: "A",
    title: "Route A",
    startPoint: "Laxmi Nagar",
    endPoint: "Khan Market",
    description: "Main eastern route covering major residential areas",
    stoppages: 8,
    vehicles: 2,
  },
  {
    id: "B",
    title: "Route B",
    startPoint: "Laxmi Nagar",
    endPoint: "Khan Market",
    description: "Main eastern route covering major residential areas",
    stoppages: 8,
    vehicles: 2,
  },
  {
    id: "C",
    title: "Route C",
    startPoint: "Connaught Place",
    endPoint: "University Campus",
    description: "Central route for downtown students",
    stoppages: 5,
    vehicles: 1,
  },
];

const Routes = () => {
  return (
    <div className="flex flex-col bg-[#FAFCFD] font-[Inter] rounded-[12px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#1F1D1D] font-[Inter]">Routes</h2>
      </div>
      
      <div 
        className="flex flex-col md:flex-row justify-center"
        style={{ gap: "23px", opacity: 1 }}
      >
        {routesData.map((route, index) => (
          <div
            key={index}
            className="flex flex-col w-full md:w-1/3"
            style={{
              borderRadius: "8px",
              padding: "24px",
              gap: "24px",
              opacity: 1,
              borderWidth: "1px",
              border: "1px solid #71717166",
              boxShadow: "0px 4px 8px 0px #0000001F",
              backgroundColor: "white",
            }}
          >
            {/* Header with Route Title and Action Icons */}
            <div className="flex justify-between items-center">
              <h3 
                className="font-[Inter]"
                style={{
                  fontWeight: 500,
                  fontSize: "16px",
                  lineHeight: "24px",
                  letterSpacing: "0%",
                  color: "#1F1D1D",
                }}
              >
                {route.title}
              </h3>
              <div className="flex gap-2">
                <button className="p-1">
                  <Edit size={16} className="text-[#0077FF]" />
                </button>
                <button className="p-1">
                  <Trash2 size={16} className="text-[#FF3B30]" />
                </button>
              </div>
            </div>

            {/* Route Path */}
            <div 
              className="flex flex-col"
              style={{ gap: "8px", opacity: 1 }}
            >
              {/* Dots and Line Container */}
              <div className="flex items-center relative">
                {/* Start Point Dot */}
                <div className="w-2 h-2 bg-[#0077FF] rounded-full z-10"></div>
                
                {/* Connecting Line - Full Width */}
                <div 
                  className="flex-1 h-[2px] mx-2"
                  style={{ backgroundColor: "#CFDCEB" }}
                ></div>
                
                {/* End Point Dot */}
                <div className="w-2 h-2 bg-[#0077FF] rounded-full z-10"></div>
              </div>
              
              {/* Route Text Below the Line */}
              <div className="flex items-left ">
                <span 
                  className="font-[Inter]"
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    color: "#1F1D1D",
                  }}
                >
                  {route.startPoint}
                </span>
                <span className="text-[#717171] mx-2 -my-1 ">→</span>
                <span 
                  className="font-[Inter]"
                  style={{
                    fontWeight: 400,
                    fontSize: "14px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    color: "#1F1D1D",
                  }}
                >
                  {route.endPoint}
                </span>
              </div>
              {/* Description */}
            <p 
              className="font-[Inter]"
              style={{
                fontWeight: 400,
                fontSize: "11.9px",
                lineHeight: "20px",
                letterSpacing: "0%",
                color: "#717171",
              }}
            >
              {route.description}
            </p>
            </div>

            

            {/* Statistics */}
            <div className="flex items-center gap-4">
              <div className="flex items-center gap-1">
                <MapPin size={16} className="text-[#717171]" />
                <span 
                  className="font-[Inter]"
                  style={{
                    fontWeight: 400,
                    fontSize: "11.9px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    color: "#717171",
                  }}
                >
                  {route.stoppages} Stoppages
                </span>
              </div>
              <div className="flex items-center gap-1">
                <Bus size={16} className="text-[#717171] " />
                <span 
                  className="font-[Inter]"
                  style={{
                    fontWeight: 400,
                    fontSize: "11.9px",
                    lineHeight: "20px",
                    letterSpacing: "0%",
                    color: "#717171",
                  }}
                >
                  {route.vehicles} Vehicles
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Routes;