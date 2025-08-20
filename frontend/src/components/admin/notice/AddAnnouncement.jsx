import React, { useState } from "react";
import { X } from "lucide-react";

import Dropdown from "../../utils/Dropdown";

const AddAnnouncement = ({ onClose }) => {
  const [announcementType, setAnnouncementType] = useState("General");
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");

  const announcementTypes = ["General", "Alert", "Event", "Sport"];

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ announcementType, title, content });
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black/40 z-50">
      <div className="w-full max-w-2xl bg-white rounded-xl shadow-lg relative p-6">
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 text-[#1F1D1D] "
        >
          <X />
        </button>

        {/* Header */}
        <h1 className="text-lg font-semibold text-[#1F1D1D] mb-6">
          Create New Announcement
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Announcement Type */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#717171]">
              Announcement Type
            </label>
            <div className="flex w-1/2   items-center">
              <Dropdown
                options={announcementTypes}
                onSelect={(value) => setAnnouncementType(value)}
                placeholder="Select Announcement Type"
                selected={announcementType}
                className="w-[54%] border border-[#71717166] rounded-md px-3 py-2 focus:outline-none focus:ring-2 focus:ring-[#04203e] text-sm text-[#1F1D1D] bg-white"
                spanClassName="truncate"
              />
            </div>
          </div>

          {/* Title */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#717171]">
              Title
            </label>
            <input
              type="text"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="Enter Announcement title"
              className="w-full h-10 px-3 border border-[#71717166] rounded-lg focus:outline-none focus:border-[#04203e] text-[#1F1D1D] placeholder-[#717171]"
              required
            />
          </div>

          {/* Content */}
          <div className="space-y-1">
            <label className="block text-sm font-medium text-[#717171]">
              Content
            </label>
            <textarea
              value={content}
              onChange={(e) => setContent(e.target.value)}
              placeholder="Enter Announcement content"
              rows="5"
              className="w-full px-3 py-2 border border-[#71717166] rounded-lg focus:outline-none focus:border-[#04203e] text-[#1F1D1D] placeholder-[#717171] resize-none"
              required
            />
          </div>

          {/* Submit Button */}
          <div className="flex justify-end">
            <button
              type="submit"
              className="px-4 py-2 bg-[#04203E] text-white rounded-md font-[Inter] transition-colors"
            >
              Create announcement
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AddAnnouncement;
