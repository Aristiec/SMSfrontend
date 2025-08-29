import React, { useState } from "react";
import { Plus } from "lucide-react";
import { FiAlertCircle } from "react-icons/fi";
import { FaBookOpen, FaCalendarAlt } from "react-icons/fa";
import AddAnnouncement from "../../components/admin/notice/AddAnnouncement";
import ErrorBoundary from "../../components/admin/tabletimegrid.jsx/ErrorBoundary";
import { mockNotices } from "../../data/mockNotices";

// helper to map iconType → JSX
const getIcon = (iconType) => {
  switch (iconType) {
    case "alert":
      return <FiAlertCircle className="text-[#EF4444] w-[15px] h-[15px]" />;
    case "general":
      return <FaBookOpen className="text-[#1D4ED8] w-[15px] h-[15px]" />;
    case "event":
      return <FaCalendarAlt className="text-[#059669] w-[15px] h-[15px]" />;
    default:
      return null;
  }
};

const Notices = () => {
  const [expandedIds, setExpandedIds] = useState([]);
  const [announcementType, setAnnouncementType] = useState(false);
  const [noticesList, setNoticesList] = useState(mockNotices);

  const toggleExpand = (id) => {
    setExpandedIds((prev) =>
      prev.includes(id) ? prev.filter((i) => i !== id) : [...prev, id]
    );
  };

  const getPreviewText = (text, wordLimit = 30) => {
    const words = text.split(" ");
    return words.length > wordLimit
      ? words.slice(0, wordLimit).join(" ") + "..."
      : text;
  };

  return (
    <div className="mx-auto bg-[#E9EEF4] flex flex-col gap-8 min-h-screen font-[Inter]">
      <div className="flex flex-col px-4 gap-5 mt-4">
        {/* Header */}
        <div className="sticky top-20 rounded-[12px] px-6 py-4 bg-[#04203E] flex items-center justify-between h-[68px]">
          <h2 className="text-[#FAFCFD] font-bold text-2xl md:text-3xl">
            Notices & Announcements
          </h2>

          <button
            className="bg-white text-[#04203E] px-4 py-2 rounded-md font-medium text-md hover:bg-gray-100 flex items-center"
            onClick={() => setAnnouncementType(true)}
          >
            <Plus className="mr-2" />
            Create Announcement
          </button>
        </div>

        {/* Notices */}
        <div className="mt-5 space-y-6">
          {noticesList.map((notice) => {
            const isExpanded = expandedIds.includes(notice.id);
            const shouldTruncate =
              notice.plaindescription?.split(" ").length > 30;

            return (
              <div
                key={notice.id}
                className={`${notice.bgColor} shadow-md rounded-[12px] p-6 flex flex-col gap-6 cursor-pointer`}
                onClick={() => toggleExpand(notice.id)}
              >
                {/* Type & Date */}
                <div className="flex justify-between items-center">
                  <div className="flex items-center gap-3">
                    {getIcon(notice.iconType)}
                    <span
                      className={`${notice.labelColor} text-sm md:text-base font-medium`}
                    >
                      {notice.type}
                    </span>
                  </div>
                  <span className="text-[#1F1D1D] text-[12px] font-normal">
                    {notice.date}
                  </span>
                </div>

                {/* Title & Description */}
                <div className="flex flex-col gap-3">
                  <h3 className="text-[#1F1D1D] text-lg md:text-xl font-semibold">
                    {notice.title}
                  </h3>

                  <div
                    className={`overflow-hidden transition-all duration-700 ease-in-out ${
                      isExpanded ? "max-h-[500px] opacity-100" : "max-h-[72px] opacity-90"
                    }`}
                  >
                    <p className="text-[#1F1D1D] text-base text-justify">
                      {isExpanded || !shouldTruncate
                        ? notice.plaindescription
                        : getPreviewText(notice.plaindescription)}

                      {shouldTruncate && !isExpanded && (
                        <span className="text-[#0077FF] ml-1 cursor-pointer font-medium">
                          read more
                        </span>
                      )}
                    </p>
                  </div>
                </div>

                {/* Footer */}
                <div className="flex justify-between items-center">
                  <div className="flex gap-1 text-xs text-[#1F1D1D]">
                    <span>Posted by:</span>
                    <span>{notice.postedBy}</span>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Modal */}
      {announcementType && (
        <div className="fixed inset-0 flex items-center justify-center bg-black/30 z-50">
          <div className="bg-white rounded-2xl shadow-lg w-full max-w-lg p-6 relative">
            <button
              onClick={() => setAnnouncementType(false)}
              className="absolute top-3 right-3 text-gray-600 hover:text-black"
            >
              ✖
            </button>

            <ErrorBoundary>
              <AddAnnouncement
                onClose={() => setAnnouncementType(false)}
                onAdd={(newNotice) => {
                  setNoticesList((prev) => [
                    { ...newNotice, id: prev.length + 1 },
                    ...prev,
                  ]);
                  setAnnouncementType(false);
                }}
              />
            </ErrorBoundary>
          </div>
        </div>
      )}
    </div>
  );
};

export default Notices;
