// src/components/student/AI/Document/ChatBody.jsx
import React, { useState, useRef, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  startSession,
  uploadFile,
  fetchHistory,
} from "../../../../features/chatpdf/chatPdfSlice";
import MessageBubble from "./MessageBubble";
import logo from "../../../../assets/logo.svg";
import { FolderPlus } from "lucide-react";

export default function ChatBody({ messages }) {
  const dispatch = useDispatch();
  const fileInputRef = useRef(null);
  const sessionId = useSelector((state) => state.chatpdf.sessionId);

  const [uploading, setUploading] = useState(false);
  const [dragOver, setDragOver] = useState(false);
  const [statusMessage, setStatusMessage] = useState("");

  // 🔄 Clear status message when switching sessions
  useEffect(() => {
    setStatusMessage("");
  }, [sessionId]);

  const handleLogoError = (e) => {
    e.target.src =
      "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'%3E%3Ccircle cx='50' cy='50' r='40' fill='%234F46E5'/%3E%3C/svg%3E";
  };

  const handleFile = async (file) => {
    if (!file || !file.name.endsWith(".pdf")) {
      setStatusMessage("Please upload a valid PDF file.");
      return;
    }

    setUploading(true);
    setStatusMessage("Starting session...");

    try {
      const sessionRes = await dispatch(startSession()).unwrap();

      const formData = new FormData();
      formData.append("files", file);
      formData.append("session_id", sessionRes.session_id);

      setStatusMessage("Uploading and processing file...");
      await dispatch(uploadFile(formData)).unwrap();

      await dispatch(fetchHistory(sessionRes.session_id)).unwrap();
      setStatusMessage("Upload successful! You can now start chatting.");
    } catch (err) {
      console.error(err);
      setStatusMessage("Something went wrong during upload.");
    } finally {
      setUploading(false);
    }
  };

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    handleFile(file);
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setDragOver(false);
    const file = e.dataTransfer.files[0];
    handleFile(file);
  };

  if (messages && messages.length > 0) {
    return (
      <div className="space-y-4 p-4" role="log" aria-label="Chat messages">
        {messages.map((msg, index) => (
          <MessageBubble key={index} message={msg} />
        ))}
      </div>
    );
  }

  return (
    <div
      className={`flex items-center justify-center h-full px-4 ${dragOver ? "bg-gray-100" : ""}`}
      onDragOver={(e) => {
        e.preventDefault();
        setDragOver(true);
      }}
      onDragLeave={() => setDragOver(false)}
      onDrop={handleDrop}
    >
      <div className="text-center mb-6 max-w-md">
        <div className="w-16 h-16 rounded-full mx-auto mb-4 overflow-hidden">
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
          Upload a file to summarize, explain, or ask anything about your study material.
        </p>

        <div className="flex flex-col items-center">
          <button
            onClick={() => fileInputRef.current.click()}
            className="bg-[#04203E] font-[Inter] text-[14px] font-medium text-[#FAFCFD] px-4 py-2 rounded-lg mb-2 flex items-center gap-2"
            disabled={uploading}
          >
            <FolderPlus className="w-4 h-4" />
            {uploading ? "Uploading..." : "Choose File"}
          </button>

          <p className="text-[14px] text-[#717171] font-[Inter]">
            or Drag & Drop your PDF here
          </p>

          <input
            ref={fileInputRef}
            type="file"
            accept="application/pdf"
            className="hidden"
            onChange={handleFileChange}
          />
        </div>

        {statusMessage && <p className="mt-4 text-sm text-gray-600">{statusMessage}</p>}
      </div>
    </div>
  );
}
