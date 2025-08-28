import React, { useState, useEffect, useRef } from "react";
import { X, Send, Paperclip } from "lucide-react";

const predefinedFlow = [
  {
    id: "q1",
    sender: "IT Support (Admin)",
    message: "Hi! Can you briefly describe the issue you're facing with the portal?",
    timestamp: null,
    isUser: false,
  },
  {
    id: "q2",
    sender: "IT Support (Admin)",
    message: "Got it. Could you provide your student ID?",
    timestamp: null,
    isUser: false,
  },
  {
    id: "q3",
    sender: "IT Support (Admin)",
    message: "Have you tried resetting your password? If yes, when?",
    timestamp: null,
    isUser: false,
  },
  {
    id: "q4",
    sender: "IT Support (Admin)",
    message: "Any error messages displayed when you attempt login?",
    timestamp: null,
    isUser: false,
  },
  {
    id: "q5",
    sender: "IT Support (Admin)",
    message: "Thanks. I'll escalate and get back to you shortly.",
    timestamp: null,
    isUser: false,
  },
];

const StudentChat = ({ isOpen, onClose, ticket }) => {
  const [message, setMessage] = useState("");
  const [chatMessages, setChatMessages] = useState([
    {
      id: 1,
      sender: "Asha Singh (Me)",
      message:
        "I am unable to log into the student portal since yesterday. I have tried resetting my password but it still doesn't work.",
      timestamp: "7/12/2023, 10:30 AM",
      isUser: true,
    },
  ]);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const scrollRef = useRef(null);

  // On opening, inject first bot question if not already present
  useEffect(() => {
    if (isOpen && currentQuestionIndex === 0) {
      const firstQ = predefinedFlow[0];
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            ...firstQ,
            timestamp: new Date().toLocaleString([], {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }, 300); // slight delay to simulate bot typing
    }
  }, [isOpen]);

  // auto scroll to bottom when messages change
  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight + 100;
    }
  }, [chatMessages]);

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMsg = {
      id: Date.now(),
      sender: "Asha Singh (Me)",
      message: message.trim(),
      timestamp: new Date().toLocaleString([], {
        month: "numeric",
        day: "numeric",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
      isUser: true,
    };

    setChatMessages((prev) => [...prev, userMsg]);
    setMessage("");

    // Advance bot flow
    const nextIndex = currentQuestionIndex + 1;
    if (nextIndex < predefinedFlow.length) {
      setCurrentQuestionIndex(nextIndex);
      const nextQ = predefinedFlow[nextIndex];
      // simulate typing delay
      setTimeout(() => {
        setChatMessages((prev) => [
          ...prev,
          {
            ...nextQ,
            timestamp: new Date().toLocaleString([], {
              month: "numeric",
              day: "numeric",
              year: "numeric",
              hour: "2-digit",
              minute: "2-digit",
            }),
          },
        ]);
      }, 600);
    }
  };

  if (!isOpen) return null;

  return (
    <div className="fixed right-0 top-0 h-full w-[680px] bg-white shadow-lg z-50 flex flex-col">
      {/* Header */}
      <div className="bg-[#FAFCFD] p-[24px_12px] flex flex-col gap-2 border-b border-[#717171]">
        <div className="flex justify-between items-start">
          <div className="flex flex-col gap-[8px]">
            <h2 className="font-[Inter] font-semibold text-[20px] leading-[28px] text-[#1F1D1D]">
              Login Issues with Student Portal
            </h2>
            <span className="font-[Inter] font-normal text-[12px] leading-[18px] text-[#717171]">
              7/12/2023, 10:30:00 AM
            </span>
          </div>
          <button
            onClick={onClose}
            className="text-[#717171] hover:text-[#1F1D1D] transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>
      </div>

      {/* Department, Category & Status Info */}
      <div className="bg-[#F4F7FA] p-[24px] border-t border-b border-[#717171] flex justify-between">
        <div className="flex flex-col gap-4">
          <div className="flex flex-col gap-1">
            <span className="font-[Inter] font-normal text-[12px] leading-[16px] text-[#717171]">
              Department
            </span>
            <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#1F1D1D]">
              Admin
            </span>
          </div>
          <div className="flex flex-col gap-1">
            <span className="font-[Inter] font-normal text-[12px] leading-[16px] text-[#717171]">
              Status
            </span>
            <span className="bg-[#FFF4E6] text-[#FF8C00] px-3 py-1 rounded-full font-[Inter] font-medium text-[14px] leading-[18px] inline-block w-fit">
              Open
            </span>
          </div>
        </div>
        <div className="flex flex-col gap-1">
          <span className="font-[Inter] font-normal text-[12px] leading-[16px] text-[#717171]">
            Category
          </span>
          <span className="font-[Inter] font-medium text-[14px] leading-[18px] text-[#1F1D1D]">
            Technical
          </span>
        </div>
      </div>

      {/* Chat Messages */}
      <div
        ref={scrollRef}
        className="flex-1 overflow-y-auto p-4 space-y-4 bg-white"
      >
        {chatMessages.map((msg) => (
          <div
            key={msg.id}
            className={`flex flex-col ${
              msg.isUser ? "items-end" : "items-start"
            }`}
          >
            <div
              className={`max-w-[80%] gap-4 p-[20px_24px] rounded-[8px] break-words shadow-[0px_4px_8px_0px_rgba(0,0,0,0.12)] ${
                msg.isUser
                  ? "bg-[#E9EEF4] text-[#1F1D1D]"
                  : "bg-[#FAFCFD] text-[#1F1D1D]"
              }`}
            >
              {/* Message header with sender and timestamp */}
              <div className="flex flex-row justify-between items-center mb-3">
                <span className="font-[Inter] text-[12px] leading-[16px] text-[#717171]">
                  {msg.sender}
                </span>
                {msg.timestamp && (
                  <span className="font-[Inter] text-[12px] leading-[16px] text-[#717171]">
                    {msg.timestamp}
                  </span>
                )}
              </div>
              {/* Message content */}
              <p className="font-[Inter] text-[14px] leading-[18px]">
                {msg.message}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Message Input */}
      <div className="bg-[#FAFCFD] p-[16px_14px] ml-[15px] mr-[15px] mb-[15px] border-t border-[#E5E5E5] rounded-[12px] shadow-[0px_-2px_8px_0px_rgba(0,0,0,0.12)]">
        <div className="flex items-center gap-3 px-4">
          <button className="text-[#717171] hover:text-[#1F1D1D] p-2 flex-shrink-0">
            <Paperclip className="w-5 h-5" />
          </button>
          <div className="flex-1 border border-[#1F1D1D] rounded-[24px] px-6 py-3 min-h-[48px] flex items-center">
            <textarea
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Message"
              className="w-full resize-none outline-none font-[Inter] text-[14px] leading-[20px] text-[#1F1D1D] placeholder-[#717171] bg-transparent"
              rows={1}
              style={{ minHeight: '20px' }}
              onInput={(e) => {
                e.target.style.height = "auto";
                e.target.style.height = Math.max(20, e.target.scrollHeight) + "px";
              }}
              onKeyDown={(e) => {
                if (e.key === "Enter" && !e.shiftKey) {
                  e.preventDefault();
                  handleSendMessage();
                }
              }}
            />
          </div>
          <button
            onClick={handleSendMessage}
            disabled={!message.trim()}
            className="bg-[#04203E] text-white p-3 rounded-[20px] hover:bg-[#032840] disabled:bg-gray-300 disabled:cursor-not-allowed transition-colors flex-shrink-0"
          >
            <Send className="w-5 h-5" />
          </button>
        </div>
      </div>
    </div>
  );
};

export default StudentChat;
