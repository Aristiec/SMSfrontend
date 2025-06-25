import React, { useState, useEffect } from "react";
import {
  X,
  MoveDiagonal,
  Menu,
  Paperclip,
  MessageSquare,
  MoreHorizontal,
} from "lucide-react";
import aristiecLogo from "../../../../assets/logo.svg";

const suggestions = [
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
  { title: "Design a database schema", subtitle: "for an online merch store" },
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
  { title: "Explain airplane", subtitle: "to someone 5 years old" },
];

const chatHistory = [
  {
    id: 1,
    title: "New Chat",
    messages: [],
  },
  {
    id: 2,
    title: "User Seeks Help with ...",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Hi, i wanted your help with my data structures module, I'll attach the files",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        sender: "bot",
        text: "Sure, go ahead and upload the files related to your Data Structures module. Once I have them, I'll help you with whatever you need—be it understanding concepts, solving problems, reviewing code, or preparing for exams.",
        timestamp: new Date().toISOString(),
      },
      {
        id: 3,
        sender: "user",
        text: "How a hash table handles collisions, and compare open addressing with separate chaining in terms of time complexity and practical use cases?",
        timestamp: new Date().toISOString(),
      },
      {
        id: 4,
        sender: "bot",
        text: "Analyzing...",
        timestamp: new Date().toISOString(),
        isTyping: true,
      },
    ],
    attachments: [
      { name: "DS Syllabus.pdf", size: "12.2mb" },
      { name: "Hash table collisions.pdf", size: "3.6mb" },
      { name: "Hash table collisions.pdf", size: "1.2mb" },
    ],
  },
  {
    id: 3,
    title: "Web accessibility",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "Can you help me understand web accessibility best practices?",
        timestamp: new Date().toISOString(),
      },
      {
        id: 2,
        sender: "bot",
        text: "Absolutely! Web accessibility ensures that websites and applications are usable by everyone, including people with disabilities. Here are the key principles and best practices...",
        timestamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 4,
    title: "Design inspiration",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "I need some design inspiration for my portfolio website",
        timestamp: new Date().toISOString(),
      },
    ],
  },
  {
    id: 5,
    title: "What is learning machine",
    messages: [
      {
        id: 1,
        sender: "user",
        text: "What is machine learning and how does it work?",
        timestamp: new Date().toISOString(),
      },
    ],
  },
];

const ChatWidget = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [activeChat, setActiveChat] = useState(chatHistory[0]);
  const [currentMessage, setCurrentMessage] = useState("");

  useEffect(() => {
    if (isFullscreen) {
      setIsSidebarOpen(true);
    }
  }, [isFullscreen]);

  const handleChatClick = (chat) => {
    setActiveChat(chat);
    if (!isFullscreen) {
      setIsSidebarOpen(false);
    }
  };

  const handleSendMessage = () => {
    if (currentMessage.trim()) {
      // Here you would typically send the message to your backend
      // For now, we'll just clear the input
      setCurrentMessage("");
    }
  };

  const handleKeyPress = (e) => {
    if (e.key === "Enter") {
      handleSendMessage();
    }
  };

  if (!isOpen) return null;

  const renderChatContent = () => {
    if (activeChat.messages && activeChat.messages.length > 0) {
      return (
        <div className="space-y-4">
          {activeChat.messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${
                message.sender === "user" ? "justify-end" : "justify-start"
              }`}
            >
              <div
                className={`flex items-start space-x-2 max-w-[80%] ${
                  message.sender === "user"
                    ? "flex-row-reverse space-x-reverse"
                    : ""
                }`}
              >
                {message.sender === "bot" && (
                  <div className="w-8 h-8 bg-[#04203E] rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                    <MessageSquare size={16} className="text-white" />
                  </div>
                )}
                <div
                  className={`p-3 rounded-lg ${
                    message.sender === "user"
                      ? "bg-[#04203E] text-white"
                      : "bg-white text-[#1F1D1D] border border-gray-200"
                  }`}
                >
                  <p className="text-sm">{message.text}</p>
                </div>
              </div>
            </div>
          ))}

          {/* Render attachments if present */}
          {activeChat.attachments && activeChat.attachments.length > 0 && (
            <div className="space-y-2">
              <p className="text-sm text-[#717171]">Attachments:</p>
              <div className="flex flex-wrap gap-2">
                {activeChat.attachments.map((attachment, index) => (
                  <div
                    key={index}
                    className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-2"
                  >
                    <div className="w-8 h-8 bg-red-100 rounded flex items-center justify-center">
                      <span className="text-red-600 text-xs font-bold">
                        PDF
                      </span>
                    </div>
                    <div>
                      <p className="text-xs font-medium text-[#1F1D1D]">
                        {attachment.name}
                      </p>
                      <p className="text-xs text-[#717171]">
                        {attachment.size}
                      </p>
                    </div>
                    <X
                      size={14}
                      className="text-[#717171] cursor-pointer hover:text-[#1F1D1D]"
                    />
                  </div>
                ))}
              </div>
            </div>
          )}

          {/* Input field for continuing conversation */}
          {activeChat.id === 2 && (
            <div className="mt-6">
              <div className="flex items-center space-x-2 mb-4">
                <div className="w-8 h-8 bg-[#04203E] rounded-full flex items-center justify-center flex-shrink-0">
                  <MessageSquare size={16} className="text-white" />
                </div>
                <input
                  type="text"
                  value="How a hash table handles collisions, and compare open addressing with separate chaining in terms of time complexity and practical use cases?"
                  className="flex-1 border border-gray-300 rounded-lg px-4 py-3 text-sm outline-none focus:border-[#04203E] bg-white"
                  readOnly
                />
              </div>
            </div>
          )}
        </div>
      );
    }

    // Default view for new chats
    return (
      <div>
        <div className="text-center mb-6">
          <div className="w-16 h-16 bg-[#04203E] rounded-full mx-auto mb-4 flex items-center justify-center">
            <MessageSquare size={24} className="text-white" />
          </div>

          <h3 className="text-[16px] font-[Inter] text-[#1F1D1D] font-bold">
            How can I help you today?
          </h3>
          <p className="text-[#717171] text-[14px] font-[Inter] mb-6">
            Choose a suggestion below or ask me anything
          </p>
        </div>

        <div className="space-y-4">
          <div
            className={`grid gap-4 ${
              isFullscreen ? "grid-cols-2" : "grid-cols-1"
            } ${isFullscreen && !isSidebarOpen ? "mx-auto" : ""}`}
            style={{
              maxWidth: isFullscreen && !isSidebarOpen ? "1000px" : "100%",
            }}
          >
            {suggestions.map((item, i) => (
              <button
                key={i}
                className="text-left w-full hover:bg-[#e6edf5] transition"
                style={{
                  width: isFullscreen ? "480px" : "100%",
                  height: isFullscreen ? "68px" : "auto",
                  borderRadius: isFullscreen ? "8px" : "6px",
                  gap: isFullscreen ? "12px" : "8px",
                  borderWidth: isFullscreen ? "0.2px" : "0",
                  borderColor: isFullscreen ? "rgba(0,0,0,0.1)" : "transparent",
                  borderStyle: "solid",
                  padding: isFullscreen ? "12px 16px" : "12px 14px",
                  backgroundColor: "#F4F7FA",
                  boxShadow: "0px 1px 2px rgba(0, 0, 0, 0.05)",
                }}
              >
                <span className="font-semibold text-[16px] font-[Inter] text-[#1F1D1D]">
                  {item.title}
                </span>
                <br />
                <span className="text-[#717171] text-[14px] font-[Inter]">
                  {item.subtitle}
                </span>
              </button>
            ))}
          </div>
        </div>
      </div>
    );
  };

  return (
    <div
      className="fixed top-0 right-0 z-50 shadow-xl transition-all duration-300 ease-in-out"
      style={{
        width: isFullscreen ? "100vw" : "560px",
        height: "100vh",
        background:
          "linear-gradient(196.87deg, #E9EEF4 9.57%, #CFDCEB 28.6%, #F4F7FA 74.26%)",
        display: "flex",
        flexDirection: "row",
      }}
    >
      {/* Sidebar if open */}
      {isSidebarOpen && (
        <>
          {!isFullscreen && (
            <div
              className="absolute inset-0 bg-[#1F1D1D66] z-40"
              onClick={() => setIsSidebarOpen(false)}
            />
          )}
          <div
            className={`${
              isFullscreen ? "relative" : "absolute"
            } top-0 left-0 z-50 bg-[#E9EEF4] shadow-lg flex flex-col`}
            style={{ width: "348px", height: "100vh" }}
          >
            {/* Sidebar Header */}
            <div className="bg-[#CFDCEB] flex items-center justify-between px-4 py-5">
              <h3 className="text-[20px] font-semibold text-[#1F1D1D]">
                Chat History
              </h3>
              <X
                size={20}
                className="text-[#1F1D1D] cursor-pointer"
                onClick={() => setIsSidebarOpen(false)}
              />
            </div>

            {/* Sidebar Chat List */}
            <div className="p-4 space-y-3 overflow-y-auto flex-1">
              {chatHistory.map((chat) => (
                <div
                  key={chat.id}
                  className={`flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition ${
                    activeChat.id === chat.id
                      ? "bg-[#dbe3ec]"
                      : "hover:bg-[#dbe3ec]"
                  }`}
                  onClick={() => handleChatClick(chat)}
                >
                  <div className="flex items-center space-x-2 flex-1 min-w-0">
                    <MessageSquare
                      size={18}
                      className="text-[#1F1D1D] flex-shrink-0"
                    />
                    <p className="text-sm text-[#1F1D1D] truncate">
                      {chat.title}
                    </p>
                  </div>
                  <MoreHorizontal
                    size={16}
                    className="text-[#1F1D1D] flex-shrink-0"
                  />
                </div>
              ))}
            </div>

            {/* Sidebar Footer */}
            <div
              className="px-4 py-4 border-t relative"
              style={{
                borderTop: "1px solid rgba(0,0,0,0.1)",
              }}
            >
              <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-gray-300 to-transparent blur-sm" />

              <button
                className="w-full bg-[#04203E] text-white flex items-center justify-center space-x-2 px-4 py-2 rounded-lg hover:bg-[#16314f] transition"
                onClick={() => handleChatClick(chatHistory[0])}
              >
                <MessageSquare size={16} />
                <span className="text-sm font-medium">Start a New Chat</span>
              </button>
            </div>
          </div>
        </>
      )}

      {/* Main Chat Area */}
      <div
        className="flex flex-col transition-all duration-300 ease-in-out"
        style={{
          width: "100%",
        }}
      >
        {/* Header */}
        <div
          className="bg-[#CFDCEB] flex items-center px-4 py-4 relative"
          style={{ height: "72px", flexShrink: 0 }}
        >
          {(!isFullscreen || (isFullscreen && !isSidebarOpen)) && (
            <div className="absolute left-4 top-1/2 -translate-y-1/2">
              <Menu
                size={20}
                className="text-gray-600 cursor-pointer"
                onClick={() => setIsSidebarOpen(true)}
              />
            </div>
          )}

          <div className="mx-auto">
            <h2 className="text-[24px] font-[Inter] font-semibold text-[#1F1D1D]">
              {activeChat.title === "New Chat" ? "Aristiec" : activeChat.title}
            </h2>
          </div>

          <div className="absolute right-4 top-1/2 -translate-y-1/2 flex space-x-3">
            <MoveDiagonal
              size={20}
              className="text-gray-600 cursor-pointer"
              onClick={() => setIsFullscreen((prev) => !prev)}
            />

            <X
              size={20}
              className="text-gray-600 cursor-pointer"
              onClick={() => setIsOpen(false)}
            />
          </div>
        </div>

        {/* Scrollable Chat Body */}
        <div className="flex-1 overflow-y-auto p-6">{renderChatContent()}</div>

        {/* Footer */}
        <div
          className={`flex items-center bg-[#FAFCFD] rounded-[12px] ${
            isFullscreen && !isSidebarOpen
              ? "mx-auto"
              : !isFullscreen && !isSidebarOpen
              ? "ml-[12px]"
              : "ml-3 mr-3"
          }`}
          style={{
            width:
              isFullscreen && !isSidebarOpen
                ? "1044px"
                : !isFullscreen && !isSidebarOpen
                ? "536px"
                : "100%",
            height: "80px",
            padding: "16px",
            gap: "10px",
            position: "relative",
            top: !isFullscreen && !isSidebarOpen ? "12px" : "0",
          }}
        >
          <button className="text-gray-600 p-2 rounded-full hover:bg-gray-100">
            <Paperclip size={18} />
          </button>
          <input
            type="text"
            placeholder="Ask anything"
            className="flex-1 border rounded-full px-4 py-2 outline-none"
            value={currentMessage}
            onChange={(e) => setCurrentMessage(e.target.value)}
            onKeyPress={handleKeyPress}
          />
          <button
            className="bg-[#1a3b5d] text-white p-2 rounded-full hover:bg-[#04203E] transition"
            onClick={handleSendMessage}
          >
            <svg
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              viewBox="0 0 24 24"
              className="w-4 h-4 rotate-0"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path d="M22 2L11 13"></path>
              <path d="M22 2L15 22L11 13L2 9L22 2Z"></path>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
