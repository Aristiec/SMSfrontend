import React, { useState, useRef, useEffect } from "react";
import leftArrow from "../../../assets/left.svg";
import downArrowIcon from "../../../assets/down.svg";
import clockIcon from "../../../assets/redClock.svg";
import statusIcon from "../../../assets/pending.svg";
import anti from "../../../assets/anti.svg";
import page from "../../../assets/page.svg";

const ViewDetails = () => {
  const [isOpen, setIsOpen] = useState(false);
  const contentRef = useRef(null);
  const [maxHeight, setMaxHeight] = useState("0px");

  useEffect(() => {
    if (isOpen) {
      setMaxHeight(`${contentRef.current.scrollHeight}px`);
    } else {
      setMaxHeight("0px");
    }
  }, [isOpen]);
  return (
   <>
    
      

      {/* Main content container */}
      
        {/* Back Button */}
        

        {/* Assignment Card */}
        <div className="w-full rounded-[12px] p-6 bg-[#FAFCFD] shadow-md ">
          <div className="flex flex-col gap-2">
            {/* Top Section */}
            <div className="flex justify-between flex-wrap">
              {/* Left Content */}
              <div className="flex flex-col gap-3 ">
                <div className="flex flex-col gap-1">
                  <p className="text-[16px]   leading-[24px] text-[#1F1D1D] font-[Inter] font-[500]">
                    Literature Review
                  </p>
                  <p className="text-[16px]  leading-[24px] text-[#1F1D1D] font-[Inter] font-[400]">
                    Operating System
                  </p>
                </div>
                <p className="text-[12px] font-[400] leading-[18px] text-[#1F1D1D] font-[Inter]">
                  Analysis of Shakespeare's Macbeth.
                </p>
              </div>

              {/* Right Status */}
              <div className="flex items-start gap-2 mt-2 sm:mt-0">
                <img src={anti} alt="status" className="w-[18px] h-[18px]" />
                <p className="text-[16px] font-[600] leading-[20px] text-[#EF4444]">
                  Overdue
                </p>
              </div>
            </div>

            {/* Middle Section: Due Date and Max Marks */}
            <div className="flex items-center gap-6 flex-wrap text-[12px]">
              {/* Due Date */}
              <div className="flex items-center gap-1 ">
                <img
                  src={clockIcon}
                  alt="calendar"
                  className="w-[13px] h-[13px] "
                />
                <span className="text-[#EF4444] font-[400] text-[14px] font-[Inter]">
                  Due:
                </span>
                <span className="font-[400] text-[14px] text-[#EF4444] font-[Inter]">
                  Feb 5, 2024, 11:59 PM
                </span>
              </div>

              {/* Max Marks */}
              <div className="flex items-center gap-1">
                <span className="text-[#1F1D1D] font-[Inter] font-[400] text-[14px]">
                  Max Marks: 20
                </span>
              </div>
            </div>
            <div>
              <div className="flex rounded-[8px] gap-[8px] p-[8px] items-center bg-[#FEF2F2]">
                <img src={anti} />
                <p className="font-[Inter] font-[400] text-[16px] leading-[0] text-center text-[#EF4444]">
                  Late submissions are not allowed
                </p>
              </div>
            </div>

            {/* const content ="Assignment Instruction: Read the full play with focus on key scenes (witches, soliloquies, Lady Macbeth’s arc, final act). Choose focus area: Theme (e.g., ambition, guilt, fate vs free will) Character (e.g., Macbeth, Lady Macbeth) Literary device (e.g., symbolism, motifs, foreshadowing) Review at least 3 academic sources (books, journals, essays). Summarize and analyze the views of each critic. Add your own interpretation and compare it with critics’ views. Discuss modern relevance of the play or chosen theme/character. Write 1000–1500 words, properly structured with intro, body, and conclusion. Use quotes from the play to support analysis. Follow formatting rules: Times New Roman, 12pt, 1.5 spacing, submit as PDF or Word. Include references (MLA/APA/Chicago style)." */}

            <div
              ref={contentRef}
              style={{ maxHeight }}
              className=" overflow-hidden transition-all font-[400] duration-300 ease-in-out text-[#1F1D1D] font-[Inter] text-[14px] leading-[24px] tracking-[0] gap-[12px] "
            >
              <div className="flex flex-col gap-1 ">
                <h3 className=" font-[700]  flex items-center ">
                  Assignment Instruction:
                </h3>
                <p className=" flex items-center">
                  Read the full play with focus on key scenes (witches,
                  soliloquies, Lady Macbeth’s arc, final act). Choose focus
                  area:
                </p>
                <ul className="  list-disc list-inside">
                  <li>Theme (e.g., ambition, guilt, fate vs free will)</li>
                  <li>Character (e.g., Macbeth, Lady Macbeth)</li>
                  <li>
                    Literary device (e.g., symbolism, motifs, foreshadowing)
                  </li>
                </ul>
                <p>
                  Review at least 3 academic sources (books, journals, essays).
                </p>
                <p>Summarize and analyze the views of each critic.</p>
                <p>
                  Add your own interpretation and compare it with critics’
                  views.
                </p>
                <p>
                  Discuss modern relevance of the play or chosen
                  theme/character.
                </p>
                <p>
                  Write 1000–1500 words, properly structured with intro, body,
                  and conclusion.
                </p>
                <p>Use quotes from the play to support analysis.</p>
                <p>
                  Follow formatting rules: Times New Roman, 12pt, 1.5 spacing,
                  submit as PDF or Word.
                </p>
                <p>Include references (MLA/APA/Chicago style).</p>
              </div>

              <div className="flex flex-col py-[12px] gap-[12px] font-[Inter]">
                <p className="font-[700] text-[14px] leading-[24px] tracking-[0] flex items-center text-[#1F1D1D]">
                  Recourses
                </p>
                <div className="flex flex-col gap-[8px]">
                  <div className="flex gap-[8px] rounded-[8px] p-[8px] bg-[#CFDCEB]">
                    <img src={page} />
                    <p className="font-[400] text-[13.6px] leading-[24px] tracking-[0] flex items-center text-[#04203E]">
                      Assignment Guidelines.pdf
                    </p>
                  </div>
                  <div className="flex gap-[8px] rounded-[8px] p-[8px] bg-[#CFDCEB]">
                    <img src={page} />
                    <p className="font-[400] text-[13.6px] leading-[24px] tracking-[0] flex items-center text-[#04203E]">
                      Macbeth Analysis Examples.pdf
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Bottom Section: View More */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="flex items-center gap-2 cursor-pointer w-fit"
            >
              <img
                src={downArrowIcon}
                alt="arrow"
                className="w-[16px] h-[9px]"
              />
              <p className="text-[14px] font-[400] font-[Inter] leading-[24px] text-[#04203E]">
                {isOpen ? "View Less" : "View More"}
              </p>
            </button>
          </div>
        </div>
      
    </>
  );
};

export default ViewDetails;
