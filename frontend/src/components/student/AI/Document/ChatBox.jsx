import React from "react";
import ChatBody from "./ChatBody";
import ChatInput from "./ChatInput";

export default function ChatBox() {
  return (
    <div className="flex flex-col h-full border-l bg-white shadow-md rounded-lg">
      {/* Body with messages or upload UI */}
      <div className="flex-1 overflow-y-auto px-4 py-6">
        <ChatBody />
      </div>

      {/* Input area at the bottom */}
      <div className="border-t px-4 py-3">
        <ChatInput />
      </div>
    </div>
  );
}
