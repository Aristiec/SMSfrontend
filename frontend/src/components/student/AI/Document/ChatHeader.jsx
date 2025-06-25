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
    className="bg-[#CFDCEB] flex items-center px-4 py-4 relative"
    style={{ height: "72px", flexShrink: 0 }}
  >
    {!isSidebarOpen && (
      <div className="absolute left-4 top-1/2 -translate-y-1/2">
        <Menu
          size={20}
          className="text-gray-600 cursor-pointer"
          onClick={onOpenSidebar}
        />
      </div>
    )}

    {!isSidebarOpen && (
      <div className="flex-1 text-center">
        <h2 className="text-[24px] font-[Inter] font-semibold text-[#1F1D1D]">
          {activeChat.title === "New Chat" ? "Aristiec" : activeChat.title}
        </h2>
      </div>
    )}

    <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-3">
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
