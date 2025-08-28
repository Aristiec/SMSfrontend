import React from "react";

const SuggestionButtons = ({ suggestions, isFullscreen, isSidebarOpen }) => (
  <div className="space-y-4">
    <div
      className={`grid gap-4 px-4 sm:px-0
        ${
          isFullscreen
            ? "grid-cols-1 sm:grid-cols-2 lg:grid-cols-2"
            : "grid-cols-1"
        }
        ${isFullscreen && !isSidebarOpen ? "mx-auto justify-center" : ""}
      `}
      style={{
        maxWidth: isFullscreen && !isSidebarOpen ? "1000px" : "100%",
      }}
    >
      {suggestions.map((item, i) => (
        <button
          key={i}
          className="text-left w-full hover:bg-[#e6edf5] transition"
          style={{
            borderRadius: "8px",
            gap: "12px",
            borderWidth: "0.2px",
            borderColor: "rgba(0,0,0,0.1)",
            borderStyle: "solid",
            padding: "12px 16px",
            backgroundColor: "#F4F7FA",
            boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
          }}
        >
          <span className="font-semibold text-[16px] font-[Inter] text-[#1F1D1D]">
            {item.title}
          </span>
          <br />
          <span className="text-[#717171] text-[14px] font-[Inter]">
            {item.subtitle}
          </span>
        </button>
      ))}
    </div>
  </div>
);

export default SuggestionButtons;
