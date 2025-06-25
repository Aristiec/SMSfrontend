import React from "react";
import { Paperclip, Send, X } from "lucide-react";

const ChatFooter = ({
  currentMessage,
  onChangeMessage,
  onSendMessage,
  onKeyPress,
  isFullscreen,
  isSidebarOpen,
  attachments = [],
  onUploadFiles,
  onRemoveAttachment,
}) => {
  const formatFileSize = (size) => {
    const kb = size / 1024;
    return kb < 1024 ? `${kb.toFixed(1)} KB` : `${(kb / 1024).toFixed(1)} MB`;
  };

  const handleFileChange = (e) => {
    const files = Array.from(e.target.files);
    const fileData = files.map((file) => ({
      name: file.name,
      size: formatFileSize(file.size),
    }));
    onUploadFiles(fileData);
  };

  return (
    <div className="p-4 border-[#FAFCFD] bg-[#FAFCFD] rounded-lg m-3">
      {/* 📎 Attachments preview section - no layout change */}
      {attachments.length > 0 && (
        <div className="mb-2 flex flex-wrap gap-2">
          {attachments.map((file, idx) => (
            <div
              key={idx}
              className="flex items-center space-x-2 bg-white border border-gray-200 rounded-lg p-2"
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
              <X
                size={14}
                className="text-[#717171] cursor-pointer hover:text-[#1F1D1D]"
                onClick={() => onRemoveAttachment(idx)}
              />
            </div>
          ))}
        </div>
      )}

      {/* ✅ Keep your existing footer input layout below */}
      <div className="flex items-center gap-2">
        <label className="cursor-pointer">
          <Paperclip size={18} />
          <input
            type="file"
            accept=".pdf"
            className="hidden"
            multiple
            onChange={handleFileChange}
          />
        </label>

        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 px-3 py-2 border rounded-lg"
          value={currentMessage}
          onChange={onChangeMessage}
          onKeyDown={onKeyPress}
        />
        <button
          onClick={onSendMessage}
          className="w-10 h-10 bg-[#04203E] text-[#FAFCFD] flex items-center justify-center rounded-full"
        >
          <Send size={16} />
        </button>
      </div>
    </div>
  );
};

export default ChatFooter;
