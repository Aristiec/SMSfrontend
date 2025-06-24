import React, { useState } from "react";
import {
  X,
  Menu,
  MessageSquare,
  Plus,
  Send,
  MoreHorizontal,
} from "lucide-react";

const ChatInterface = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);

  const chatHistory = [
    { id: 1, title: "New Chat" },
    { id: 2, title: "User Seeks Help with ..." },
    { id: 3, title: "Web accessibility" },
    { id: 4, title: "Design inspiration" },
    { id: 5, title: "What is learning machine" },
  ];

  const suggestions = [
    { title: "Explain airplane", subtitle: "to someone 5 years old" },
    {
      title: "Design a database schema",
      subtitle: "for an online merch store",
    },
    { title: "Explain airplane", subtitle: "to someone 5 years old" },
    { title: "Explain airplane", subtitle: "to someone 5 years old" },
    { title: "Explain airplane", subtitle: "to someone 5 years old" },
  ];

  return (
    <div className="relative">
      {/* Overlay */}
      {isSidebarOpen && (
        <div
          className="fixed inset-0 bg-[#1F1D1D66] z-40"
          onClick={() => setIsSidebarOpen(false)}
        />
      )}

      {/* Main Chat Interface */}
      <div
        className={`${
          isFullscreen ? "fixed inset-0 z-50" : "fixed z-50"
        } flex border border-gray-200`}
        style={{
          width: isFullscreen ? "100vw" : "560px",
          height: "100vh", // <-- fix here
          left: isFullscreen ? "0" : "880px",
          background: isFullscreen
            ? "white"
            : "linear-gradient(196.87deg, #E9EEF4 9.57%, #CFDCEB 28.6%, #F4F7FA 74.26%)",
          borderRadius: isFullscreen ? "0" : "12px 0 0 12px",
          flexDirection: "row",
          overflow: "hidden",
        }}
      >
        {/* Sidebar */}
        <div
          style={{
            width: isSidebarOpen ? "348px" : "0px",
            height: "100vh",
          }}
          className="absolute left-0 top-0 z-50 transition-all duration-300 bg-white border-r border-gray-200 overflow-hidden"
        >
          <div className="w-[348px] relative h-full">
            <div className="flex items-center justify-between p-4 border-b border-gray-200">
              <h2 className="font-semibold text-gray-900">Chat History</h2>
              <button
                onClick={() => setIsSidebarOpen(false)}
                className="p-1 hover:bg-gray-100 rounded"
              >
                <X className="w-5 h-5 text-gray-500" />
              </button>
            </div>

            <div
              className="p-4 space-y-2 overflow-y-auto"
              style={{ maxHeight: "calc(1024px - 160px)" }} // header + bottom
            >
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className="flex items-center justify-between p-3 hover:bg-gray-50 rounded-lg cursor-pointer group"
                >
                  <div className="flex items-center space-x-3">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    <span className="text-sm text-gray-700 truncate">
                      {chat.title}
                    </span>
                  </div>
                  <button className="opacity-0 group-hover:opacity-100 p-1 hover:bg-gray-200 rounded">
                    <MoreHorizontal className="w-4 h-4 text-gray-400" />
                  </button>
                </div>
              ))}
            </div>

            <div className="absolute bottom-0 left-0 right-0 p-4 bg-white border-t border-gray-200">
              <button className="flex items-center space-x-2 w-full p-3 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                <Plus className="w-4 h-4" />
                <span className="text-sm font-medium">Start a new chat</span>
              </button>
            </div>
          </div>
        </div>

        {/* Main Content */}
        <div className="flex-1 flex flex-col h-full">
          {/* Header */}
          <div
            className="flex items-center justify-between p-4 bg-white border-b border-gray-200"
            style={{ height: "64px" }}
          >
            <button
              onClick={() => setIsSidebarOpen(true)}
              className="p-2 hover:bg-gray-100 rounded-lg"
            >
              <Menu className="w-5 h-5 text-gray-600" />
            </button>

            <h1 className="text-lg font-semibold text-gray-900">Artistec</h1>

            <div className="flex items-center space-x-2">
              <button
                onClick={() => setIsFullscreen(!isFullscreen)}
                className="p-2 hover:bg-gray-100 rounded-lg"
              >
                <svg
                  className="w-5 h-5 text-gray-600"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 8V4m0 0h4M4 4l5 5m11-1V4m0 0h-4m4 0l-5 5M4 16v4m0 0h4m-4 0l5-5m11 5l-5-5m5 5v-4m0 4h-4"
                  />
                </svg>
              </button>
              <button className="p-2 hover:bg-gray-100 rounded-lg">
                <X className="w-5 h-5 text-gray-600" />
              </button>
            </div>
          </div>

          {/* Scrollable Chat Body */}
          <div
            className="flex-1 overflow-y-auto px-4 py-6"
            style={{
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <div className="w-16 h-16 bg-blue-600 rounded-full flex items-center justify-center mb-8">
              <svg
                className="w-8 h-8 text-white"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.94-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z" />
              </svg>
            </div>

            <h2 className="text-2xl font-semibold text-gray-900 mb-2">
              How can I help you today?
            </h2>
            <p className="text-gray-500 mb-8 text-center">
              Choose a suggestion below or ask me anything
            </p>

            <div
              className="w-full grid grid-cols-2 gap-4"
              style={{ maxHeight: "300px", overflowY: "auto" }}
            >
              {suggestions.map((suggestion, index) => (
                <button
                  key={index}
                  className="p-4 bg-white border border-gray-200 rounded-xl hover:border-gray-300 hover:shadow-sm transition-all text-left group"
                >
                  <div className="font-medium text-gray-900 mb-1">
                    {suggestion.title}
                  </div>
                  <div className="text-sm text-gray-500">
                    {suggestion.subtitle}
                  </div>
                </button>
              ))}
            </div>
          </div>

          {/* Footer Input */}
          <div
            className="p-4 bg-white border-t border-gray-200"
            style={{ height: "80px", flexShrink: 0 }}
          >
            <div className="max-w-4xl mx-auto">
              <div className="flex items-center space-x-3">
                <button className="p-3 hover:bg-gray-100 rounded-lg transition-colors">
                  <Plus className="w-5 h-5 text-gray-500" />
                </button>

                <div className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Ask anything"
                    className="w-full px-4 py-3 pr-12 border border-gray-300 rounded-full focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-transparent"
                  />
                  <button className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-blue-600 text-white rounded-full hover:bg-blue-700 transition-colors">
                    <Send className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatInterface;
