import React from "react";

const SuggestionButtons = ({ suggestions, isFullscreen, isSidebarOpen }) => (
  <div className="space-y-4">
    <div
      className={`grid gap-4 ${isFullscreen ? "grid-cols-2" : "grid-cols-1"} ${
        isFullscreen && !isSidebarOpen ? "mx-auto" : ""
      }`}
      style={{
        maxWidth: isFullscreen && !isSidebarOpen ? "1000px" : "100%",
      }}
    >
      {suggestions.map((item, i) => (
        <button
          key={i}
          className="text-left w-full hover:bg-[#e6edf5] transition"
          style={{
            width: isFullscreen ? "480px" : "100%",
            height: isFullscreen ? "68px" : "auto",
            borderRadius: isFullscreen ? "8px" : "6px",
            gap: isFullscreen ? "12px" : "8px",
            borderWidth: isFullscreen ? "0.2px" : "0",
            borderColor: isFullscreen ? "rgba(0,0,0,0.1)" : "transparent",
            borderStyle: "solid",
            padding: isFullscreen ? "12px 16px" : "12px 14px",
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
