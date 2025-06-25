import React from "react";
import Header from "./Header.jsx";
import Footer from "./Footer.jsx";
import aristiecLogo from "../../../../assets/logo.svg";

const suggestions = [
  {
    title: "Explain airplain",
    subtitle: "to someone 5 years old",
  },
  {
    title: "Design a database schema",
    subtitle: "for an online merch store",
  },
  {
    title: "Explain airplain",
    subtitle: "to someone 5 years old",
  },
  {
    title: "Explain airplain",
    subtitle: "to someone 5 years old",
  },
  {
    title: "Explain airplain",
    subtitle: "to someone 5 years old",
  },
];
const GeneralAssistant = ({
  setShowGeneralAssistant,
  showGeneralAssistant,
}) => {
  return (
    <div className="h-[100dvh] overflow-y-hidden flex flex-col  ">
      <Header
        setShowGeneralAssistant={setShowGeneralAssistant}
        showGeneralAssistant={showGeneralAssistant}
      />
      <div className="flex flex-col items-center mt-[4%] ">
        <div className="w-[80px] h-[80px] rounded-full bg-blue-600 flex items-center justify-center mb-[24px]">
          <img
            src={aristiecLogo}
            alt="Logo"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="w-[307px] h-[46px] flex flex-col items-center gap-[4px]">
          <p className="text-[#1F1D1D] font-[Inter] font-[700] text-[16px] leading-[24px] text-center tracking-[-0.01em]">
            Hi there! I’m your Smart Assistant
          </p>
          <p className="text-[#717171] font-[Inter] font-[400] text-[14px] leading-[18px] text-center tracking-[-0.01em]">
            How can I help you today?
          </p>
        </div>
      </div>
      <div className="w-full  mx-auto mt-7 flex flex-col gap-4 px-[24px]">
        {suggestions.map((item, index) => (
          <div
            key={index}
            className="w-full h-[68px] bg-[#F4F7FA]  border-[#717171] border-[0.2px] shadow-[0px_4px_8px_0px_#0000001F] rounded-[8px] px-[16px] py-[12px] flex flex-col justify-center gap-[2px]"
          >
            <p className="text-[#1F1D1D] font-[Inter] font-[600] text-[16px] leading-[21px] tracking-[-0.4px]">
              {item.title}
            </p>
            <p className="text-[#717171] font-[Inter] font-[400] text-[16px] leading-[21px] tracking-[-0.4px]">
              {item.subtitle}
            </p>
          </div>
        ))}
      </div>
      <Footer />
    </div>
  );
};

export default GeneralAssistant;
