// src/components/student/AI/Document/ChatWidget.jsx
import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  sendQuestion,
  fetchHistory,
  setActiveSession,
  loadAllSessions,
} from "../../../../features/chatpdf/chatpdfSlice";

import ChatSidebar from "./ChatSidebar";
import ChatHeader from "./ChatHeader";
import ChatBody from "./ChatBody";
import ChatFooter from "./ChatFooter";
import { suggestions } from "../../../../data/suggestions";


const ChatWidget = ({ setShowDocumentAssistant }) => {
  const dispatch = useDispatch();
  const sessionId = useSelector((state) => state.chatpdf.sessionId);
  const messages = useSelector((state) => state.chatpdf.messagesBySession?.[sessionId] || []);

  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const [currentMessage, setCurrentMessage] = useState("");
  const [attachments, setAttachments] = useState([]);
  

  useEffect(() => {
    dispatch(loadAllSessions());
  }, []);

  useEffect(() => {
    if (isFullscreen) setIsSidebarOpen(true);
  }, [isFullscreen]);

  const handleSendMessage = async () => {
    if (!currentMessage.trim()) return;

    try {
      await dispatch(sendQuestion({ sessionId, question: currentMessage })).unwrap();
      setCurrentMessage("");
    } catch (err) {
      console.error("❌ Failed to send message:", err);
    }
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
      <div className="flex flex-row w-full h-full relative" style={{ flex: 1 }}>
        {isSidebarOpen && (
          <ChatSidebar onClose={() => setIsSidebarOpen(false)} />
        )}

        <div className="flex flex-col flex-1 relative z-10">
          <ChatHeader
            activeChat={{ title: `Chat` }}
            isFullscreen={isFullscreen}
            isSidebarOpen={isSidebarOpen}
            onToggleFullscreen={() => setIsFullscreen((prev) => !prev)}
            onClose={() => setShowDocumentAssistant(false)}
            onOpenSidebar={() => setIsSidebarOpen(true)}
          />

          <div className="flex-1 overflow-y-auto p-6">
            <ChatBody
              messages={messages}
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
  );
};

export default ChatWidget;
