import React, { useState } from "react";
import { X, MessageSquare, MoreHorizontal, Trash2, Pencil } from "lucide-react";
import { useSelector, useDispatch } from "react-redux";
import {
  resetChat,
  setActiveSession,
  fetchHistory,
  removeSession,
  changeTitle,
} from "../../../../features/chatpdf/chatPdfSlice";

const ChatSidebar = ({ onClose }) => {
  const dispatch = useDispatch();
  const chatSessions = useSelector((state) => state.chatpdf.chatSessions || []);
  const activeSessionId = useSelector((state) => state.chatpdf.sessionId);

  const [openMenuId, setOpenMenuId] = useState(null);
  const [editingId, setEditingId] = useState(null);
  const [editedTitle, setEditedTitle] = useState("");

  const handleSelectChat = (session) => {
    if (session.id !== activeSessionId) {
      dispatch(setActiveSession(session.id));
      dispatch(fetchHistory(session.id));
    }
  };

  const handleDeleteChat = (sessionId) => {
    if (window.confirm("Are you sure you want to delete this chat?")) {
      dispatch(removeSession(sessionId));
      if (openMenuId === sessionId) setOpenMenuId(null);
    }
  };

  const handleRenameClick = (session) => {
    setEditingId(session.id);
    setEditedTitle(session.title || `Chat ${session.id.slice(-5)}`);
    setOpenMenuId(null);
  };

  const handleRenameSave = (sessionId) => {
    if (editedTitle.trim()) {
      dispatch(changeTitle({ sessionId, title: editedTitle.trim() }));
    }
    setEditingId(null);
    setEditedTitle("");
  };

  const handleNewChat = () => {
    dispatch(resetChat());
  };

  return (
    <div
      className="bg-[#E9EEF4] shadow-lg flex flex-col"
      style={{ width: "348px", height: "100vh" }}
    >
      {/* Header */}
      <div className="bg-[#CFDCEB] flex items-center justify-between px-4 py-5">
        <h3 className="text-[20px] font-semibold text-[#1F1D1D]">Chat History</h3>
        <X size={20} className="cursor-pointer" onClick={onClose} />
      </div>

      {/* Session List */}
      <div className="p-4 space-y-3 overflow-y-auto flex-1 relative">
        {chatSessions.length === 0 && (
          <p className="text-sm text-gray-500">No previous sessions</p>
        )}

        {chatSessions.map((session) => (
          <div
            key={session.id}
            className={`relative group flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer transition ${
              session.id === activeSessionId
                ? "bg-[#dbe3ec]"
                : "hover:bg-[#dbe3ec]"
            }`}
            onClick={() => handleSelectChat(session)}
          >
            <div className="flex items-center space-x-2 flex-1 min-w-0">
              <MessageSquare size={18} />
              {editingId === session.id ? (
                <input
                  type="text"
                  value={editedTitle}
                  autoFocus
                  onChange={(e) => setEditedTitle(e.target.value)}
                  onBlur={() => handleRenameSave(session.id)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") handleRenameSave(session.id);
                    if (e.key === "Escape") setEditingId(null);
                  }}
                  className="text-sm rounded px-1 py-0.5 w-full bg-white border border-gray-300"
                />
              ) : (
                <p className="text-sm truncate">
                  {session.title || `Chat ${session.id.slice(-5)}`}
                </p>
              )}
            </div>

            {/* 3-dot menu */}
            <div className="relative z-10" onClick={(e) => e.stopPropagation()}>
              <MoreHorizontal
                size={16}
                className="cursor-pointer text-gray-700"
                onClick={() =>
                  setOpenMenuId((prev) => (prev === session.id ? null : session.id))
                }
              />
              {openMenuId === session.id && (
                <div className="absolute right-0 top-6 w-40 bg-white shadow-lg rounded-md border z-20">
                  <button
                    onClick={() => handleRenameClick(session)}
                    className="flex items-center w-full px-3 py-2 text-sm hover:bg-gray-100"
                  >
                    <Pencil size={14} className="mr-2" /> Rename Chat
                  </button>
                  <button
                    onClick={() => handleDeleteChat(session.id)}
                    className="flex items-center w-full px-3 py-2 text-sm text-red-600 hover:bg-gray-100"
                  >
                    <Trash2 size={14} className="mr-2" /> Delete Chat
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>

      {/* New Chat */}
      <div className="px-4 py-4 border-t">
        <button
          className="w-full bg-[#04203E] text-white flex items-center justify-center space-x-2 px-4 py-2 rounded-lg"
          onClick={handleNewChat}
        >
          <MessageSquare size={16} />
          <span className="text-sm">Start a New Chat</span>
        </button>
      </div>
    </div>
  );
};

export default ChatSidebar;
