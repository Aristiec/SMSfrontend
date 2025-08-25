import React, { useState } from "react";
import { MapPin, Trash, Clock, Save, X, Plus } from "lucide-react";

export default function AddRoutePopup({ onClose, onSaveRoute }) {
  const [stops, setStops] = useState([
    {
      id: 1,
      name: "Laxmi Nagar Metro Station",
      distance: "0.0 km",
      time: "08:00 AM",
    },
    { id: 2, name: "Bus Stop", distance: "2.3 km", time: "08:12 AM" },
    { id: 3, name: "University Campus", distance: "18.7 km", time: "09:00 AM" },
  ]);

  const removeStop = (id) => {
    setStops(stops.filter((stop) => stop.id !== id));
  };
  const addStop = () => {
    const newStop = {
      id: Date.now(), // unique id
      name: `New Stop ${stops.length + 1}`,
      distance: "0.0 km",
      time: "00:00 AM",
    };
    setStops([...stops, newStop]);
  };
  const handleSave = () => {
    const newRoute = {
      id: `R${Date.now()}`, // unique id
      title: document.getElementById("routeName").value || "New Route",
      startPoint: document.getElementById("startPoint").value || "Start",
      endPoint: document.getElementById("endPoint").value || "End",
      description: document.getElementById("description").value || "",
      stoppages: stops.length,
      vehicles: 0,
    };

    if (onSaveRoute) {
      onSaveRoute(newRoute); // send route back to LowerSection
    }

    onClose(); // close the popup
  };
  return (
    <div className="fixed inset-0  flex items-center justify-center bg-black/30 z-50  ">
      <div className="bg-white rounded-lg shadow-lg w-full max-w-xl p-6 relative">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#717171] hover:text-gray-700"
        >
          <X />
        </button>

        {/* Header */}
        <h2 className="text-xl text-[#1F1D1D] font-medium mb-2">Add Route</h2>

        {/* Route Name */}
        <div className="mb-2">
          <label className="block text-[#717171] text-sm font-[Inter] mb-1">
            Route Name
          </label>
          <input
            id="routeName"
            type="text"
            defaultValue="Route B"
            className="w-full border border-[#71717166] text-black rounded-md px-2 py-1 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        {/* Start & End Point */}
        <div className="grid grid-cols-2 gap-3 mb-4">
          <div>
            <label className="block text-[#717171] text-sm font-[Inter] mb-1">
              Start Point
            </label>
            <div className="flex items-center gap-2">
              {/* Input Field */}
              <input
                id="startPoint"
                type="text"
                defaultValue="Laxmi Nagar Metro"
                className="flex-1 px-3 py-2 border border-[#71717166] text-black  rounded-md focus:outline-none"
              />

              {/* Map Pin Button Outside */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="60"
                viewBox="0 0 52 60"
                fill="none"
              >
                <g filter="url(#filter0_d_4979_25474)">
                  <rect
                    x="8"
                    y="4.00049"
                    width="36"
                    height="43.9997"
                    rx="12"
                    fill="#04203E"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M34 24.0005C34 28.9935 28.461 34.1935 26.601 35.7995C26.4277 35.9298 26.2168 36.0002 26 36.0002C25.7832 36.0002 25.5723 35.9298 25.399 35.7995C23.539 34.1935 18 28.9935 18 24.0005C18 21.8788 18.8429 19.8439 20.3431 18.3436C21.8434 16.8433 23.8783 16.0005 26 16.0005C28.1217 16.0005 30.1566 16.8433 31.6569 18.3436C33.1571 19.8439 34 21.8788 34 24.0005Z"
                    stroke="#FAFCFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26 27.0005C27.6569 27.0005 29 25.6573 29 24.0005C29 22.3436 27.6569 21.0005 26 21.0005C24.3431 21.0005 23 22.3436 23 24.0005C23 25.6573 24.3431 27.0005 26 27.0005Z"
                    stroke="#FAFCFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4979_25474"
                    x="0"
                    y="0.000488281"
                    width="52"
                    height="59.9995"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4979_25474"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4979_25474"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>

          <div>
            <label className="block text-[#717171] text-sm font-[Inter] mb-1">
              End Point
            </label>
            <div className="flex items-center gap-2">
              {/* Input Field */}
              <input
                id="endPoint"
                type="text"
                defaultValue="University Campus"
                className="flex-1 px-3 py-2 border  border-[#71717166] text-black  rounded-md focus:outline-none"
              />

              {/* Map Pin Button Outside */}
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="52"
                height="60"
                viewBox="0 0 52 60"
                fill="none"
              >
                <g filter="url(#filter0_d_4979_25474)">
                  <rect
                    x="8"
                    y="4.00049"
                    width="36"
                    height="43.9997"
                    rx="12"
                    fill="#04203E"
                    shapeRendering="crispEdges"
                  />
                  <path
                    d="M34 24.0005C34 28.9935 28.461 34.1935 26.601 35.7995C26.4277 35.9298 26.2168 36.0002 26 36.0002C25.7832 36.0002 25.5723 35.9298 25.399 35.7995C23.539 34.1935 18 28.9935 18 24.0005C18 21.8788 18.8429 19.8439 20.3431 18.3436C21.8434 16.8433 23.8783 16.0005 26 16.0005C28.1217 16.0005 30.1566 16.8433 31.6569 18.3436C33.1571 19.8439 34 21.8788 34 24.0005Z"
                    stroke="#FAFCFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M26 27.0005C27.6569 27.0005 29 25.6573 29 24.0005C29 22.3436 27.6569 21.0005 26 21.0005C24.3431 21.0005 23 22.3436 23 24.0005C23 25.6573 24.3431 27.0005 26 27.0005Z"
                    stroke="#FAFCFD"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </g>
                <defs>
                  <filter
                    id="filter0_d_4979_25474"
                    x="0"
                    y="0.000488281"
                    width="52"
                    height="59.9995"
                    filterUnits="userSpaceOnUse"
                    colorInterpolationFilters="sRGB"
                  >
                    <feFlood floodOpacity="0" result="BackgroundImageFix" />
                    <feColorMatrix
                      in="SourceAlpha"
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                      result="hardAlpha"
                    />
                    <feOffset dy="4" />
                    <feGaussianBlur stdDeviation="4" />
                    <feComposite in2="hardAlpha" operator="out" />
                    <feColorMatrix
                      type="matrix"
                      values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                    />
                    <feBlend
                      mode="normal"
                      in2="BackgroundImageFix"
                      result="effect1_dropShadow_4979_25474"
                    />
                    <feBlend
                      mode="normal"
                      in="SourceGraphic"
                      in2="effect1_dropShadow_4979_25474"
                      result="shape"
                    />
                  </filter>
                </defs>
              </svg>
            </div>
          </div>
        </div>

        {/* Start Time */}
        <div className="mb-4">
          <label className="block text-[#717171] text-sm font-[Inter] mb-1">
            Start Time
          </label>
          <input
            type="text"
            defaultValue="08:00 AM"
            className="w-full border  border-[#71717166] text-black  rounded-md px-2 py-1 focus:outline-none"
          />
        </div>

        {/* Stops */}
        <div className="mb-4">
          <div className="flex items-center justify-between mb-2">
            <p className="font-medium ">Stops</p>
            <button
              onClick={addStop}
              className="px-3 py-1 bg-[#001F3F] text-white rounded-md"
            >
              <Plus size={20} className="inline-block mr-1" />
              Add Stop
            </button>
          </div>

          <div className="space-y-2">
            {stops.map((stop) => (
              <div
                key={stop.id}
                className="flex items-center justify-between p-2 bg-gray-50 "
              >
                <div>
                  <p className="font-medium flex items-center gap-2">
                    <MapPin size={16} className="text-black font-extrabold" />
                    {stop.name}
                  </p>
                  <p className="text-sm text-gray-500 flex items-center gap-3 mt-1">
                    Distance: {stop.distance}
                    <span className="flex items-center  text-[#717171] gap-1">
                      <Clock size={14} /> {stop.time}
                    </span>
                  </p>
                </div>
                <button
                  onClick={() => removeStop(stop.id)}
                  className="text-red-500 hover:text-red-700"
                >
                  <Trash size={18} />
                </button>
              </div>
            ))}
          </div>
        </div>

        {/* Description */}
        <div className="mb-6">
          <label className="block text-sm font-medium mb-1">
            Description (Optional)
          </label>
          <input
            id="description"
            type="text"
            defaultValue="Central route for downtown students"
            className="w-full border border-[#71717166] text-black rounded-md px-3 py-2 focus:outline-none"
          />
        </div>

        {/* Save Button */}
        <div className="flex justify-end pt-6">
          <button
            type="submit"
            className="px-4 py-3 bg-[#04203E] text-white rounded-[8px] text-[14px] font-medium  flex items-center gap-2"
            onClick={handleSave}
          >
            <Save className="w-4 h-4 " />
            Save
          </button>
        </div>
      </div>
    </div>
  );
}
