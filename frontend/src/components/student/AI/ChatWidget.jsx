import React, { useState } from "react";
import {
  X,
  MoveDiagonal,
  Menu,
  Paperclip,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import { useEffect } from "react";

const suggestions = [
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
  { title: "Design a database schema", subtitle: "for an online merch store" },
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
];

const chatHistory = [
  { id: 1, title: "New Chat" },
  { id: 2, title: "User Seeks Help with ..." },
  { id: 3, title: "Web accessibility" },
  { id: 4, title: "Design inspiration" },
  { id: 5, title: "What is learning machine" },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  useEffect(() => {
    if (isFullscreen) {
      setIsSidebarOpen(true);
    }
  }, [isFullscreen]);
  if (!isOpen) return null;

  return (
    <div
      className="fixed top-0 right-0 z-50 shadow-xl transition-all duration-300 ease-in-out"
      style={{
        width: isFullscreen ? "100vw" : "560px",
        height: "100vh",
        background:
          "linear-gradient(196.87deg, #E9EEF4 9.57%, #CFDCEB 28.6%, #F4F7FA 74.26%)",
        display: "flex",
        flexDirection: "row", // row instead of column to support push
      }}
    >
      {/* Sidebar if open */}
      {isSidebarOpen && (
        <>
          {!isFullscreen && (
            <div
              className="absolute inset-0 bg-[#1F1D1D66] z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          <div
            className={`${
              isFullscreen ? "relative" : "absolute"
            } top-0 left-0 z-50 bg-[#E9EEF4] shadow-lg flex flex-col`}
            style={{ width: "348px", height: "100vh" }}
          >
            {/* Sidebar Header */}
            <div className="bg-[#CFDCEB] flex items-center justify-between px-4 py-5">
              <h3 className="text-[20px] font-semibold text-[#1F1D1D]">
                Chat History
              </h3>
              <X
                size={20}
                className="text-[#1F1D1D] cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>

            {/* Sidebar Chat List */}
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-center justify-between px-3 py-2 rounded-lg hover:bg-[#dbe3ec] cursor-pointer"
                >
                  <div className="flex items-center space-x-2">
                    <MessageSquare size={18} className="text-[#1F1D1D]" />
                    <p className="text-sm text-[#1F1D1D]">{chat.title}</p>
                  </div>
                  <MoreHorizontal size={16} className="text-[#1F1D1D]" />
                </div>
              ))}
            </div>

            {/* Sidebar Footer */}
            <div
              className="px-4 py-4 border-t relative"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              {/* Blur line effect */}
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent blur-sm" />

              <button className="w-full bg-[#04203E] text-white flex items-center justify-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#16314f] transition">
                <MessageSquare size={16} />
                <span className="text-sm font-medium">Start a New Chat</span>
              </button>
            </div>
          </div>
        </>
      )}
      {/* Main Chat Area */}
      <div
        className="flex flex-col transition-all duration-300 ease-in-out"
        style={{
          width: "100%",
          marginLeft: isFullscreen && isSidebarOpen ? "0px" : "0", // no need to push since in flex row
        }}
      >
        {/* Header */}
        <div
          className="bg-[#CFDCEB] flex items-center px-4 py-4 relative"
          style={{ height: "72px", flexShrink: 0 }}
        >
          {(!isFullscreen || (isFullscreen && !isSidebarOpen)) && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Menu
                size={20}
                className="text-gray-600 cursor-pointer"
                onClick={() => setIsSidebarOpen(true)}
              />
            </div>
          )}

          <div className="mx-auto">
            <h2 className="text-[24px] font-[Inter] font-semibold text-[#1F1D1D]">
              Aristiec
            </h2>
          </div>
          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-3">
            <MoveDiagonal
              size={20}
              className="text-gray-600 cursor-pointer"
              onClick={() => setIsFullscreen((prev) => !prev)}
            />

            <X
              size={20}
              className="text-gray-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        {/* Scrollable Chat Body */}
        <div className="flex-1 overflow-y-auto p-6">
          <div className="text-center">
            <img
              src="https://cdn-icons-png.flaticon.com/512/4712/4712109.png"
              alt="Bot Logo"
              className="w-16 mx-auto mb-4"
            />
            <h3 className="text-[16px] font-[Inter] text-[#1F1D1D] font-bold">
              How can I help you today?
            </h3>
            <p className="text-[#717171] text-[14px] font-[Inter] mb-6">
              Choose a suggestion below or ask me anything
            </p>
          </div>

          <div className="space-y-4">
            <div
              className={`grid gap-4 ${
                isFullscreen ? "grid-cols-2" : "grid-cols-1"
              } ${isFullscreen && !isSidebarOpen ? "mx-auto" : ""}`}
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
                    borderColor: isFullscreen
                      ? "rgba(0,0,0,0.1)"
                      : "transparent",
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
        </div>

        {/* Footer */}
        <div
          className={`flex items-center bg-[#FAFCFD] rounded-[12px] ${
            isFullscreen && !isSidebarOpen
              ? "mx-auto"
              : !isFullscreen && !isSidebarOpen
              ? "ml-[12px]"
              : "ml-3 mr-3"
          }`}
          style={{
            width:
              isFullscreen && !isSidebarOpen
                ? "1044px"
                : !isFullscreen && !isSidebarOpen
                ? "536px"
                : "100%",
            height: "80px",
            padding: "16px",
            gap: "10px",
            position: "relative",
            top: !isFullscreen && !isSidebarOpen ? "12px" : "0",
          }}
        >
          <button className="text-gray-600 p-2 rounded-full hover:bg-gray-100">
            <Paperclip size={18} />
          </button>
          <input
            type="text"
            placeholder="Ask anything"
            className="flex-1 border rounded-full px-4 py-2 outline-none"
          />
          <button className="bg-[#1a3b5d] text-white p-2 rounded-full">
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4 rotate-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
