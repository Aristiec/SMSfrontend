import React from "react";
import MessageBubble from "./MessageBubble";
import AttachmentList from "./AttachmentList";
import logo from "../../../../assets/logo.svg";
import { FolderPlus } from "lucide-react";
const ChatBody = ({ activeChat }) => {
  const hasMessages = activeChat?.messages?.length > 0;
  const hasAttachments = activeChat?.attachments?.length > 0;

  const handleLogoError = (e) => {
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%234F46E5'/%3E%3C/svg%3E";
  };

  if (hasMessages) {
    return (
      <div className="space-y-4" role="log" aria-label="Chat messages">
        {activeChat.messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        {hasAttachments && (
          <AttachmentList attachments={activeChat.attachments} />
        )}
      </div>
    );
  }

  return (
    <div className="flex items-center justify-center h-full px-4">
      <div className="text-center mb-6 max-w-md">
        <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden ">
          <img
            src={logo}
            alt="Document Assistant Avatar"
            className="w-full h-full object-cover"
            onError={handleLogoError}
          />
        </div>

        <h3 className="text-[16px] font-[Inter] text-[#1F1D1D] font-bold mb-2">
          Hi there! I'm your Document Assistant
        </h3>
        <p className="text-[#717171] text-[14px] font-[Inter] mb-6 leading-relaxed">
          Upload a file to summarize, explain, or ask anything about your study
          material.
        </p>

        {/* File upload area */}
        <div className="flex flex-col items-center">
          <button className="bg-[#04203E] font-[Inter] text-[14px] font-medium text-[#FAFCFD] px-4 py-2 rounded-lg  mb-2 flex items-center gap-2">
            <FolderPlus className="w-4 h-4" />
            Choose File
          </button>

          <p className="text-[14px] text-[#717171] font-[Inter]">
            or Drag & Drop your PDF here
          </p>
        </div>
      </div>
    </div>
  );
};

export default ChatBody;
