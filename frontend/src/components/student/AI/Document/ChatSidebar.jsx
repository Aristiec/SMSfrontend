import React from "react";
import { X, MessageSquare, MoreHorizontal } from "lucide-react";

const ChatSidebar = ({ chatHistory, activeChat, onClose, onChatClick }) => (
  <div
    className="bg-[#E9EEF4] shadow-lg flex flex-col"
    style={{ width: "348px", height: "100vh" }}
  >
    <div className="bg-[#CFDCEB] flex items-center justify-between px-4 py-5">
      <h3 className="text-[20px] font-semibold text-[#1F1D1D]">Chat History</h3>
      <X size={20} className="cursor-pointer" onClick={onClose} />
    </div>
    <div className="p-4 space-y-3 overflow-y-auto flex-1">
      {chatHistory.map((chat) => (
        <div
          key={chat.id}
          className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition ${
            activeChat.id === chat.id ? "bg-[#dbe3ec]" : "hover:bg-[#dbe3ec]"
          }`}
          onClick={() => onChatClick(chat)}
        >
          <div className="flex items-center space-x-2 flex-1 min-w-0">
            <MessageSquare size={18} />
            <p className="text-sm truncate">{chat.title}</p>
          </div>
          <MoreHorizontal size={16} />
        </div>
      ))}
    </div>
    <div className="px-4 py-4 border-t">
      <button
        className="w-full bg-[#04203E] text-white flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
        onClick={() => onChatClick(chatHistory[0])}
      >
        <MessageSquare size={16} />
        <span className="text-sm">Start a New Chat</span>
      </button>
    </div>
  </div>
);

export default ChatSidebar;
