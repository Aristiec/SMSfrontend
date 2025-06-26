import React, { useState, useEffect } from "react";
import ChatSidebar from "./ChatSidebar";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { chatHistory as initialChats } from "../../../../data/chatHistory";
import { suggestions } from "../../../../data/suggestions";

const ChatWidget = ({ setShowDocumentAssistant }) => {
  const [isOpen, setIsOpen] = useState(true);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [chatHistory, setChatHistory] = useState(initialChats);
  const [activeChat, setActiveChat] = useState(initialChats[0]);
  const [currentMessage, setCurrentMessage] = useState("");
  const [attachments, setAttachments] = useState([]);

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
    if (currentMessage.trim() || attachments.length) {
      const userMessage = {
        id: Date.now(),
        sender: "user",
        text: currentMessage.trim(),
        timestamp: new Date().toISOString(),
        attachments: [...attachments],
      };

      const botAnalyzingMessage = {
        id: Date.now() + 1,
        sender: "bot",
        text: "Analyzing...",
        timestamp: new Date().toISOString(),
        isAnalyzing: true,
      };

      const updatedMessages = [
        ...(activeChat.messages || []),
        userMessage,
        botAnalyzingMessage,
      ];

      const updatedChat = {
        ...activeChat,
        messages: updatedMessages,
      };

      const updatedHistory = chatHistory.map((chat) =>
        chat.id === activeChat.id ? updatedChat : chat
      );

      setChatHistory(updatedHistory);
      setActiveChat(updatedChat);
      setCurrentMessage("");
      setAttachments([]);
    }
  };

  return (
    <div
      className={`fixed top-0 right-0 z-50 shadow-xl transition-all duration-300 ease-in-out ${
        isOpen ? "" : "hidden"
      }`}
      style={{
        width: isFullscreen ? "100vw" : "560px",
        height: "100vh",
        background:
          "linear-gradient(196.87deg, #E9EEF4 9.57%, #CFDCEB 28.6%, #F4F7FA 74.26%)",
        display: "flex",
        flexDirection: "row",
      }}
    >
      <div className="flex flex-row w-full h-full relative" style={{ flex: 1 }}>
        <div
          className="flex flex-row w-full h-full relative"
          style={{ flex: 1 }}
        >
          {isSidebarOpen && isFullscreen && (
            <div className="h-full">
              <ChatSidebar
                chatHistory={chatHistory}
                activeChat={activeChat}
                onClose={() => setIsSidebarOpen(false)}
                onChatClick={handleChatClick}
              />
            </div>
          )}

          <div className="flex flex-col flex-1 relative z-10">
            {isSidebarOpen && !isFullscreen && (
              <>
                {/* Dark background overlay */}
                <div
                  className="absolute inset-0 bg-[#1F1D1D66] z-20"
                  onClick={() => setIsSidebarOpen(false)}
                />

                {/* Actual sidebar - floating */}
                <div className="absolute top-0 left-0 z-30 h-full">
                  <ChatSidebar
                    chatHistory={chatHistory}
                    activeChat={activeChat}
                    onClose={() => setIsSidebarOpen(false)}
                    onChatClick={handleChatClick}
                  />
                </div>
              </>
            )}

            <ChatHeader
              activeChat={activeChat}
              isFullscreen={isFullscreen}
              isSidebarOpen={isSidebarOpen}
              onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
              onClose={() => setShowDocumentAssistant(false)}
              onOpenSidebar={() => setIsSidebarOpen(true)}
            />

            <div className="flex-1 overflow-y-auto p-6">
              <ChatBody
                activeChat={activeChat}
                suggestions={suggestions}
                isFullscreen={isFullscreen}
                isSidebarOpen={isSidebarOpen}
              />
            </div>

            <ChatFooter
              currentMessage={currentMessage}
              onChangeMessage={(e) => setCurrentMessage(e.target.value)}
              onSendMessage={handleSendMessage}
              onKeyPress={(e) => e.key === "Enter" && handleSendMessage()}
              isFullscreen={isFullscreen}
              isSidebarOpen={isSidebarOpen}
              attachments={attachments}
              onUploadFiles={(files) =>
                setAttachments((prev) => [...prev, ...files])
              }
              onRemoveAttachment={(idx) =>
                setAttachments((prev) => prev.filter((_, i) => i !== idx))
              }
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChatWidget;
