import React from "react";
import logo from "../../../../assets/logo.svg";

const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"}`}>
      <div className="flex items-start gap-2 max-w-[75%] flex-col">
        <div
          className={`flex ${
            isUser ? "justify-end self-end" : "justify-start"
          }`}
        >
          {!isUser && (
            <img
              src={logo}
              alt="Bot"
              className="w-8 h-8 rounded-full object-cover mr-2"
            />
          )}

          <div
            className={`px-4 py-2 text-sm ${
              isUser
                ? "bg-[#FAFCFD] font-[Inter] text-[16px] rounded-lg shadow text-[#1F1D1D]"
                : "text-[#1F1D1D] font-[Inter] text-[16px]"
            }`}
          >
            <p>{message.text}</p>
          </div>
        </div>

        {/* Attachments below bubble */}
        {message.attachments?.length > 0 && (
          <div className="mt-2 space-y-1">
            {message.attachments.map((file, idx) => (
              <div
                key={idx}
                className="flex items-center gap-2 text-xs bg-gray-100 p-1 rounded border border-gray-300"
              >
                <span className="text-red-500 font-bold">PDF</span>
                <span>{file.name}</span>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
