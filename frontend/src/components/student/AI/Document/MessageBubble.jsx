import React from "react";
import logo from "../../../../assets/logo.svg";

const MessageBubble = ({ message }) => {
  const isUser = message.sender === "user";

  return (
    <div className={`flex ${isUser ? "justify-end" : "justify-start"} mb-4`}>
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
            className={`px-4 py-2 text-sm rounded-lg shadow ${
              isUser
                ? "bg-[#FAFCFD] text-[#1F1D1D]"
                : "bg-gray-200 text-[#1F1D1D]"
            } font-[Inter] text-[16px]`}
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
                className="flex items-center gap-2 p-2 rounded-lg border border-gray-300 bg-white"
              >
                <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                  <span className="text-red-600 text-xs font-bold">PDF</span>
                </div>
                <div>
                  <p className="text-xs font-medium text-[#1F1D1D]">
                    {file.name}
                  </p>
                  <p className="text-xs text-[#717171]">{file.size}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
};

export default MessageBubble;
