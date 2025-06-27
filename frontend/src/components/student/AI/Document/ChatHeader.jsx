import React from "react";
import { MoveDiagonal, X, Menu } from "lucide-react";

const ChatHeader = ({
  activeChat,
  isFullscreen,
  isSidebarOpen,
  onToggleFullscreen,
  onClose,
  onOpenSidebar,
}) => (
  <div
    className="bg-[#CFDCEB] flex items-center justify-between px-4 py-4"
    style={{ height: "72px", flexShrink: 0 }}
  >
    {/* Left - Sidebar toggle */}
    <div className="w-[40px] flex justify-start">
      {!isSidebarOpen && (
        <Menu
          size={20}
          className="text-gray-600 cursor-pointer"
          onClick={onOpenSidebar}
        />
      )}
    </div>

    {/* Center - Title */}
    <div className="flex-1 text-center">
      <h2 className="text-[20px] md:text-[24px] font-[Inter] font-semibold text-[#1F1D1D] truncate">
        {activeChat.title === "New Chat" ? "Aristiec" : activeChat.title}
      </h2>
    </div>

    {/* Right - Actions */}
    <div className="w-[72px] flex justify-end space-x-3">
      <MoveDiagonal
        size={20}
        className="text-gray-600 cursor-pointer"
        onClick={onToggleFullscreen}
      />
      <X size={20} className="text-gray-600 cursor-pointer" onClick={onClose} />
    </div>
  </div>
);

export default ChatHeader;
