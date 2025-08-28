import React from "react";
import logo from "../../../../assets/logo.svg";

const MessageBubble = ({ message }) => {
  const isUser = message.role === "user"; // changed from sender
  const text = message.content; // changed from text

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
      <div className="flex items-start gap-2 max-w-[75%] flex-col">
        <div className={`flex ${isUser ? "justify-end self-end" : "justify-start"}`}>
          {!isUser && (
            <img
              src={logo}
              alt="Bot"
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
          )}

          <div
            className={`px-4 py-2 text-sm rounded-lg shadow ${
              isUser
                ? "bg-[#FAFCFD] text-[#1F1D1D]"
                : "bg-gray-200 text-[#1F1D1D]"
            } font-[Inter] text-[16px]`}
          >
            <p>{text}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MessageBubble;
