import React from "react";
import MessageBubble from "./MessageBubble";
import AttachmentList from "./AttachmentList";
import SuggestionButtons from "./SuggestionButtons";
import logo from "../../../../assets/logo.svg";

const ChatBody = ({ activeChat, suggestions, isFullscreen, isSidebarOpen }) => {
  const hasMessages = activeChat.messages?.length > 0;

  if (hasMessages) {
    return (
      <div className="space-y-4">
        {activeChat.messages.map((msg) => (
          <MessageBubble key={msg.id} message={msg} />
        ))}
        <AttachmentList attachments={activeChat.attachments} />
      </div>
    );
  }

  return (
    <div>
      <div className="text-center mb-6">
        <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
          <img
            src={logo}
            alt="Bot Avatar"
            className="w-full h-full object-cover"
          />
        </div>

        <h3 className="text-[16px] font-[Inter] text-[#1F1D1D] font-bold">
          How can I help you today?
        </h3>
        <p className="text-[#717171] text-[14px] font-[Inter] mb-6">
          Choose a suggestion below or ask me anything
        </p>
      </div>
      <SuggestionButtons
        suggestions={suggestions}
        isFullscreen={isFullscreen}
        isSidebarOpen={isSidebarOpen}
      />
    </div>
  );
};

export default ChatBody;
