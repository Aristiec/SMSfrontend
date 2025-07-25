import React, { useState } from "react";
import { X } from "lucide-react";
import Dropdown from "../utils/Dropdown"; 
 

const CreateAnnouncement = ({onClose}) => {
  const [selectedType, setSelectedType] = useState("");
  const announcementTypes = ["General","Event", "Alert"];

  return (
    <div className="w-[528px] h-[563px] p-6 bg-[#FAFCFD] rounded-[12px] flex flex-col gap-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <span className="font-[Inter] font-medium text-[16px] leading-[24px] text-[#000000]">
          Create New Announcement
        </span>
        <X onClick={onClose} className="w-[16px] h-[16px] text-[#1F1D1D] cursor-pointer" />
      </div>

      {/* inside div */}
      <div className="flex flex-col gap-4">
        
        <div className="flex flex-col gap-2 w-[349px] h-[76px]">
          <label className="font-[Inter] font-medium text-[12px] leading-[20px] text-[#374151]">
            Announcement Type
          </label>
          <Dropdown
            options={announcementTypes}
            onSelect={(value) => setSelectedType(value)}
            selected={selectedType}
            placeholder="Select Type"
            className="h-[48px] rounded-[8px] border border-[#717171] px-4 py-3 text-[#1F1D1D] text-[16px] leading-[24px]"
          />
        </div>

        {/* Title */}
        <div className="flex flex-col gap-2 ">
          <label className="font-[Inter] font-medium text-[14px] leading-[24px] text-[#717171]">
            Title
          </label>
          <input
            type="text"
            placeholder="Enter Announcement title"
            className="w-[348px] h-[48px] border border-[#717171] rounded-[12px] px-4 py-3 text-[#717171] font-[Inter] text-[16px] font-normal leading-[24px]"
          />
        </div>

        {/* Content */}
        <div className="flex flex-col gap-2 w-[480px] h-[215px]">
          <label className="font-[Inter] font-medium text-[14px] leading-[24px] text-[#717171]">
            Content
          </label>
          <textarea
            placeholder="Enter Announcement content"
            className="w-[480px] h-[183px] border border-[#717171] rounded-[12px] px-4 py-3 text-[#717171] font-[Inter] text-[16px] font-normal leading-[24px] "
          />
        </div>
      </div>

      {/* Button */}
     <div className="flex justify-end"> 
         <button onClick={onClose} className="w-[179px] h-[40px] bg-[#04203E] text-[#FAFCFD] font-[Inter] text-[14px] font-normal leading-[24px] rounded-[8px] px-4 py-2 flex items-center justify-center cursor-pointer">
        Create announcement
      </button>
     </div>
    </div>
  );
};

export default CreateAnnouncement;
