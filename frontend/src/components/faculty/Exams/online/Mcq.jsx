import { Search } from "lucide-react";
import React, { useState, useEffect } from "react";
import { Plus } from "lucide-react";
import PreviewModal from './PreviewModal';

const Mcq = ({ questionNumber = 1, totalQuestions = 1, isLastQuestion = false, onAddNewSection, onQuestionDataChange, initialData }) => {
  const [options, setOptions] = useState(initialData?.options || [""]);
  const [question, setQuestion] = useState(initialData?.question || "");
  const [showPreview, setShowPreview] = useState(false);

  // Update parent whenever data changes
  useEffect(() => {
    if (onQuestionDataChange) {
      onQuestionDataChange({
        type: 'MCQ',
        question,
        options,
        questionNumber
      });
    }
  }, [question, options, questionNumber, onQuestionDataChange]);

  const handleAddOption = () => {
    setOptions([...options, ""]);
  };

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleRemoveOption = (index) => {
    if (options.length > 1) {
      const newOptions = options.filter((_, i) => i !== index);
      setOptions(newOptions);
    }
  };

  const handlePreview = () => {
    setShowPreview(true);
  };

  // Check if all inputs are filled
  const isFormValid = question.trim() && options.some(option => option.trim());

  return (
    <div className="flex flex-col font-[Inter] w-full gap-4 sm:gap-6 lg:gap-8 p-4 sm:p-6 bg-white rounded-[8px] border border-[#E0E0E0]">
      <div className="flex items-center gap-4">
        <p className="font-medium text-lg sm:text-xl leading-[30px] tracking-normal text-[#000000]">
          Create multiple choice questions-
        </p>
        <span className="text-sm text-gray-500">
          ({questionNumber} of {totalQuestions})
        </span>
      </div>
      
      <div className="gap-6 sm:gap-10 flex w-full items-start flex-col sm:flex-row">
        <p className="font-medium text-lg sm:text-xl leading-[30px] tracking-normal py-2 text-[#000000] sm:min-w-[20px]">
          {questionNumber}.
        </p>
        <div className="flex flex-col w-full gap-4 sm:gap-6 lg:gap-7 justify-center">
          <div className="w-full rounded-[8px] border border-[#CCCCCC] py-2 px-3">
            <input
              placeholder="Add question..."
              value={question}
              onChange={(e) => setQuestion(e.target.value)}
              className="w-full outline-none font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-[30px] tracking-normal text-[#1F1D1D] placeholder:text-[#CCCCCC]"
            />
          </div>
          
          <div className="flex flex-col rounded-[8px] border border-[#CCCCCC] p-4 sm:p-6 gap-4 sm:gap-6">
            {options.map((option, index) => (
              <div key={index} className="flex rounded-[8px] items-center gap-4 sm:gap-6">
                <div className="flex rounded-[8px] border border-[#CCCCCC] p-3 sm:p-4 items-center gap-4 sm:gap-6 w-full">
                  <div className="w-3 h-3 border border-[#CCCCCC] rounded-full flex-shrink-0"></div>
                  <input
                    placeholder="Enter your answer"
                    className="font-[400] text-sm sm:text-base outline-none leading-[24px] tracking-normal text-[#1F1D1D] placeholder:text-[#CCCCCC] flex-1"
                    value={option}
                    onChange={(e) => handleOptionChange(index, e.target.value)}
                  />
                </div>
                {options.length > 1 && (
                  <button
                    onClick={() => handleRemoveOption(index)}
                    className="text-red-500 hover:text-red-700 p-1"
                  >
                    ×
                  </button>
                )}
              </div>
            ))}

            <div className="flex">
              <button
                onClick={handleAddOption}
                className="flex py-2 px-4 sm:px-7 gap-2 border border-[#CCCCCC] rounded-[8px] bg-[#FFFFFF] items-center hover:bg-gray-50 transition-colors"
              >
                <Plus size={11} />
                <p className="font-[500] text-sm sm:text-base leading-[24px] tracking-normal text-[#717171]">
                  Add Option
                </p>
              </button>
            </div>
          </div>
          
          <div className="flex flex-col sm:flex-row justify-between w-full gap-4 sm:gap-7">
            <button 
              onClick={handlePreview}
              disabled={!isFormValid}
              className="w-full flex py-3 px-4 sm:px-7 gap-2 bg-[#04203E] rounded-[8px] items-center justify-center hover:bg-[#062952] transition-colors"
            >
              <p className="font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-6 tracking-normal text-[#FAFCFD]">
                Preview
              </p>
            </button>
            {isLastQuestion && onAddNewSection && (
              <button 
                onClick={onAddNewSection}
                className="w-full flex py-3 px-4 sm:px-7 gap-2 bg-[#04203E] rounded-[8px] items-center justify-center hover:bg-[#062952] transition-colors"
              >
                <p className="font-[Inter] font-medium text-base sm:text-lg lg:text-xl leading-6 tracking-normal text-[#FAFCFD]">
                  Add New Section
                </p>
              </button>
            )}
          </div>
        </div>
      </div>
      
      {showPreview && (
        <PreviewModal
          questionData={{
            type: 'MCQ',
            questionNumber,
            question,
            options: options.filter(option => option.trim())
          }}
          onClose={() => setShowPreview(false)}
        />
      )}
    </div>
  );
};

export default Mcq;