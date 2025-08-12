// src/components/student/AI/Document/UploadPDF.jsx

import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { startSession, uploadFile, fetchHistory } from "@/features/chatpdf/chatpdfSlice";
import { toast } from "react-toastify";

export default function UploadPDF() {
  const dispatch = useDispatch();
  const sessionId = useSelector((state) => state.chatpdf.sessionId);
  const [file, setFile] = useState(null);
  const [uploading, setUploading] = useState(false);

  const handleFileChange = (e) => {
    setFile(e.target.files[0]);
  };

  const handleUpload = async () => {
    if (!file) {
      toast.warn("Please choose a PDF file");
      return;
    }

    try {
      setUploading(true);
      toast.info("Starting session...");

      // Step 1: Create session
      const sessionRes = await dispatch(startSession()).unwrap();
      const session_id = sessionRes.session_id;

      // Step 2: Upload file
      const formData = new FormData();
      formData.append("files", file);
      formData.append("session_id", session_id);

      toast.info("Uploading and processing file...");

      await dispatch(uploadFile(formData)).unwrap();

      // Step 3: Fetch chat history
      await dispatch(fetchHistory(session_id)).unwrap();

      toast.success("Upload successful! You can now start chatting.");
    } catch (err) {
      console.error("Upload Error:", err);
      toast.error("Something went wrong during upload.");
    } finally {
      setUploading(false);
    }
  };

  return (
    <div className="p-4 border rounded-md shadow bg-white w-full max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-3">Upload a PDF to start</h2>

      <input
        type="file"
        accept="application/pdf"
        onChange={handleFileChange}
        className="mb-3 w-full"
      />

      <button
        onClick={handleUpload}
        disabled={uploading}
        className="bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 disabled:opacity-50"
      >
        {uploading ? "Uploading..." : "Upload & Start Chat"}
      </button>
    </div>
  );
}
