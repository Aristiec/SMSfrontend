import React, { useState } from "react";
import { Edit, Trash2, MapPin, Bus, X, AlertTriangle } from "lucide-react";

const initialRoutesData = [
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

const Routes = ({ routes, setRoutes }) => {
  // const [routes, setRoutes] = useState(initialRoutesData);
  const [showConfirm, setShowConfirm] = useState(false);
  const [selectedRoute, setSelectedRoute] = useState(null);

  const handleDeleteClick = (route) => {
    setSelectedRoute(route);
    setShowConfirm(true);
  };

  const handleRemove = () => {
    setRoutes(routes.filter((r) => r.id !== selectedRoute.id));
    setShowConfirm(false);
    setSelectedRoute(null);
  };

  return (
    <div className="flex flex-col   bg-[#FAFCFD] font-[Inter] rounded-[12px]">
      {/* Header */}
      <div className="mb-6">
        <h2 className="text-[18px] font-semibold text-[#1F1D1D] font-[Inter]">
          Routes
        </h2>
      </div>

      <div
        className="flex  flex-col md:flex-row justify-center"
        style={{ gap: "23px", opacity: 1 }}
      >
        {routes.map((route) => (
          <div
            key={route.id}
            className="flex  flex-col w-full md:w-1/3"
            style={{
              borderRadius: "8px",
              padding: "24px",
              gap: "24px",
              opacity: 1,
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
                <button
                  className="p-1"
                  onClick={() => handleDeleteClick(route)}
                >
                  <Trash2 size={16} className="text-[#FF3B30]" />
                </button>
              </div>
            </div>

            {/* Route Path */}
            <div className="flex flex-col" style={{ gap: "8px", opacity: 1 }}>
              <div className="flex items-center relative">
                <div className="w-2 h-2 bg-[#0077FF] rounded-full z-10"></div>
                <div
                  className="flex-1 h-[2px] mx-2"
                  style={{ backgroundColor: "#CFDCEB" }}
                ></div>
                <div className="w-2 h-2 bg-[#0077FF] rounded-full z-10"></div>
              </div>
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

      {/* Confirm Popup */}
      {showConfirm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
          <div className="bg-white rounded-lg shadow-lg p-6 w-[400px] relative">
            {/* Close Button */}
            <button
              onClick={() => setShowConfirm(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-black"
            >
              <X size={18} />
            </button>

            <div className="flex items-center gap-2 mb-4">
              <AlertTriangle className="text-red-500" size={20} />
              <h2 className="text-lg font-semibold text-gray-900">
                Remove Route
              </h2>
            </div>

            <p className="text-sm text-gray-600 mb-2">
              Are you sure you want to remove route "
              <span className="font-medium">{selectedRoute?.title}</span>"?
            </p>
            <p className="text-xs text-red-500 mb-4">
              This action cannot be undone.
            </p>

            <div className="flex justify-end gap-2">
              <button
                onClick={() => setShowConfirm(false)}
                className="px-4 py-2 rounded-md border border-gray-300 text-gray-700"
              >
                Cancel
              </button>
              <button
                onClick={handleRemove}
                className="px-4 py-2 rounded-md bg-red-600 text-white"
              >
                Remove
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Routes;
