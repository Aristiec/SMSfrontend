import React from 'react';

const steps = [
  { title: "Instructions", number: 1 },
  { title: "System Check", number: 2 },
  { title: "Review", number: 3 }
];

const Stage = ({currentStage}) => {
    console.log(currentStage)
  return (
    <div className="flex items-center justify-between w-full">
      {steps.map((step, index) => (
        <React.Fragment key={step.number}>
          {/* Step */}
          <div className="flex items-center gap-4">
            <div className={`flex items-center justify-center rounded-full w-[40px] h-[40px]  font-[Inter] font-medium text-[16px]  ${currentStage >= step.number ?"bg-[#04203E] text-[#FAFCFD]":"bg-[#CFDCEB] text-[#717171]"}`}>
              {step.number}
            </div>
            <div className={`font-[Inter] font-medium text-[16px] text-[#04203E] ${currentStage >= step.number ?"text-[#04203E]":"text-[#717171]"}`}>
              {step.title}
            </div>
          </div>

          {/* Divider: only render if it's NOT the last step */}
          {index < steps.length - 1 && (
            <div className="flex-1 h-px bg-[#717171] mx-2 w-[190px]"></div>
          )}
        </React.Fragment>
      ))}
    </div>
  );
};

export default Stage;
